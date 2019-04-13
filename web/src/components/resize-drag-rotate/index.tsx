import React, {Component} from "react";
import {IAlignable} from "./guideline";

import "./index.less";
import {Point} from "./geometry";

export interface IPosition {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
}

export interface IDraggingParams extends IPosition {
  inst: Component;
}

type Direction = "top" |  "bottom" | "left" | "right" | "top-left" | "top-right" |"bottom-left" | "bottom-right";

export interface IProps {
  x?: number;//顶点x
  y?: number;//顶点y
  w?: number;// 宽度
  h?: number;// 高度
  r?: number;// 旋转
  draggable?: boolean;
  resizable?: boolean;
  rotatable?: boolean;
  dragAxis?: "x" | "y" | "both";//拉伸方式
  resizeAxis?: "x" | "y" | "both";//拉伸方式
  dragGrid?: [number, number];//TODO 这个是什么意思?
  resizeGrid?: [number, number];//TODO 这个是什么意思?
  bounds?: null | "parent" | HTMLElement;//??
  minWidth?: number;//最小宽度
  minHeight?: number;//最小高度
  maxWidth?: number;//最大宽度
  maxHeight?: number;//最大高度
  handle?: string;//TODO
  cancel?: string;//??
  directions?: Direction[];//可操作方向
  //当点击编辑时.
  onDragStart?(p: IDraggingParams): void;
  //开始移动时.
  onDragging?(p: IDraggingParams): void;
  //结束移动时.
  onDragEnd?(p: IDraggingParams): void;

  [prop: string]: any;
}

export interface IState {
  //当前值
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;

  //记录上一次的值
  lastX: number;
  lastY: number;
  lastW: number;
  lastH: number;
  lastR: number;

  dragStartX: number;
  dragStartY: number;
  resizeStartX: number;
  resizeStartY: number;
  rotateStartX: number;
  rotateStartY: number;
  resizing: boolean;
  rotating: boolean;
  dragging: boolean;
  direction?: string;
}

const ResizeHandler = ({resizeStart, directions = []}) => {
  return (
    <div className="resize-handles-wrapper">
      {directions.map(direction => (
        <div
          key={direction}
          className={`resize resize-${direction}`}
          onMouseDown={e => resizeStart(e, direction)}
        />
      ))}
    </div>
  );
};

export default class DRR extends Component<IProps, IState> implements IAlignable {

  //当前元素
  wrapper: HTMLDivElement;

  constructor(props: IProps) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      w: props.w,
      h: props.h,
      r: props.r,
      lastX: 0,
      lastY: 0,
      lastW: 0,
      lastH: 0,
      lastR: 0,
      dragStartX: 0,
      dragStartY: 0,
      resizeStartX: 0,
      resizeStartY: 0,
      rotateStartX: 0,
      rotateStartY: 0,
      resizing: false,
      rotating: false,
      dragging: false
    };
  }

  static defaultProps = {
    x: 0,
    y: 0,
    r: 0,
    draggable: true,
    resizable: true,
    rotatable: true,
    dragAxis: "both", // 'x' | 'y' | 'both'
    resizeAxis: "both", // 'x' | 'y' | 'both'
    dragGrid: [1, 1], // 移动最小间隔??? TODO
    resizeGrid: [1, 1], // 缩放最小间隔  TODO
    bounds: null, // 界限 "parent" || document.querySelector(selector);
    minWidth: 50, // 最小宽度
    minHeight: 50, // 最小高度
    maxWidth: undefined, // 最大宽度
    maxHeight: undefined, // 最大高度,
    handle: "",
    cancel: "",
    directions: [
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right"
    ],
    onDragEnd: () => {
    },
    onDragging: () => {
    },
    onDragStart() {
    }
  };

  componentDidMount() {
    document.body.addEventListener("mousemove", this.handleMove, false);
    document.body.addEventListener("mouseup", this.handleUp, false);
  }

  componentWillReceiveProps(nextProps) {
    const {x, y, r, w, h} = nextProps;
    if (
      x !== this.state.x ||
      y !== this.state.y ||
      r !== this.state.r ||
      w !== this.state.w ||
      h !== this.state.h
    ) {
      this.setState({x, y, r, w, h});
    }
  }

  componentWillUnmount() {
    //resize时, 会监听
    document.body.removeEventListener("mousemove", this.handleMove, false);
    document.body.removeEventListener("mouseup", this.handleUp, false);
  }

  render() {
    const {children, draggable, rotatable, resizable, directions, classname} = this.props;
    const {w, h, x, y, r} = this.state;
    //浮在一个对象上的.
    const style: React.CSSProperties = {
      width: w,
      height: h,
      left: x,
      top: y,
      transform: `translateZ(0) rotate(${r}deg)`,
      outline: "none"
    };
    return (
      <div
        tabIndex={1}
        ref={e => (this.wrapper = e)}
        className={"drag-wrapper draggable " + classname || ""}
        onMouseDown={this.handleDown}
        onKeyDown={this.handleKeydown}
        onDoubleClick={this.handleDblClick}
        style={style}
      >
        <div className="drag-content">
          {children}
          <div className="drag-ctrl" style={{display: resizable || rotatable ? "block" : "none"}}>
            {resizable && <ResizeHandler directions={directions} resizeStart={this.resizeStart}/>}
            {rotatable && <div className="rotate" onMouseDown={this.rotateStart}/>}
          </div>
        </div>
      </div>
    );
  }

  /**
   * 当鼠标点击时.显示可编辑的框
   *
   * @param {React.MouseEvent<HTMLDivElement>} e
   */
  handleDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    const {handle, cancel} = this.props;
    if (handle && !(e.target as HTMLDivElement).matches(handle)) return;
    if (cancel && (e.target as HTMLDivElement).matches(cancel)) return;
    this.dragStart(e);
    e.stopPropagation();
    if (this.props.onDragStart) {
      const {x, y, w, h, r} = this.state;
      this.props.onDragStart({x, y, w, h, r, inst: this});
    }
    this.wrapper.focus();
  };

  handleMove = (e: MouseEvent): void => {
    const {dragging, resizing, rotating} = this.state;
    const {x, y, w, h, r} = this.state;
    if (dragging) {
      const {x, y} = this.getDragResult(e.clientX, e.clientY);
      // bug: mousedown 触发了 mousemove.无语...
      if (this.state.x === x && this.state.y === y) return;
      let nx = x;
      let ny = y;
      if (this.justifyRect) {
        if (!isNaN(this.justifyRect.dx)) nx += this.justifyRect.dx;
        if (!isNaN(this.justifyRect.dy)) ny += this.justifyRect.dy;
        this.justifyRect = null;
      }
      this.setState({x: nx, y: ny}, () => {
        this.refreshEdges();
        this._isJustifying = false;
      });
      this.props.onDragging({x, y, w, h, r, inst: this});
    }
    if (resizing) {
      const {w, h, x, y} = this.getResizeResult(e.clientX, e.clientY);
      this.setState({w, h, x, y}, this.refreshEdges);
      this.props.onDragging({x, y, w, h, r, inst: this});
    }
    if (rotating) {
      const r = this.getRotateResult(e.clientX, e.clientY);
      this.setState({r}, this.refreshEdges);
      this.props.onDragging({x, y, w, h, r, inst: this});
    }
  };

  handleUp = (e: MouseEvent): void => {
    const {x, y, w, h, r} = this.state;
    const {dragging, resizing, rotating} = this.state;

    if (!(rotating || dragging || resizing)) return;

    this.setState({
      dragging: false,
      resizing: false,
      rotating: false
    });
    this.props.onDragEnd({x, y, w, h, r, inst: this});

    if (e.target !== this.wrapper || !this.wrapper.contains(e.target as HTMLElement)) {
      this.handleBlur();
    }
  };

  dragStart = (e: React.MouseEvent<HTMLElement>): void => {
    if (!this.props.draggable) return;
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state;
    this.setState({
      dragStartX: e.clientX,
      dragStartY: e.clientY,
      dragging: true,
      lastX: x,
      lastY: y
    });
  };

  resizeStart = (e: React.MouseEvent<HTMLElement>, direction: string): void => {
    const {x, y, w, h} = this.state;
    if (!this.props.resizable) return;
    e.stopPropagation();
    this.setState({
      resizeStartX: e.clientX,
      resizeStartY: e.clientY,
      resizing: true,
      lastX: x,
      lastY: y,
      lastW: w,
      lastH: h,
      direction
    });
  };

  rotateStart = (e: React.MouseEvent<HTMLElement>): void => {
    if (!this.props.rotatable) return;
    e.stopPropagation();
    const {r} = this.state;
    this.setState({
      rotateStartX: e.clientX,
      rotateStartY: e.clientY,
      rotating: true,
      lastR: r
    });
  };

  getDragResult = (curX: number, curY: number): { x: number; y: number } => {
    const {lastX, lastY, dragStartX, dragStartY} = this.state;
    const {dragGrid, dragAxis, bounds} = this.props;

    let deltaX = curX - dragStartX;
    let deltaY = curY - dragStartY;
    // 移动间隔
    if (dragGrid[0] > 0 && dragGrid[1] > 0) {
      deltaX = Math.round(deltaX / dragGrid[0]) * dragGrid[0];
      deltaY = Math.round(deltaY / dragGrid[1]) * dragGrid[1];
    }

    if (dragAxis === "both") {
    } else if (dragAxis === "x") {
      deltaY = 0;
    } else if (dragAxis === "y") {
      deltaX = 0;
    }

    let newX = lastX + deltaX;
    let newY = lastY + deltaY;
    // 边界控制
    const boundsInfo = this.getBoundsInfo(bounds);
    const {w, h} = this.state;
    if (boundsInfo) {
      const minX = boundsInfo.left;
      const minY = boundsInfo.top;
      const maxX = boundsInfo.right - w;
      const maxY = boundsInfo.bottom - h;
      newX = Math.min(maxX, Math.max(minX, newX));
      newY = Math.min(maxY, Math.max(minY, newY));
    }

    return {
      x: newX,
      y: newY
    };
  };

  // 获取bounds元素相对坐标
  getBoundsInfo = (bounds): { left: number; top: number; right: number; bottom: number } => {
    if (!bounds) return;
    const parent = this.wrapper.parentNode;
    const target = bounds === "parent" ? parent : document.querySelector(bounds);
    if (!(target instanceof HTMLElement)) return;
    const {
      left: targetLeft,
      top: targetTop,
      right: targetRight,
      bottom: targetBottom
    } = target.getBoundingClientRect();
    const {left: parentLeft, top: parentTop} = (parent as HTMLElement).getBoundingClientRect();
    return {
      left: targetLeft - parentLeft,
      top: targetTop - parentTop,
      right: targetRight - parentLeft,
      bottom: targetBottom - parentTop
    };
  };

  getResizeResult = (
    curX: number,
    curY: number
  ): { x: number; y: number; w: number; h: number } => {
    const {lastW, lastH, lastX, lastY, resizeStartX, resizeStartY, direction} = this.state;
    const {resizeGrid, resizeAxis, bounds} = this.props;
    const {minWidth, minHeight} = this.props;
    let {maxWidth, maxHeight} = this.props;

    let deltaX = curX - resizeStartX;
    let deltaY = curY - resizeStartY;

    // gird判断
    if (resizeGrid[0] > 0 && resizeGrid[1] > 0) {
      deltaX = Math.round(deltaX / resizeGrid[0]) * resizeGrid[0];
      deltaY = Math.round(deltaY / resizeGrid[1]) * resizeGrid[1];
    }

    // 计算新值
    let newWidth = lastW + deltaX;
    let newHeight = lastH + deltaY;
    if (/left/i.test(direction)) newWidth = lastW - deltaX;
    if (/top/i.test(direction)) newHeight = lastH - deltaY;

    // 边界控制(在down事件后,不会改变.重复计算浪费)

    const boundsInfo = this.getBoundsInfo(bounds);
    if (boundsInfo) {
      if (/right/i.test(direction))
        maxWidth = maxWidth
          ? Math.max(maxWidth, boundsInfo.right - lastX)
          : boundsInfo.right - lastX;
      if (/bottom/i.test(direction))
        maxHeight = maxHeight
          ? Math.max(maxHeight, boundsInfo.bottom - lastY)
          : boundsInfo.bottom - lastY;
      if (/left/i.test(direction))
        maxWidth = maxWidth
          ? Math.max(maxWidth, lastX + lastW - boundsInfo.left)
          : lastX + lastW - boundsInfo.left;
      if (/top/i.test(direction))
        maxHeight = maxHeight
          ? Math.max(maxHeight, lastY + lastH - boundsInfo.top)
          : lastY + lastH - boundsInfo.top;
    }

    newWidth = maxWidth
      ? Math.min(maxWidth, Math.max(minWidth, newWidth))
      : Math.max(minWidth, newWidth);
    newHeight = maxHeight
      ? Math.min(maxHeight, Math.max(minHeight, newHeight))
      : Math.max(minHeight, newHeight);

    // axis判断:: todo:  axis && direction => canX && canY统一处理
    if (resizeAxis === "x" || direction === "left" || direction === "right") {
      newHeight = lastH;
    } else if (resizeAxis === "y" || direction === "bottom" || direction === "top") {
      newWidth = lastW;
    }

    return {
      x: /right/i.test(direction) ? lastX : lastX + lastW - newWidth,
      y: /bottom/i.test(direction) ? lastY : lastY + lastH - newHeight,
      w: newWidth,
      h: newHeight
    };
  };

  // Math.atan2() 方法可返回从 x 轴到点 (x,y) 之间的角度。
  getRotateResult = (curX: number, curY: number): number => {
    const {rotateStartX, rotateStartY, lastR} = this.state;
    const {x: centerX, y: centerY} = this.getCenter();
    const curRad = Math.atan2(curY - centerY, curX - centerX); // 当前弧度
    const prevRad = Math.atan2(rotateStartY - centerY, rotateStartX - centerX); // 上一次弧度
    const deltaRad = curRad - prevRad; // 偏移弧度
    const deltaDeg = (deltaRad * 360) / (2 * Math.PI); // 偏移角度
    // console.log({ centerX, centerY }, Math.round(lastR + deltaDeg));
    return Math.round(lastR + deltaDeg); // 最终角度
  };

  // 获取中心点位置
  getCenter = (): { x: number; y: number } => {
    const {width, height, left, top} = this.wrapper.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2
    };
  };

  edges = {
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0
  };

  refreshEdges = () => {
    const {x, y, w, h, r: deg} = this.state;

    this.edges.minX = x;
    this.edges.maxX = x + w;
    this.edges.minY = y;
    this.edges.maxY = y + h;

    if (deg === 0) return;

    const points = [
      new Point(x, y),
      new Point(x + w, y),
      new Point(x, y + h),
      new Point(x + w, y + h)
    ];

    const cx = x + w / 2;
    const cy = y + h / 2;
    points.forEach(p => {
      p = p.rotate(cx, cy, deg);
      this.edges.minX = Math.min(this.edges.minX, p.x);
      this.edges.maxX = Math.max(this.edges.maxX, p.x);
      this.edges.minY = Math.min(this.edges.minY, p.y);
      this.edges.maxY = Math.max(this.edges.maxY, p.y);
    });
  };

  minY(): number {
    return this.edges.minY;
  }

  maxY(): number {
    return this.edges.maxY;
  }

  minX(): number {
    return this.edges.minX;
  }

  maxX(): number {
    return this.edges.maxX;
  }

  center(): Point {
    const {x, y, w, h, r: deg} = this.state;
    const cx = x + w / 2;
    const cy = y + h / 2;
    return new Point(cx, cy);
  }

  justifyRect = {dx: NaN, dy: NaN, dw: NaN, dh: NaN};
  _isJustifying = false;

  justify(dx: number, dy: number, dw: number, dh: number): void {
    this.justifyRect = {dx, dy, dw, dh};
    this._isJustifying = true;
  }

  isJustifying(): boolean {
    return this._isJustifying;
  }

  //单击状态,可以键盘移动, 双击状态不可以键盘移动
  isDblClicked = false;

  get isMovableByKeyboard() {
    return !this.isDblClicked;
  }

  /**
   * 监听键盘事件..
   *
   * @param {React.KeyboardEvent<HTMLDivElement>} e
   */
  handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!this.isMovableByKeyboard || [37, 38, 39, 40].indexOf(e.keyCode) === -1) return;

    e.stopPropagation();
    e.preventDefault();

    const {w, h, r} = this.state;
    let {x, y} = this.state;
    switch (e.keyCode) {
      case 38: {
        y += -1;
        break;
      }
      case 40: {
        y += 1;
        break;
      }
      case 37: {
        x -= 1;
        break;
      }
      case 39: {
        x += 1;
        break;
      }
      default:
        break;
    }
    this.setState({x, y});
    this.props.onDragEnd({x, y, w, h, r, inst: this});
  };

  handleDblClick = () => {
    this.isDblClicked = true;
  };

  handleBlur = () => {
    this.isDblClicked = false;
  };
}
