## Render asciinema casts into MP4 videos using Remotion

By putting the asciinema-player inside Remotion Composition, we can render full HD video from asciinema casts.

## Rendering Workflow

1. Once the dependencies are installed, put the cast file under the `public` directory.
2. Edit `src/Video.tsx` and reference the cast file and set up the playback speed.
3. Run `yarn start` to start the Remotion previewer. Turn on DevTools on browser.
4. Select `asciinema-v2` composition from the preview left nav, and find out the total duration of the cast file.
5. Update the duration in `src/Video.tsx`, and run `yarn build` to render the video.
6. The video should be in the `/out` directory. If you want other settings for the rendered video, please refer to [Remotion Documentation](https://www.remotion.dev/docs/cli) and make changes in the `build` command in `package.json`.

## License

- Remotion has its [own license](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)
- asciinema-player is licensed under [Apache V2](https://github.com/asciinema/asciinema-player#license).
- This piece of code is under [MIT](./LICENSE).

## References

- [asciinema-player](https://github.com/asciinema/asciinema-player)
- [Remotion](https://remotion.dev)