import { Icon, Link } from "../parts";
import {
  supports,
  communityBenefactor,
  communitySupporter,
  conferenceSupporter,
} from "../../data";

export const Supports = () => {
  const supportTitleMap: Record<string, string> = {
    $conferenceSupporter: conferenceSupporter.title,
    $communitySupporter: communitySupporter.title,
    $communityBenefactor: communityBenefactor.title,
  };

  // prettier-ignore
  const determineBenefit = (benefit: string) => {
    return benefit.startsWith('$')
      ? <em>Todos do <strong>{supportTitleMap[benefit]}</strong></em>
      : <em>{benefit}</em>
  }

  return (
    <section className="supports" id="apoie">
      <div className="title flex row justify-center">
        <h2 className="titleText">
          Faça <span>acontecer</span>
        </h2>
        <p className="text-1-4 text-center">
          A edição desse ano será gratuita e os ingressos serão disponibilizados
          ao público a partir do dia <span>14 de Julho de 2024</span>. Como
          estamos trazendo pessoas referências da nossa área e isso tem um
          custo, precisamos de um apoio mínimo da comunidade para cobrir os
          gastos. Caso você tenha condições e queira apoiar o evento, confira
          abaixo os benefícios que estamos oferecendo a quem acredita na
          comunidade.
        </p>
      </div>
      <div className="content">
        {supports.map((support) => {
          return (
            <div className="box">
              <div className="text">
                <h3>{support.title}</h3>
                <h4>R$ {support.amount}</h4>
                <em className="text-error">
                  Limite de {support.limit} disponíveis
                </em>
                <p>
                  Você como <strong>{support.title}</strong> terá{" "}
                  {support.description}
                </p>

                <h4>Benefícios</h4>
                <ul>
                  {support.benefits.map((benefit) => {
                    return (
                      <li>
                        <Icon name="check" width={32} />
                        {determineBenefit(benefit)}
                      </li>
                    );
                  })}
                </ul>

                <Link className="btn" target="_blank" href={support.link.href}>
                  {support.link.text}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div id="warning" className="flex mt-24 justify-center gap-16">
        <div className="flex-1 error-container">
          <Icon name="asterisk" width={24} />
        </div>
        <p>
          Eventualmente os benefícios podem sofrer mudanças devido a demanda ou
          fornecedores, porém o valor do kit não será reduzido e todos os
          apoiadores serão avisados por e-mail ou em nossa comunidade no
          WhatsApp.
        </p>
      </div>
    </section>
  );
};
