import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { staticFile } from 'remotion';
import { create as createPlayer } from 'asciinema-player';

import 'asciinema-player/dist/bundle/asciinema-player.css';
import './player.css';

interface AsciinemaPlayerProps {
  path: string;
}

const Container = styled.div`
  background-color: #121314;
  width: 100%;
  height: 100%;
`;

export const AsciinemaPlayer: FC<AsciinemaPlayerProps> = ({ path }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      createPlayer(staticFile(path), playerRef.current, {
        autoPlay: true,
        fit: 'both',
        fontSize: 'big',
        speed: 16,
      });

      // console.log(playerRef.current);
      // document.getElementById('player')!.addEventListener('play', function(e) {
      //   console.log("it's playing");
      //   console.log("we're at", (this as HTMLVideoElement).currentTime);
      //   console.log("total time", (this as HTMLVideoElement).duration);
      // });
    }
  }, [playerRef]);

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = staticFile('/asciinema-player.js');
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <>
      <Container ref={playerRef} id="player">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {/* <asciinema-player
          ref={playerRef}
          autoplay
          id="player"
          src={staticFile(path)}
          font-size="24px"
          rows="30"
          cols="120"
          speed="64"
        /> */}
      </Container>
    </>
  );
};
