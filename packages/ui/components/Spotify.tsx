import classNames from 'classnames';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import { SpotifyItem } from '../../../apps/dev-web/src/@types/@spotify';

export const SpotifyNowPlaying: React.FunctionComponent<{}> = () => {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data } = useSWR('https://raulmabe.dev/api/spotify', fetcher);

  const track: SpotifyItem | null = data !== undefined ? data.track : null;
  const isTrackNull = track === null || track === undefined;
  const song = isTrackNull
    ? 'Not playing'
    : `${track!.item.name} by ${track!.item.artists[0].name}`;

  return (
    <a
      className={classNames({
        'flex flex-row md:gap-2 items-center  p-2 rounded-lg': true,
        'hover:bg-black/10 hover:shadow-inner': !isTrackNull,
      })}
      href={track?.item.external_urls.spotify}
    >
      <FaSpotify size={30} className=" text-primary-200 mx-2" />
      {/* // TODO: Add transition ease-in-out duration-300*/}
      <span className="flex flex-col md:flex-row md:gap-2 md:divide-x divide-slate-600/50">
        <span>{song}</span>

        <span className="opacity-60 md:px-2">Spotify</span>
      </span>
    </a>
  );
};
