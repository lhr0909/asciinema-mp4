import { Composition } from 'remotion';
import { AsciinemaPlayerV3 } from './AsciinemaPlayerV3';
import { AsciinemaPlayerV2 } from './AsciinemaPlayerV2';

export const RemotionVideo: React.FC = () => {
  // const duration = 1017.364589;
  const duration = 174.652085;
  const fps = 60;
  const speed = 8;

  const width = 1920;
  const height = 1080;

  // path is inside /public
  const path = '/test2.cast';

  return (
    <>
      <Composition
        id="asciinema-v3"
        component={AsciinemaPlayerV3}
        defaultProps={{
          path,
          speed,
        }}
        durationInFrames={fps * Math.ceil(duration / speed)}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="asciinema-v2"
        component={AsciinemaPlayerV2}
        defaultProps={{
          path,
          speed,
        }}
        durationInFrames={fps * Math.ceil(duration / speed)}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
