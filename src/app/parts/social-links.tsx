import type { SocialLink } from "../../data";
import { Icon } from "./icon";
import { Link } from "./link";

export interface SocialLinksAttrs {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksAttrs) => {
  return (
    <>
      <ul className="social-links">
        {links.map((link) => {
          if (link.action) {
            return (
              <Link
                href={link.href}
                onClick={link.action}
                ariaLabel={link.kind}
              >
                <Icon name={link.kind} />
                <span>{link.kind}</span>
              </Link>
            );
          } else {
            return (
              <Link href={link.href} ariaLabel={link.kind} target="_blank">
                <Icon name={link.kind} />
                <span>{link.kind}</span>
              </Link>
            );
          }
        })}
      </ul>
    </>
  );
};
