import type {Supporter} from './typings'

export const conferenceSupporter: Supporter = {
  title: 'Apoiador da Conferência',
  amount: '100 ~ 149',
  limit: 200,
  description: `benefícios da reserva de poltrona no Teatro, antes da disponibilização para o público`,
  benefits: [
    'Certificado Digital',
    'Badge da comunidade',
    '2 adesivos (comunidade e conferência)',
    '1 chaveiro da DevParaná',
    '1 mousepad da DevParaná',
  ],
  link: {
    href: 'https://apoia.se/devpr',
    text: 'Apoiar a conferência',
  },
}

export const communitySupporter: Supporter = {
  title: 'Apoiador da Comunidade',
  amount: '150 ~ 249',
  limit: 100,
  description: `benefícios da reserva de poltrona no Teatro, antes da disponibilização para o público`,
  benefits: [
    `$conferenceSupporter`,
    `1 camiseta ou caneca da comunidade`,
    `Participação em algumas dinâmicas durante o evento, incluindo brindes de nossos apoiadores`,
  ],
  link: {
    href: 'https://apoia.se/devpr',
    text: 'Apoiar a comunidade',
  },
}

export const communityBenefactor: Supporter = {
  title: 'Benfeitor da Comunidade',
  amount: '250 ou +',
  limit: 24,
  description: `benefícios da reserva de poltrona no Teatro, antes da disponibilização para o público`,
  benefits: [
    `$communitySupporter`,
    `Almoço gratuito incluso (local a definir)`,
    `Participação da ”hora feliz” com palestrantes e organização do evento (não inclui consumação)`,
  ],
  link: {
    href: 'https://apoia.se/devpr',
    text: 'Quero ser benfeitor',
  },
}

export const supports = [
  conferenceSupporter,
  communitySupporter,
  communityBenefactor,
]
