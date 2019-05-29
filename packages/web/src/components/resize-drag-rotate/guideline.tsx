import * as React from "react";
import * as ReactDOM from "react-dom";
import { Point } from "./geometry";

export interface IAlignable {
  minY(): number;
  maxY(): number;
  minX(): number;
  maxX(): number;
  center(): Point;
  justify(dx: number, dy: number, dw: number, dh: number): void;
  isJustifying(): boolean;
}

export interface ILineProps {
  from: Point;
  to: Point;
  zIndex: number;
}

export class Line extends React.Component<ILineProps, ILineProps> {
  static defaultProps: ILineProps = {
    from: new Point(),
    to: new Point(),
    zIndex: 20
  };

  render() {
    const { from, to, zIndex } = this.props;
    const display = !from.equals(to);
    const style: React.CSSProperties = {
      display: display ? "block" : "none",
      position: "absolute",
      backgroundColor: "#558DFC",
      zIndex
    };

    if (display) {
      const top = from.y;
      const left = from.x;
      let width = 0;
      let height = 0;
      if (from.x === to.x) {
        width = 1;
        height = to.y - from.y;
      } else {
        width = to.x - from.x;
        height = 1;
      }
      style.position = "absolute";
      style.top = top;
      style.left = left;
      style.width = width;
      style.height = height;
    }

    return <div style={style} />;
  }
}

export interface IGuidelineProps {
  enable: boolean;
  elements: IAlignable[];
  activeElement?: IAlignable;
  enableJustification?: boolean;
}

export interface IGuidelineProps {
  guidelines: ILineProps[];
}

/**
 * 方格线
 */
export class Guideline extends React.Component<IGuidelineProps, IGuidelineProps> {
  static defaultProps: IGuidelineProps = {
    enable: false,
    elements: [],
    activeElement: null,
    enableJustification: true,
    guidelines: []
  };

  prevMousePosition = new Point();

  constructor(props) {
    super(props);
    this.state = {
      guidelines: props.guidelines
    } as any;
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleMouseDown);
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseDown);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseDown = (e: MouseEvent) => {
    if (!this.props.enable || !this.shouldRenderLines()) return;
    this.setState({
      guidelines: []
    });

    this.prevMousePosition = new Point(e.pageX, e.pageY);
  };

  handleMouseMove = (e: MouseEvent) => {
    if (!this.props.enable || !this.shouldRenderLines()) return;
    const cur = new Point(e.pageX, e.pageY);
    const dx = cur.x - this.prevMousePosition.x;
    const dy = cur.y - this.prevMousePosition.y;
    const needJustify = {
      x: Math.abs(e.movementX) > 0,
      y: Math.abs(e.movementY) > 0
    };
    const lines = this.makeGuidelines(needJustify);
    this.setState({ guidelines: lines });
    this.prevMousePosition = cur;
  };

  makeGuidelines = (needJustify: { x: boolean; y: boolean }) => {
    const { elements, activeElement, enableJustification } = this.props;
    if (elements.length < 2) return [];

    const minX = activeElement.minX();
    const maxX = activeElement.maxX();
    const minY = activeElement.minY();
    const maxY = activeElement.maxY();
    const center = activeElement.center();

    // point containers
    const minXPoints: Point[] = [];
    const maxXPoints: Point[] = [];

    const minYPoints: Point[] = [];
    const maxYPoints: Point[] = [];

    const centerXPoints: Point[] = [];
    const centerYPoints: Point[] = [];

    const floorEqual = (a, b, tolerant = 0) => {
      return Math.abs(Math.floor(a) - Math.floor(b)) <= tolerant;
    };

    // collect points
    elements.forEach(el => {
      if (el === activeElement) return;

      const elMinX = el.minX();
      const elMaxX = el.maxX();
      const elMinY = el.minY();
      const elMaxY = el.maxY();
      const elCenter = el.center();

      // minX
      if (floorEqual(minX, elMinX, 1)) {
        minXPoints.push(new Point(elMinX, elMinY));
        minXPoints.push(new Point(elMinX, elMaxY));
      } else if (floorEqual(minX, elMaxX, 1)) {
        minXPoints.push(new Point(elMaxX, elMinY));
        minXPoints.push(new Point(elMaxX, elMaxY));
      }

      // maxX
      if (floorEqual(maxX, elMinX, 1)) {
        maxXPoints.push(new Point(elMinX, elMinY));
        maxXPoints.push(new Point(elMinX, elMaxY));
      } else if (floorEqual(maxX, elMaxX, 1)) {
        maxXPoints.push(new Point(elMaxX, elMinY));
        maxXPoints.push(new Point(elMaxX, elMaxY));
      }

      // minY
      if (floorEqual(minY, elMinY, 1)) {
        minYPoints.push(new Point(elMinX, elMinY));
        minYPoints.push(new Point(elMaxX, elMinY));
      } else if (floorEqual(minY, elMaxY, 1)) {
        minYPoints.push(new Point(elMinX, elMaxY));
        minYPoints.push(new Point(elMaxX, elMaxY));
      }

      // maxY
      if (floorEqual(maxY, elMinY, 1)) {
        maxYPoints.push(new Point(elMinX, elMinY));
        maxYPoints.push(new Point(elMaxX, elMinY));
      } else if (floorEqual(maxY, elMaxY, 1)) {
        maxYPoints.push(new Point(elMinX, elMaxY));
        maxYPoints.push(new Point(elMaxX, elMaxY));
      }

      // centerX
      if (floorEqual(center.x, elCenter.x, 1)) {
        centerXPoints.push(new Point(elCenter.x, elMinY));
        centerXPoints.push(new Point(elCenter.x, elMaxY));
      }

      // centerY
      if (floorEqual(center.y, elCenter.y, 1)) {
        centerYPoints.push(new Point(elMinX, elCenter.y));
        centerYPoints.push(new Point(elMaxX, elCenter.y));
      }
    });

    const ret = [];

    // resolve collected points
    if (minXPoints.length > 1) {
      const leftTopPoint = new Point(Number.MAX_VALUE, minY);
      const leftBottomPoint = new Point(Number.MAX_VALUE, maxY);

      minXPoints.forEach(p => {
        leftTopPoint.x = Math.min(leftTopPoint.x, p.x);
        leftTopPoint.y = Math.min(leftTopPoint.y, p.y);
        leftBottomPoint.x = Math.min(leftBottomPoint.x, p.x);
        leftBottomPoint.y = Math.max(leftBottomPoint.y, p.y);
      });

      ret.push({
        from: leftTopPoint,
        to: leftBottomPoint
      });

      if (enableJustification && needJustify.x && !activeElement.isJustifying()) {
        activeElement.justify(leftTopPoint.x - minX, NaN, NaN, NaN);
      }
    }

    if (maxXPoints.length > 1) {
      const rightTopPoint = new Point(Number.MAX_VALUE, minY);
      const rightBottomPoint = new Point(Number.MAX_VALUE, maxY);

      maxXPoints.forEach(p => {
        rightTopPoint.x = Math.min(rightTopPoint.x, p.x);
        rightTopPoint.y = Math.min(rightTopPoint.y, p.y);
        rightBottomPoint.x = Math.min(rightBottomPoint.x, p.x);
        rightBottomPoint.y = Math.max(rightBottomPoint.y, p.y);
      });

      ret.push({
        from: rightTopPoint,
        to: rightBottomPoint
      });

      if (enableJustification && needJustify.x && !activeElement.isJustifying()) {
        activeElement.justify(rightTopPoint.x - maxX, NaN, NaN, NaN);
      }
    }

    if (minYPoints.length > 1) {
      const topLeftPoint = new Point(minX, Number.MAX_VALUE);
      const topRightPoint = new Point(maxX, Number.MAX_VALUE);

      minYPoints.forEach(p => {
        topLeftPoint.x = Math.min(topLeftPoint.x, p.x);
        topLeftPoint.y = Math.min(topLeftPoint.y, p.y);
        topRightPoint.x = Math.max(topRightPoint.x, p.x);
        topRightPoint.y = Math.min(topRightPoint.y, p.y);
      });

      ret.push({
        from: topLeftPoint,
        to: topRightPoint
      });

      if (enableJustification && needJustify.y && !activeElement.isJustifying()) {
        activeElement.justify(NaN, topLeftPoint.y - minY, NaN, NaN);
      }
    }

    if (maxYPoints.length > 1) {
      const bottomLeftPoint = new Point(minX, Number.MAX_VALUE);
      const bottomRightPoint = new Point(maxX, Number.MAX_VALUE);

      maxYPoints.forEach(p => {
        bottomLeftPoint.x = Math.min(bottomLeftPoint.x, p.x);
        bottomLeftPoint.y = Math.min(bottomLeftPoint.y, p.y);
        bottomRightPoint.x = Math.max(bottomRightPoint.x, p.x);
        bottomRightPoint.y = Math.min(bottomRightPoint.y, p.y);
      });

      ret.push({
        from: bottomLeftPoint,
        to: bottomRightPoint
      });

      if (enableJustification && needJustify.y && !activeElement.isJustifying()) {
        activeElement.justify(NaN, bottomLeftPoint.y - maxY, NaN, NaN);
      }
    }

    if (centerXPoints.length) {
      const from = new Point(centerXPoints[0].x, minY);
      const to = new Point(centerXPoints[0].x, maxY);
      centerXPoints.forEach(p => {
        from.y = Math.min(from.y, p.y);
        to.y = Math.max(to.y, p.y);
      });
      ret.push({ from, to });

      if (enableJustification && needJustify.x && !activeElement.isJustifying()) {
        activeElement.justify(from.x - center.x, NaN, NaN, NaN);
      }
    }

    if (centerYPoints.length) {
      const from = new Point(minX, centerYPoints[0].y);
      const to = new Point(maxX, centerYPoints[0].y);
      centerYPoints.forEach(p => {
        from.x = Math.min(from.x, p.x);
        to.x = Math.max(to.x, p.x);
      });
      ret.push({ from, to });

      if (enableJustification && needJustify.y && !activeElement.isJustifying()) {
        const w = maxX - minX;
        const h = maxY - minY;
        activeElement.justify(NaN, from.y - center.y, NaN, NaN);
      }
    }

    return ret;
  };

  handleMouseUp = () => {
    if (!this.props.enable || !this.shouldRenderLines()) return;
  };

  shouldRenderLines = () => {
    return this.props.enable && this.props.activeElement;
  };

  render() {
    let { guidelines } = this.state;
    if (!this.shouldRenderLines()) guidelines = [];
    return (
      <div>
        {guidelines.map((p, i) => {
          const { from, to, zIndex } = p;
          return <Line key={i} from={from} to={to} zIndex={zIndex} />;
        })}
      </div>
    );
  }
}
