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
    { kind: "instagram", href: "https://www.instagram.com/manodeyvin" },
  ],
  bio: [
    `Deyvid, mais conhecido como Deyvin, possui mais de 17 anos de carreira, atua como engenheiro de software backend, ele é entusiasta da linguagem de programação ruby e de boas práticas de desenvolvimento.`,
    `Fora do expediente, atua como criador de conteúdo em seu canal no youtube Mano Deyvin que alcançou mais de 10 milhões de visualizações e mais de 100 mil inscritos, oferecendo insights sobre tecnologia, orientação de carreira e boas práticas de desenvolvimento, com uma abordagem única que incorpora humor ácido para tornar temas técnicos mais acessíveis e envolventes.`,
  ],
  presentation: {
    title: "Verdades Difíceis de Engolir",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 15:00:00"),
    end: new Date("2024-07-28 15:50:00"),
    place: "Calil Haddad Theater",
  },
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
    { kind: "instagram", href: "https://www.instagram.com/ananeridev" },
  ],
  bio: [
    `Engenheira de Software Sênior trabalhando para os Estados Unidos numa consultoria para empresas ao redor do mundo com a Stack NestJS, Typescript, NodeJS e Serverless.`,
    `Foi nomeada como Women Tech Makers Ambassador pela Google, lidera uma das maiores comunidades brasileiras de NodeJS a NodeBR e é voluntária na ONG Womakerscode.`,
    `Nas suas redes cria conteúdo técnico avançado através de vídeos, e da sua newsletter gratuita.`,
    `No tempo livre é uma baixista de heavy metal e gym rat.`,
  ],
  presentation: {
    title: "Monorepos vs Microservices: A batalha da Escalabilidade",
    status: true,
    type: "talk",
    start: new Date("2024-07-28T13:00:00.000Z"),
    end: new Date("2024-07-28T13:50:00.000Z"),
    place: "Calil Haddad Theater",
  },
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
    { kind: "instagram", href: "https://www.instagram.com/jonatasdp" },
  ],
  bio: [
    `Nerd, ciclista e blogueiro. Sou um evangelista de pair programming. Usuário e entusiasta do editor Vim. Sou programador desde 2004.`,
  ],
  presentation: {
    title:
      "Vetorização de informações e o Futuro dos modelos - modelos livres para um futuro mais aberto e sustentável.",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 12:00:00"),
    end: new Date("2024-07-28 12:50:00"),
    place: "Calil Haddad Theater",
  },
};

const kipper: Speaker = {
  name: "Fernanda Kipper",
  nickname: "kipper",
  photo: "assets/speakers/kipper2.webp",
  tags: ["Software Enginneer", "Microsoft MVP"],
  links: [
    { kind: "github", href: "https://github.com/Fernanda-Kipper" },
    { kind: "linkedIn", href: "https://www.linkedin.com/in/fernanda-kipper" },
    { kind: "youtube", href: "https://www.youtube.com/@kipperdev" },
    { kind: "instagram", href: "https://www.instagram.com/kipper.dev" },
  ],
  bio: [
    `Engenheira de Software no Itaú e Microsoft MVP, Fernanda é entusiasta do desenvolvimento Web desde os 18 anos. Atuando como desenvolvedora Fullstack, ela compartilha seu conhecimento e paixão pela tecnologia através de vídeos e lives no YouTube e Instagram, onde já reuniu uma comunidade de mais de 100 mil desenvolvedores.`,
  ],
  presentation: {
    title: "Orquestração de Microserviços á nivel de Big Techs",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 09:00:00"),
    end: new Date("2024-07-28 09:50:00"),
    place: "Calil Haddad Theater",
  },
};

const devsoutinho: Speaker = {
  name: "Mario Souto Silva",
  nickname: "devsoutinho",
  photo: "assets/speakers/soutinho.webp",
  tags: [
    "GitHub Star",
    "Google Developer Expert",
    "Microsoft MVP",
    "Web Platform Lead Engineer",
  ],
  links: [
    { kind: "github", href: "https://github.com/omariosouto" },
    { kind: "linkedIn", href: "https://www.linkedin.com/in/omariosouto" },
    { kind: "youtube", href: "https://www.youtube.com/@DevSoutinho" },
    { kind: "instagram", href: "https://www.instagram.com/devsoutinho" },
  ],
  bio: [
    `Programador desde os 11 anos, hoje com 25 e 10+ anos de experiência, é Dev Full Stack com foco em Front-End, dá aulas, palestrou em eventos como BrazilJS e ajudou a resolver bugs no Google Chrome! É Lead Software Engineer no Nubank, Google Developer Expert, GitHub Star, Microsoft MVP e youtuber com 4 milhões de visualizações.`,
  ],
  presentation: {
    title: "Desafios Práticos de Escalar Times de Plataforma",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 17:00:00"),
    end: new Date("2024-07-28 17:50:00"),
    place: "Calil Haddad Theater",
  },
};

const lays: Speaker = {
  name: "Lays Rodrigues",
  nickname: "lays",
  photo: "assets/speakers/lays.webp",
  tags: [
    "Software Enginneer",
    "AWS Community Builder",
    "Líder do AWS User Group Rio",
  ],
  links: [
    { kind: "github", href: "https://github.com/lays147" },
    { kind: "linkedIn", href: "https://www.linkedin.com/in/laysrodrigues147/" },
    { kind: "instagram", href: "https://www.instagram.com/lays147/" },
  ],
  bio: [
    `Lays Rodrigues atua como Senior Software Engineer na Stone (Bota pra girar no modo Stone!). Especializada em utilizar AWS e Terraform para entregar o melhor valor possível ao negócio. Lays é AWS Community Builder e também é líder do AWS User Group Rio. Com mais de 7 anos de carreira em tech, ela está aprendendo a tocar um teclado diferente: um piano.`,
  ],
  presentation: {
    title: "Automate Away the Toil",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 16:00:00"),
    end: new Date("2024-07-28 16:50:00"),
    place: "Calil Haddad Theater",
  },
};

const gustavo: Speaker = {
  name: "Gustavo Caetano",
  nickname: "gustavo",
  photo: "assets/speakers/gustavo.webp",
  tags: ["Executivo de Operações", "Host do podcast Papinho Tech"],
  links: [
    { kind: "linkedIn", href: "https://www.linkedin.com/in/oguscaetano" },
    { kind: "youtube", href: "https://www.youtube.com/@oguscaetano" },
    { kind: "instagram", href: "https://www.instagram.com/oguscaetano" },
  ],
  bio: [
    `É Executivo de Operações na FIAP, mestre em Ciência da Computação com experiência de mercado em engenharia de software, gestão de projetos/pessoas e liderança técnica. Já atuou como professor e coordenador de curso técnico, graduação e pós-graduação na área de tecnologia. Possui um canal no YouTube com mais de 2 milhões de views e é Host do podcast Papinho Tech.`,
  ],
  presentation: {
    title: "Como ser um Dev medíocre de sucesso",
    status: true,
    type: "workshop",
    start: new Date("2024-07-28 11:00:00"),
    end: new Date("2024-07-28 11:50:00"),
    place: "Calil Haddad Theater",
  },
};

const munif: Speaker = {
  name: "Munif Genara",
  nickname: "munif",
  photo: "assets/speakers/munif.webp",
  tags: [""],
  links: [
    { kind: "github", href: "https://github.com/munifgebara" },
    { kind: "instagram", href: "https://www.instagram.com/munifgebara" },
  ],
  bio: [
    `Sua Minibio: Pesquisador, professor e Desenvolvedor a 40 anos. Atualmente doutorando em machine learning e tech leader.`,
  ],
  presentation: {
    title: "IA em ERPs, um caso prático replicável",
    status: true,
    type: "talk",
    start: new Date("2024-07-27 00:00:00"),
    end: new Date("2024-07-27 00:00:00"),
    place: "UniCesumar - Maringá",
  },
};

export const speaker: Record<SpeakerNickname, Speaker> = {
  deyvin,
  ananeridev,
  jonatas,
  kipper,
  lays,
  devsoutinho,
  gustavo,
  munif,
};

export const speakers = [
  ananeridev,
  deyvin,
  devsoutinho,
  kipper,
  jonatas,
  lays,
  gustavo,
];
