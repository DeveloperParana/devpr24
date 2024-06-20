import { Su27Canvas } from "./su27-canvas";
import styles from "./su27.module.scss";

export function Su27Slider() {
  return (
    <div id="su27-slider" className={styles.su27Slider}>
      <span>Dev</span>
      <input
        min="0"
        max="100"
        value="0"
        type="range"
        className="flight"
        ariaLabel="percentage flown"
        onLoad={function (this) {
          this.style.setProperty!("--val", "0");
        }}
        onInput={function (this) {
          this.style.setProperty!("--val", this.value);

          if (this.valueAsNumber === 100) {
            document.body.classList.add("eggs");
            document.body.append(<Su27Canvas />);
          }
        }}
      />
      <span>Paraná</span>
    </div>
  );
}
