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

  export function create(src: string, elem: HTMLElement, opts: AsciinemaPlayerOptions = {}): void;
}
