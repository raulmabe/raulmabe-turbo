import { SpotifyNowPlaying } from './Spotify';
import { ThemeButtonProps, ThemeIconButton } from './ThemeIconButton';

export const NavBar: React.FC<ThemeButtonProps> = props => {
  return (
    <div className=" min-h-[10vh] flex items-center justify-around">
      <div className="uppercase font-mono font-bold">
        M A <br /> b e
      </div>

      <SpotifyNowPlaying />

      <ThemeIconButton {...props} />
    </div>
  );
};
