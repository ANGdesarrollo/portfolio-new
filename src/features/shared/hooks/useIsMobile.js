const MOBILE_DEVICES = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];

export const useIsMobile = () => {
  const device = navigator.userAgent;

  const isMobile = () => {
    return MOBILE_DEVICES.some(mobileDevice => device.match(new RegExp(mobileDevice, 'i')));
  };

  return { isMobile };
};
