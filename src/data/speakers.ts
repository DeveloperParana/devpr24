import type { Speaker, SpeakerNickname } from "./typings";

const deyvin: Speaker = {
  name: "Mano Deyvin",
  nickname: "deyvin",
  photo: "assets/speakers/deyvin.webp",
  tags: [
    "Criador de conteúdo",
    "Engenheiro backend",
    "Entusiasta ruby e boas práticas",
  ],
  links: [
    { kind: "github", href: "https://github.com/deyvin" },
    { kind: "linkedIn", href: "https://www.linkedin.com/company/chorume" },
    { kind: "youtube", href: "https://youtube.com/@manodeyvin" },
  ],
  bio: [
    `Deyvid, mais conhecido como Deyvin, possui mais de 17 anos de carreira, atua como engenheiro de software backend, ele é entusiasta da linguagem de programação ruby e de boas práticas de desenvolvimento.`,
    `Fora do expediente, atua como criador de conteúdo em seu canal no youtube Mano Deyvin que alcançou mais de 10 milhões de visualizações e mais de 100 mil inscritos, oferecendo insights sobre tecnologia, orientação de carreira e boas práticas de desenvolvimento, com uma abordagem única que incorpora humor ácido para tornar temas técnicos mais acessíveis e envolventes.`,
  ],
};

const ananeridev: Speaker = {
  name: "Ana Neri",
  nickname: "ananeridev",
  photo: "assets/speakers/ana.webp",
  tags: [
    "Engenheira de Software Sênior",
    "Women Tech Makers Ambassador",
    "Líder da comunidade NodeBR",
    "Criadora de conteúdo",
    "Baixista de heavy metal",
  ],
  links: [
    { kind: "github", href: "https://github.com/ananeridev" },
    { kind: "linkedIn", href: "https://www.linkedin.com/in/ananeridev" },
    { kind: "youtube", href: "https://youtube.com/@AnaNeriDev" },
  ],
  bio: [
    `Engenheira de Software Sênior trabalhando para os Estados Unidos numa consultoria para empresas ao redor do mundo com a Stack NestJS, Typescript, NodeJS e Serverless.`,
    `Foi nomeada como Women Tech Makers Ambassador pela Google, lidera uma das maiores comunidades brasileiras de NodeJS a NodeBR e é voluntária na ONG Womakerscode.`,
    `Nas suas redes cria conteúdo técnico avançado através de vídeos, e da sua newsletter gratuita.`,
    `No tempo livre é uma baixista de heavy metal e gym rat.`,
  ],
};

const pachicodes: Speaker = {
  name: "Pachi Parra",
  nickname: "pachicodes",
  photo: "assets/speakers/pachi.webp",
  tags: [
    "Especialista em DevRel",
    "Entusiasta de Open Source",
    "Consultora de Eventos",
    "Co-fundadora da Feministech",
  ],
  links: [
    { kind: "github", href: "https://github.com/pachicodes" },
    { kind: "linkedIn", href: "https://www.linkedin.com/in/pachicodes" },
    { kind: "youtube", href: "https://youtube.com/@PachiCodes" },
  ],
  bio: [
    `Pachi é especialista em DevRel e entusiasta de Open Source, atuando como Developer Relations Lead na Webcrumbs e como consultora de eventos e comunidades tech.`,
    `Co-Fundadora da Feministech, uma comunidade online de pessoas que se identificam no feminino ou não binárias, suas paixões incluem comunidades, empoderar mulheres, anime e seus gatos.`,
  ],
};

const jonatas: Speaker = {
  name: "Jônatas Davi",
  nickname: "jonatas",
  photo: "assets/speakers/jonatas.webp",
  tags: ["Developer Advocate na Timescale", "Mantenedor open source"],
  links: [
    { kind: "github", href: "https://github.com/jonatas" },
    { kind: "linkedIn", href: "https://www.linkedin.com/in/jonatasdp" },
    { kind: "youtube", href: "https://youtube.com/c/J%C3%B4natasPaganini" },
  ],
  bio: [
    `Nerd, ciclista e blogueiro. Sou um evangelista de pair programming. Usuário e entusiasta do editor Vim. Sou programador desde 2004.`,
  ],
};

export const speaker: Record<SpeakerNickname, Speaker> = {
  deyvin,
  ananeridev,
  pachicodes,
  jonatas,
};

export const speakers = [ananeridev, deyvin, pachicodes, jonatas];
