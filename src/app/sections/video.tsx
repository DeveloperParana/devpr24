import { create } from "../utils";

export interface VideoAttrs {
  src: string;
}

export const Video = ({ src }: VideoAttrs) => {
  const video = create(
    "video",
    {
      tabIndex: 0,
      preload: "metadata",
      poster: "/assets/images/video-cover.webp",
    },
    create("source", {
      src,
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    })
  );

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
      <div></div>
    </section>
  );
};
