import { CSGoCanvas } from "../app/eggs/cs-go";
import { Snake } from "../app/eggs/snake";
import type { SocialLink } from "./typings";

export const socialLinks: SocialLink[] = [
  {
    kind: "youtube",
    href: "https://youtube.com/devparana",
  },
  {
    kind: "github",
    href: "https://github.com/DeveloperParana/devpr24",
  },
  {
    kind: "snake",
    href: "#",
    action() {
      document.body.classList.add("eggs");
      document.body.append(<Snake grid={16} initialSize={4} />);
    },
  },
  {
    kind: "whatsapp",
    href: "https://chat.whatsapp.com/J2Enc3n1Zfu1ixhVecACyd",
  },
  {
    kind: "cs-go",
    href: "#",
    action() {
      document.body.classList.add("eggs");
      document.body.append(<CSGoCanvas />);
    },
  },
  {
    kind: "instagram",
    href: "https://instagram.com/devparana",
  },
  {
    kind: "linkedIn",
    href: "https://br.linkedin.com/company/devparana",
  },
];
