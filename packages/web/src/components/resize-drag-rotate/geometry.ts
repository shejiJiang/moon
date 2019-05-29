export class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  isEmpty() {
    return this.x === 0 && this.y === 0;
  }

  isVisible() {
    return this.x > 0 && this.y > 0;
  }

  equals(p: Point) {
    return this.x === p.x && this.y === p.y;
  }

  rotate(cx, cy, deg) {
    const rad = (Math.PI / 180) * deg;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const { x, y } = this as any;
    const dx = x - cx;
    const dy = y - cy;
    const nx = cos * dx - sin * dy + cx;
    const ny = sin * dx + cos * dy + cy;
    return new Point(nx, ny);
  }
}

export class Size {
  width: number;
  height: number;

  constructor(width: number = 0, height: number = 0) {
    this.width = width;
    this.height = height;
  }
}

export class Rect {
  origin = new Point();
  size = new Size();

  constructor(x: number, y: number, width: number, height: number) {
    this.origin = new Point(x, y);
    this.size = new Size(width, height);
  }

  clone() {
    return new Rect(this.origin.x, this.origin.y, this.size.width, this.size.height);
  }
}

/**
 * a c tx
 * b d ty
 * 0 0 1
 */

const deg2rad = (deg: number) => (Math.PI / 180) * deg;

export class Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  tx: number;
  ty: number;

  static fromRotateDeg(deg: number) {
    const { sin, cos } = Math;
    const s = sin(deg2rad(deg));
    const c = cos(deg2rad(deg));
    return new Matrix(c, s, -s, c, 0, 0);
  }

  constructor(a = 0, b = 0, c = 0, d = 0, tx = 0, ty = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }

  multiply(m: Matrix) {
    const m1 = this as any;
    const m2 = m;
    /**
     *   m1       m2
     * a c tx   a c tx
     * b d ty * b d ty
     * 0 0 1    0 0 1
     */
    return new Matrix(
      m1.a * m2.a + m1.c * m2.b, // a
      m1.b * m2.a + m1.d * m2.b, // b
      m1.a * m2.c + m1.c * m2.d, // c
      m1.b * m2.c + m1.d * m2.d, // d
      m1.a * m2.tx + m1.c * m2.ty + m1.tx, // tx
      m1.b * m2.tx + m1.d * m2.ty + m1.ty // ty
    );
  }

  multiplyPoint(p: Point) {
    let { x, y } = p;
    x = this.a * x + this.c * y + this.tx;
    y = this.b * x + this.d * y + this.ty;
    return new Point(x, y);
  }
}
