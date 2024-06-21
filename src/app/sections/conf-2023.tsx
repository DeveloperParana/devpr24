import { Video } from "../components";

export function Conf2023() {
  return (
    <Video
      autoplay
      volume={0.1}
      src="/assets/videos/conf-2023.mp4"
      poster="/assets/images/conf-2023-poster.webp"
    />
  );
}
