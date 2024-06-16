import { findAll } from "../utils";
import { Details } from "./details";

export function Accordion() {
  const questions = [
    {
      title: "O evento é gratuito?",
      content: [
        `Sim, a DevParaná Conf 2024 é um evento gratuito. Nosso objetivo é tornar o conhecimento acessível a todos os interessados em tecnologia e desenvolvimento de software. No entanto, as vagas são limitadas e é necessário se inscrever antecipadamente para garantir sua participação. Fique atento ao nosso site e às redes sociais para mais informações sobre a abertura das inscrições.`,
        `Apesar de ser gratuito, o evento possui custos para sua realização, como translado, hospedagem e refeições para os palestrantes convidados. Precisamos de um apoio mínimo necessário para cobrir essas despesas e garantir que o evento aconteça. Contamos com o apoio da comunidade e de patrocinadores para tornar a DevParaná Conf 2024 uma realidade.`,
      ],
    },
    {
      title: "O que é a DevParaná Conf 2024?",
      content: [
        `A DevParaná Conf 2024 é uma conferência de desenvolvedores organizada pela comunidade DevParaná, focada em compartilhar conhecimentos, tendências e práticas inovadoras na área de tecnologia e desenvolvimento de software.`,
      ],
    },
    {
      title: "Quando e onde será realizada a DevParaná Conf 2024?",
      content: [
        `A DevParaná Conf 2024 acontecerá no dia 28 de julho no Teatro Calil Haddad em Maringá, Paraná.`,
      ],
    },
    {
      title: "Como posso me inscrever para participar do evento?",
      content: [
        `As inscrições podem ser feitas através do nosso site oficial. Basta clicar na seção "Inscrições" e seguir as instruções para garantir sua vaga na conferência.`,
      ],
    },
    {
      title:
        "Quais são os palestrantes confirmados para a DevParaná Conf 2024?",
      content: [
        `A DevParaná Conf 2024 contará com a presença de diversos palestrantes renomados, incluindo Pachi Parra, Mano Deyvin, Ana Neri, Jônatas Davi e outros grandes nomes da tecnologia.`,
      ],
    },
    {
      title: "Há oportunidades de voluntariado para o evento?",
      content: [
        `Sim! Estamos sempre em busca de voluntários para nos ajudar a tornar a DevParaná Conf 2024 um sucesso. Se você está interessado em se voluntariar, visite a seção "Voluntariado" em nosso site para mais informações.`,
      ],
    },
    {
      title: "Posso submeter uma proposta de palestra ou workshop?",
      content: [
        `Sim, estamos abertos a propostas de palestras e workshops! Acesse a seção "Contribua" e envie sua palestra. Todas as submissões serão revisadas por nosso comitê organizador e comunidade.`,
      ],
    },
  ];

  function onToggle(this: HTMLElement) {
    for (const item of findAll(".accordion details")) {
      if (item.open && item !== this) item.open = false;
    }
  }

  return (
    <div className="accordion">
      {questions.map((question) => (
        <Details
          title={question.title}
          content={question.content}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
