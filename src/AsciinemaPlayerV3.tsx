import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { staticFile } from 'remotion';
import { create as createPlayer } from 'asciinema-player';

import 'asciinema-player/dist/bundle/asciinema-player.css';
import './player.css';

interface AsciinemaPlayerProps {
  path: string;
  speed: number;
}

const Container = styled.div`
  background-color: #121314;
  width: 100%;
  height: 100%;
`;

export const AsciinemaPlayerV3: FC<AsciinemaPlayerProps> = ({ path, speed }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      createPlayer(staticFile(path), playerRef.current, {
        autoPlay: true,
        fit: 'both',
        rows: 20,
        cols: 80,
        speed,
      });
    }
  }, [playerRef]);

  return (
    <Container ref={playerRef} id="player" />
  );
};
