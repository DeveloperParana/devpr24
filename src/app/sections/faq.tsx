import { Accordion } from "../components";

export const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <div className="title white">
        <h2 className="titleText">
          F<span>.</span>A<span>.</span>Q<span>.</span>
        </h2>
      </div>
      <div className="content">
        <Accordion />
      </div>
    </section>
  );
};
