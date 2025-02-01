export default class Point {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public static get zero() {
    return new Point(0, 0)
  }

  public static get one() {
    return new Point(1, 1)
  }

  public static fromEvent(event: MouseEvent): Point {
    return new Point(event.clientX, event.clientY)
  }

  public static fromObject({ x, y }: { x: number; y: number }): Point {
    return new Point(x, y)
  }

  public static fromArray([x, y]: [number, number]): Point {
    return new Point(x, y)
  }

  public static fromString(str: string): Point {
    const [x, y] = str.split(',').map(Number)
    return new Point(x, y)
  }

  public toObject(): { x: number; y: number } {
    return { x: this.x, y: this.y }
  }

  public toArray(): [number, number] {
    return [this.x, this.y]
  }

  public toString(): string {
    return `${this.x},${this.y}`
  }

  public add(point: Point): Point {
    return new Point(this.x + point.x, this.y + point.y)
  }

  public subtract(point: Point): Point {
    return new Point(this.x - point.x, this.y - point.y)
  }

  public multiply(point: Point): Point {
    return new Point(this.x * point.x, this.y * point.y)
  }

  public divide(point: Point): Point {
    return new Point(this.x / point.x, this.y / point.y)
  }

  public scale(factor: number): Point {
    return new Point(this.x * factor, this.y * factor)
  }

  public distance(point: Point): number {
    return Math.hypot(this.x - point.x, this.y - point.y)
  }

  public equals(point: Point): boolean {
    return this.x === point.x && this.y === point.y
  }

  public clone(): Point {
    return new Point(this.x, this.y)
  }
}
