import { useRef, useEffect, useState } from 'react';
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { AsciinemaPlayer, create as createPlayer } from 'asciinema-player';

import 'asciinema-player/dist/bundle/asciinema-player.css';

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<AsciinemaPlayer>();

  useEffect(() => {
    if (playerRef.current) {
      const player = createPlayer(
        staticFile('/test.cast'),
        playerRef.current,
        {
          autoPlay: false,
          fit: 'both',
          rows: 20,
          cols: 100,
        }
      );
      setPlayer(player);
    }
  }, [playerRef]);

  useEffect(() => {
    if (player) {
      const time = frame / fps;
      player.seek(time);
    }
  }, [frame, fps, player]);

  return (
    <AbsoluteFill className="player-container items-center justify-center">
      <div ref={playerRef} id="player" />
    </AbsoluteFill>
  );
};
