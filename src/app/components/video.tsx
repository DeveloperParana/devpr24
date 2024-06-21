import { Icon } from "../parts";
import { create, timeout } from "../utils";

export interface VideoAttrs {
  src: string;
  volume?: number;
  poster?: string;
  autoplay?: boolean;
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

export const Video = ({ src, poster, volume = 0, autoplay }: VideoAttrs) => {
  const video = create("video", {
    src,
    volume,
    tabIndex: 0,
    playsInline: true,
    preload: "metadata",
    className: "paused",
    poster,
  });

  const onPlay = (paused = true) => {
    if (paused) video.play();
    else video.pause();
  };

  const play = <Play onClick={() => onPlay(video.paused)} />;

  const overlay = create("div", play);

  video.onplay = () => {
    video.classList.toggle("paused");
    timeout(() => {
      play.classList.add("hidden");
    }, 2000);
  };

  overlay.onmouseover = () => {
    play.classList.remove("hidden");
  };

  overlay.onmouseleave = () => {
    play.classList.add("hidden");
  };

  video.onpause = () => {
    video.classList.toggle("paused");
    play.classList.remove("hidden");
  };

  if (autoplay) {
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
  }

  return (
    <div className="video">
      {video}
      {overlay}
    </div>
  );
};
