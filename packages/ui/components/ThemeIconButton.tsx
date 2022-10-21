import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

export interface ThemeButtonProps {
  isDark: boolean | null;
  setDarkMode: Dispatch<SetStateAction<boolean | null>>;
}

export const ThemeIconButton: React.FunctionComponent<ThemeButtonProps> = ({
  isDark,
  setDarkMode,
}) => {
  const [dark, setLocalStateDarkMode] = useState<boolean | null>(false);

  useEffect(() => {
    setLocalStateDarkMode(isDark);
  }, [isDark]);

  if (dark)
    return (
      <BsFillMoonFill
        className="cursor-pointer"
        size={30}
        onClick={() => setDarkMode(!dark)}
      />
    );

  return (
    <BsSunFill
      className="cursor-pointer"
      size={30}
      onClick={() => setDarkMode(!dark)}
    />
  );
};
