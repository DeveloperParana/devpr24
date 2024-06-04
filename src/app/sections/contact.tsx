export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2 className="titleText">
          Submissão ou sugestão de <span>C4P</span>s
        </h2>
        <p></p>
      </div>

      <div className="contactForm">
        {/* <h3>Enviar</h3> */}

        <div className="inputBox">
          <input type="text" placeholder="Name" />
        </div>

        <div className="inputBox">
          <input type="text" placeholder="Email" />
        </div>

        <div className="inputBox">
          <textarea placeholder="Name"></textarea>
        </div>

        <div className="inputBox">
          <input type="submit" placeholder="Send" />
        </div>
      </div>
    </section>
  )
}
