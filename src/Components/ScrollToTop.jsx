import { useEffect } from 'react';
import { useNavigationType, useLocation } from 'react-router';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  

  useEffect(() => {
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);

  return children;
};

export default ScrollToTop;
