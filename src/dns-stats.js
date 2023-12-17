const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrayDNS = [];
  let obj = {};
  domains.forEach((item) => {
    const arrayNameDomains = item.split('.').reverse();
    for (let i = 0; i < arrayNameDomains.length; i++) {
      const strDomain = '.' + arrayNameDomains.slice(0, i + 1).join('.');
      arrayDNS.push(strDomain);
    }
  });
  arrayDNS.forEach((item, index) => {
    const num = arrayDNS.filter((elem) => elem === item).length;
    obj[item] = num;
  });
  return obj;
}

module.exports = {
  getDNSStats
};
