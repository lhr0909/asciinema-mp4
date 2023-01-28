import { Composition } from 'remotion';
import { MyComposition } from './Composition';

import './style.css';

export const RemotionRoot: React.FC = () => {
	const duration = 404.383137;
	const fps = 30;

	const durationInFrames = Math.ceil(fps * duration);

  return (
    <>
      <Composition
        id="asciinema-player"
        component={MyComposition}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
