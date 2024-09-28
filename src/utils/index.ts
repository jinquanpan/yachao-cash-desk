type TargetContext = '_self' | '_parent' | '_blank' | '_top';

export const openWindow = (
  url: string,
  opts?: { target?: TargetContext; [key: string]: any }
) => {
  const { target = '_blank', ...others } = opts || {};
  window.open(
    url,
    target,
    Object.entries(others)
      .reduce((preValue: string[], curValue) => {
        const [key, value] = curValue;
        return [...preValue, `${key}=${value}`];
      }, [])
      .join(',')
  );
};

export const regexUrl = new RegExp(
  '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  'i'
);

// 千分位
export const thousands = (num: string) => {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

// 获取监听的扫码设备拿到的条形码 外层监听的方法document.addEventListener('keypress', )
export const oneEquipmentCode = (cb: any) => {
  let time: any = null;
  let str = '';

  return (e: { key: string }) => {
    const keyCode = e.key;

    if (keyCode !== 'Enter') {
      str += keyCode;
    }
    if (!time && keyCode !== 'Enter') {
      time = setTimeout(() => {
        time = null;
        str = '';
      }, 2000);
    } else if (keyCode === 'Enter') {
      if (str.length >= 6) {
        cb(str);
      }
      str = '';
    }
  };
};

export default null;
