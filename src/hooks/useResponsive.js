import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const isMobile = useMediaQuery({ query: 'only screen and (max-width: 769px)' });
  const isPrint = useMediaQuery({ query: 'only print' });


  return {
    isMobile,
    isPrint
  };
}
