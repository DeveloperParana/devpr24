import type { SocialLink } from "../../data";
import { Snake } from "../eggs/snake";
import { Icon } from "./icon";
import { Link } from "./link";

export interface SocialLinksAttrs {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksAttrs) => {
  const onSnake = () => {
    document.body.classList.add("snake");
    document.body.append(<Snake grid={16} initialSize={4} />);
  };

  return (
    <>
      <ul className="social-links">
        {links.map((link) => {
          return (
            <li>
              <Link href={link.href} ariaLabel={link.kind} target="_blank">
                <Icon name={link.kind} />
                <span>{link.kind}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <a href="#" onClick={onSnake}>
            <Icon width={32} name="snake" />
          </a>
        </li>
      </ul>
    </>
  );
};
