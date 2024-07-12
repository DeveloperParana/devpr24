import { Group, Vector3 } from "three";

export class DevPR {
  #letters: string[] = [];

  #lastTime = Date.now()

  constructor(private model: Group) {}

  drop(position: Vector3, direction: Vector3) {
    const model = this.model.clone();
    model.position.copy(position).addScaledVector(direction, 3)
    return model
  }

  input(letter: string) {
    if (Date.now() - this.#lastTime > 1000) {
      this.#letters = [];
    }

    this.#letters.push(letter.replace("Key", ""));

    const word = this.#letters.join("");

    console.log(word);

    this.#lastTime = Date.now()
    
    return word.toLowerCase() === "devpr";
  }
}
