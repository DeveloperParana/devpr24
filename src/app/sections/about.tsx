export const About = () => {
  return (
    <section className="about" id="comunidade">
      <div className="row">
        <div className="flex col gap-16 col50">
          <h2 className="titeText">
            Conheça um pouco <span>nossa comunidade</span>
            {/* <span>A</span>bout Us */}
          </h2>
          <p>
            Com mais de 8 anos de história, temos um histórico com mais de 250
            eventos organizados e 7 conferências anuais, sempre apoiando e
            fortalecendo as comunidades e grupos existentes.
          </p>
          <p>
            Nossa influência não se limita a fronteiras, alcançando inúmeras
            cidades e até mesmo países como Paraguai e Chile. Em 2021,
            estabelecemos uma parceria com a Codaqui, uma comunidade voltada
            para o público jovem. Em 2023, concluímos nossos primeiros grandes
            eventos em conjunto.
          </p>
          <div className="flex row align-center">
            <div className="col min-3">
              <h3>5.3k</h3>
              <em>Membros no meetup.com</em>
            </div>
            <div className="col min-3">
              <h3>300</h3>
              <em>Eventos foram organizados</em>
            </div>
            <div className="col min-3">
              <h3>1.5k</h3>
              <em>Inscritos no Youtube.com</em>
            </div>
            <div className="col min-3">
              <h3>2.5k</h3>
              <em>Seguidores no Instagram</em>
            </div>
          </div>
          <p>
            Agora, em 2024, estamos entusiasmados em anunciar que a DevParaná e
            a Codaqui estão oficialmente unidas sob a mesma associação. Esta
            união fortalece os interesses da comunidade e nossa missão é o
            conhecimento acessível, para que você sinta o poder dele na sua vida
            pessoal e profissional.
          </p>
          <h3>Junte-se a caminhada!</h3>
        </div>
        <div className="col50">
          <div className="imgBx">
            <img src="assets/images/sobre-a-comunidade.webp" alt="Comunidade na DevPR Conf 2023" />
          </div>
        </div>
      </div>
    </section>
  )
}
