import { Icon } from "../parts";
import { create } from "../utils";

export interface VideoAttrs {
  src: string;
}

interface PlayAttrs {
  onClick(ev: MouseEvent): void;
}
const Play = (attrs: PlayAttrs) => {
  return (
    <button type="button" onClick={attrs.onClick}>
      <Icon name="play-circle" className="play" width={128} />
      <Icon name="pause-circle" className="pause" width={128} />
    </button>
  );
};

export const Video = ({ src }: VideoAttrs) => {
  const video = create("video", {
    src,
    tabIndex: 0,
    playsInline: true,
    preload: "metadata",
    className: "paused",
    poster: "/assets/images/video-cover.webp",
  });

  const onPlay = (paused = true) => {
    if (paused) video.play();
    else video.pause();
  };

  video.onplay = () => video.classList.toggle("paused");
  video.onpause = () => video.classList.toggle("paused");

  const overlay = create("div", <Play onClick={() => onPlay(video.paused)} />);

  queueMicrotask(() => {
    const handle = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (navigator.userActivation.hasBeenActive) {
          if (entry.isIntersecting && video.paused) video.play();
          else if (!video.paused) video.pause();
        }
      });
    };

    const options = { rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(handle, options);
    video.onloadeddata = () => observer.observe(video);
  });

  return (
    <section id="video" className="video">
      {video}
      {overlay}
    </section>
  );
};
