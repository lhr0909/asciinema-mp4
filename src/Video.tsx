import { Composition } from 'remotion';
import { AsciinemaPlayer } from './AsciinemaPlayer';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="asciinema"
        component={AsciinemaPlayer}
        defaultProps={{
          path: '/test.cast',
        }}
        durationInFrames={60 * Math.floor(1017.364589 / 128)}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
