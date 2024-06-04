import type {Contribute} from './typings'

export const c4p: Contribute = {
  title: 'Chamada de Palestras',
  description:
    'Tem um conteúdo legal e quer apresentar para a comunidade? Submeta esse trabalho por essa opção',
  date: new Date(2024, 5, 20, 0, 0, 0),
  action: {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe-ztNzwVqWHzFtFthnoChyfrVaIr6BTdgssqJBb-CtawfnkA/viewform?embedded=true',
    text: 'Submeta sua palestra',
  },
}

export const suggest: Contribute = {
  title: 'Sugestão de palestrantes',
  description:
    'Quem deveria estar no palco palestrando? Sugira quantas pessoas você quiser!',
  date: new Date(2024, 5, 20, 0, 0, 0),
  action: {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfoWaySmiBBdNsEKRjSvBZcastdx2UsBY20QAEWeZUYqPwJ6w/viewform?embedded=true',
    text: 'Faça sua sugestão',
  },
}

export const volunteer: Contribute = {
  title: 'Quero me voluntariar',
  description: 'Quer estar presente no evento ajudando na realização? Sua presença é importante e bem-vinda, registre-se já!',
  date: new Date(2024, 6, 10, 0, 0, 0),
  action: {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeRVf416hzLaAU9Mio39k2bsRkCazIwkTI_AGsq6fEr8NcSTg/viewform?embedded=true',
    text: 'Voluntarie-se já',
  },
}

export const contributes = [c4p, suggest, volunteer]
