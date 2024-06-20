import React from 'react';

import useTriggerOnScroll from '@/hooks/useTriggerOnScroll';

export const Video = ({ url, type, ...rest }) => {
  const videoRef = React.useRef(null);
  const previousUrl = React.useRef(url);
  const [show, setShow] = React.useState(false);

  useTriggerOnScroll(videoRef, (triggered) => setShow(triggered));

  React.useEffect(() => {
    if (previousUrl.current === url) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = url;
  }, [url]);

  return (
    <video ref={videoRef} {...rest}>
      {show && <source src={url} type={type} />}
    </video>
  );
};
