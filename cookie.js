/**
 * 自动获取桔子云 Cookie 脚本
 */
/**
 * Quantumultx 脚本配置
 *
 */

/**
 * @description 工具集
 */
const $utils = (() => {
  const isQuantumultX = typeof $task !== "undefined";
  const notice = (title, subTitle, message, rawOpts) => {
    const encapsulateRawOpts = (rawOpts) => {
      if (!rawOpts) return rawOpts;
      switch (true) {
        case isQuantumultX: {
          const open_url =
            rawOpts["open-url"] || rawOpts.url || rawOpts.openUrl;
          const media_url = rawOpts["media_url"] || rawOpts.mediaUrl;
          return {
            open_url,
            media_url,
          };
        }
        default: {
          return undefined;
        }
      }
    };
    $notify(title, subTitle, message, encapsulateRawOpts(rawOpts));
  };
  const write = () => {};
  const read = () => {};
  const get = () => {};
  const post = () => {};
  const throwError = () => {};
  const time = () => {};
  const done = () => {};

  return {
    isQuantumultX,
    notice,
    write,
    read,
    get,
    post,
    throwError,
    time,
    done,
  };
})();

(async function GetCookie() {});
