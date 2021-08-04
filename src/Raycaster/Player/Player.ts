import { Angle } from "../../utils";

import Scene, { GameObject } from "../../Scene";
import Grid from "../Grid";

import Control from "./Control";

class Player extends GameObject {
  public position: Position = {
    rotation: -1.884955592153879,
    x: 372.6884332630978,
    y: 128.58201781700896,
  };

  public readonly walkSpeed = 50;
  public readonly rotationSpeed = 1.3;

  public readonly radius = 8;

  private readonly control = new Control();

  public update() {
    const { rotateLeft, rotateRight, toForward, toBack } =
      this.control.moveState;
    const scene = Scene.getInstance();

    if (rotateLeft || rotateRight) {
      const multiplier = rotateRight ? 1 : -1;

      this.position = {
        ...this.position,
        rotation:
          this.position.rotation +
          this.rotationSpeed * multiplier * scene.deltaTime,
      };
    }

    if (toForward || toBack) {
      const multiplier = toForward ? 1 : -1;

      const vector = {
        x:
          Math.cos(this.position.rotation) *
          this.walkSpeed *
          multiplier *
          scene.deltaTime,
        y:
          Math.sin(this.position.rotation) *
          this.walkSpeed *
          multiplier *
          scene.deltaTime,
      };

      this.moveBy(vector);
    }
  }

  public moveBy(vector: Position): void {
    const grid = Grid.getInstance();

    const newPosition = {
      ...this.position,
      x: this.position.x + vector.x,
      y: this.position.y + vector.y,
    };

    if (grid.handleCollision(newPosition)) return;

    this.position = newPosition;
  }

  private static instance: Player;
  public static getInstance(): Player {
    if (this.instance) return this.instance;

    this.instance = new Player();

    return this.instance;
  }
}

export default Player;
