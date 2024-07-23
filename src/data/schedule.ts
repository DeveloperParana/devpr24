import { ScheduleSlot } from "./typings";

export const saturday: ScheduleSlot[] = [
  {
    title: "Credenciamento",
    start: new Date("2024-07-27 13:00:00"),
    end: new Date("2024-07-27 13:30:00"),
    place: "UniCesumar",
    type: "break",
  },
  {
    speaker: "isa",
    title: "Microfrontends X Microservicos e BFFs",
    type: "talk",
    start: new Date("2024-07-27 13:30:00"),
    end: new Date("2024-07-27 16:00:00"),
    place: "Inspira Space - UniCesumar",
  },
  {
    speaker: "kelly",
    title: "Desmitificando a agilidade: como conectar a estratégia até a entrega",
    type: "workshop",
    start: new Date("2024-07-27 13:30:00"),
    end: new Date("2024-07-27 16:00:00"),
    place: "Sala de aula - Unicesumar",
  },
  {
    speaker: "marco",
    title: "Programação Funcional com Go. Possibilidade ou Forçação de barra",
    type: "talk",
    start: new Date("2024-07-27 14:30:00"),
    end: new Date("2024-07-27 15:00:00"),
    place: "Inspira Space - UniCesumar",
  },
  {
    title: "Intervalo",
    start: new Date("2024-07-27 15:30:00"),
    end: new Date("2024-07-27 16:00:00"),
    place: "UniCesumar",
    type: "break",
  },
  {
    speaker: "leo",
    title:
      "De Monólitos a Micro Frontends: Um Roteiro para Arquiteturas Web Escaláveis",
    type: "talk",
    start: new Date("2024-07-27 16:00:00"),
    end: new Date("2024-07-27 16:30:00"),
    place: "Inspira Space - UniCesumar",
  },
  {
    speaker: "wellington",
    title: "As 5 habilidades de sucesso para Liderar no mundo da tecnologia",
    type: "workshop",
    start: new Date("2024-07-27 16:00:00"),
    end: new Date("2024-07-27 18:00:00"),
    place: "Sala de aula - Unicesumar",
  },
  {
    speaker: "munif",
    title: "IA em ERPs, um caso prático replicável",
    type: "talk",
    start: new Date("2024-07-27 17:00:00"),
    end: new Date("2024-07-27 17:30:00"),
    place: "Inspira Space - UniCesumar",
  },
  {
    title: "Criando serviços em Golang",
    speaker: ["fer", "marcondes"],
    type: "workshop",
    start: new Date("2024-07-27 13:30:00"),
    end: new Date("2024-07-27 15:00:00"),
    place: "Sala Invertida - UniCesumar",
  },
  {
    title: "Transforme sua WebPage em uma WebApp com PWA",
    speaker: 'burnes',
    type: "workshop",
    start: new Date("2024-07-27 16:00:00"),
    end: new Date("2024-07-27 17:30:00"),
    place: "Sala Invertida - UniCesumar",
  }
];

export const schedule: ScheduleSlot[] = [
  {
    title: "Credenciamento",
    start: new Date("2024-07-28 08:00:00"),
    end: new Date("2024-07-28 08:45:00"),
    place: "Calil Haddad",
    type: "break",
  },
  {
    title: "Abertura",
    start: new Date("2024-07-28 08:45:00"),
    end: new Date("2024-07-28 09:00:00"),
    place: "Calil Haddad",
    type: "break",
  },
  {
    speaker: "kipper",
    title: "Orquestração de Microserviços á nivel de Big Techs",
    start: new Date("2024-07-28 09:00:00"),
    end: new Date("2024-07-28 10:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
  {
    speaker: "ananeridev",
    title: "Monorepos vs Microservices: A batalha da Escalabilidade",
    start: new Date("2024-07-28 10:00:00"),
    end: new Date("2024-07-28 11:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
  {
    speaker: "gustavo",
    title: "Como ser um Dev medíocre de sucesso",
    start: new Date("2024-07-28 11:00:00"),
    end: new Date("2024-07-28 12:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
  {
    speaker: "jonatas",
    title:
      "Vetorização de informações e o Futuro dos modelos - modelos livres para um futuro mais aberto e sustentável",
    start: new Date("2024-07-28 12:00:00"),
    end: new Date("2024-07-28 13:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
  {
    title: "Almoço",
    start: new Date("2024-07-28 13:00:00"),
    end: new Date("2024-07-28 14:30:00"),
    place: "Calil Haddad",
    type: "break",
  },
  {
    title: "Sorteio",
    start: new Date("2024-07-28 14:30:00"),
    end: new Date("2024-07-28 15:00:00"),
    place: "Calil Haddad",
    type: "break",
  },
  {
    speaker: "deyvin",
    title: "Verdades Difíceis de Engolir",
    start: new Date("2024-07-28 15:00:00"),
    end: new Date("2024-07-28 16:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
  {
    speaker: "lays",
    title: "Automate Away the Toil",
    start: new Date("2024-07-28 16:00:00"),
    end: new Date("2024-07-28 17:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
  {
    speaker: "devsoutinho",
    title: "Desafios Práticos de Escalar Times de Plataforma",
    start: new Date("2024-07-28 17:00:00"),
    end: new Date("2024-07-28 18:00:00"),
    place: "Calil Haddad",
    type: "talk",
  },
];

export const presentation = {
  deyvin: {
    title: "Verdades Difíceis de Engolir",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 15:00:00"),
    end: new Date("2024-07-28 15:50:00"),
    place: "Calil Haddad Theater",
  },
  ananeridev: {
    title: "Monorepos vs Microservices: A batalha da Escalabilidade",
    status: true,
    type: "talk",
    start: new Date("2024-07-28T13:00:00.000Z"),
    end: new Date("2024-07-28T13:50:00.000Z"),
    place: "Calil Haddad Theater",
  },
  jonatas: {
    title:
      "Vetorização de informações e o Futuro dos modelos - modelos livres para um futuro mais aberto e sustentável.",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 12:00:00"),
    end: new Date("2024-07-28 12:50:00"),
    place: "Calil Haddad Theater",
  },
  kipper: {
    title: "Orquestração de Microserviços á nivel de Big Techs",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 09:00:00"),
    end: new Date("2024-07-28 09:50:00"),
    place: "Calil Haddad Theater",
  },
  devsoutinho: {
    title: "Desafios Práticos de Escalar Times de Plataforma",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 17:00:00"),
    end: new Date("2024-07-28 17:50:00"),
    place: "Calil Haddad Theater",
  },
  lays: {
    title: "Automate Away the Toil",
    status: true,
    type: "talk",
    start: new Date("2024-07-28 16:00:00"),
    end: new Date("2024-07-28 16:50:00"),
    place: "Calil Haddad Theater",
  },
  gustavo: {
    title: "Como ser um Dev medíocre de sucesso",
    status: true,
    type: "workshop",
    start: new Date("2024-07-28 11:00:00"),
    end: new Date("2024-07-28 11:50:00"),
    place: "Calil Haddad Theater",
  },
};
