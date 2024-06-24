import { DialogContainer } from "./dialog-container";
import type { Description } from "../../types";
import { find } from "../utils";
import { Icon } from "../parts";

export interface DescriptionDialogAttrs extends Description {
  onClose?(dialog: HTMLDialogElement, ev: Event): void;
  className?: string;
}

export const DescriptionDialog = (attrs: DescriptionDialogAttrs) => {
  return (
    <DialogContainer
      opened={true}
      className={attrs.className}
      onClose={attrs.onClose}
    >
      <button
        slot="close"
        className="btn rounded small top-right"
        onclick={() => find("devpr-dialog-container").close()}
      >
        <Icon name="close" width={48} />
      </button>

      <div slot="content">
        <h3 className="text-surface">{attrs.title}</h3>

        {attrs.content.map((content) => (
          <p className="mb-24 text-start text-surface">{content}</p>
        ))}

        <ul>
          {(attrs.items ?? []).map((item) => (
            <li className="text-start text-surface">
              <Icon name="check" width={32} />
              <em className="text-surface">{item}</em>
            </li>
          ))}
        </ul>
      </div>
    </DialogContainer>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      DescriptionDialog: typeof DescriptionDialog;
    }
  }
}
