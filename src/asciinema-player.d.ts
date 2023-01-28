declare module 'asciinema-player' {
  export interface AsciinemaPlayerOptions {
    cols?: number = 80;
    rows?: number = 24;
    autoPlay?: boolean = false;
    preload?: boolean = false;
    loop?: boolean = false;
    startAt?: number | string = 0;
    speed?: number = 1;
    idleTimeLimit?: number;
    theme?: string = 'asciinema';
    poster?: string;
    fit?: 'width' | 'height' | 'both' | 'none' | false = 'width';
    fontSize?: 'small' | 'medium' | 'big' | string = 'small';
  }

  export class AsciinemaPlayer {
    getCurrentTime(): number;
    getDuration(): number;
    play(): Promise<void>;
    pause(): void;
    seek(time: number): Promise<void>;
    addEventListener(event: string, listener: (event: Event) => void): void;
    dispose(): void;
  }

  export function create(src: string, elem: HTMLElement, opts: AsciinemaPlayerOptions = {}): AsciinemaPlayer;
}
