import { LEVELS } from "./levels.enum";

export class Task {
  name = "";
  description = "";
  completado = false;
  level = LEVELS.NORMAL;

  constructor(name, description, completed, level) {
    this.name = name;
    this.description = description;
    this.level = level;
    this.completed = completed;
  }
}
