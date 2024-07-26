import { findAll, queue, shuffle } from "../utils";
import { companies } from "../../data";
import { Link } from "../parts";
import { useRef } from "../../core/uses";

export const Companies = () => {
  const ref = useRef<HTMLDivElement>();

  queue(() => {
    // const groupObserver = new IntersectionObserver((entries) => {
    //   for (const entry of entries) {
    //     console.log(entry);
        
    //   }
    // }, { rootMargin: "0px", threshold: 0.5 })
    // groupObserver.observe(ref.current())
    // document.onvisi

    // console.log(timeToHandle);

    // const observer = new IntersectionObserver((entries) => {
    //   for (const entry of entries) {
    //     const isChild = ref.current().contains(entry.target);
    //     if (!entry.isIntersecting && isChild) {
    //       console.log(entry);

    //       // entry.target.remove();
    //       // ref.current().append(entry.target);
    //     }
    //   }
    // });

    // const elements = findAll(`#companies .handle-position`);
    // for (const element of elements) {
    //   if (element) observer.observe(element);
    // }
  });

  return (
    <section className="marquee-container" id="companies">
      <div className="marquee__wrapper">
        <div className="marquee">
          <div ref={ref} className="marquee__group" data-animate="15s">
            {shuffle(companies).map((company) => {
              return (
                <Link
                  href={company.link}
                  target="_blank"
                  className="handle-position"
                >
                  <img src={company.logo} alt={company.name} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
