export type Subscriber = ({ grid: CellGrid }) => void;

export type Side = "top" | "bottom" | "left" | "right";

export interface Collision {
  point: Position;
  cell: Cell;

  gridPosition: Position;
  floatPart: Position;
  collisionSide: Side;
}
