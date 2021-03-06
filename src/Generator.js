import Base64 from './lib/Base64';

export default class Generator {

  constructor(moduleName) {
    this.moduleName = moduleName;
  }

  generatePrivateKey(options) {
    return Generator.crypt(this.moduleName, null);
  }

  generateLicense(options) {
    let startDate = options.startDate || null;
    let endDate = options.endDate || null;
    let modules = options.modules || null;
    const privateKey = options.privateKey;
    const domain = options.domain || null;

    if (!privateKey) {
      throw new Error('privateKey must be specified');
    }

    if (null !== startDate) {
      startDate = new Date(startDate);
    }
    if (null !== endDate) {
      endDate = new Date(endDate);
    }
    if (null !== modules) {
      modules = modules.split(',');
    }

    let licenseInfo = {
      moduleName: this.moduleName,
      startDate: startDate,
      endDate: endDate,
      modules: modules,
      domain: domain
    };

    licenseInfo.license = Generator.crypt(JSON.stringify(licenseInfo), privateKey);

    return licenseInfo;
  }

  cryptFunction(functionName, privateKey) {
    return Generator.crypt(functionName, privateKey);
  }

  static crypt(str, pSalt) {
    let salt = Generator._generateSalt(8);
    let strArr = str.split('');
    strArr = strArr.reverse();
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].charCodeAt(0);
      strArr[i] = (~(strArr[i] ^ i)) ^ (strArr.length - i);
      if (Generator._def(pSalt)) {
        strArr[i] = strArr[i] ^ pSalt[(i % pSalt.length)].charCodeAt(0);
      }
      strArr[i] = String.fromCharCode(strArr[i]);
    }
    return salt.substr(0, 4) + Base64.encode(salt + Base64.encode(strArr.join(''))) + salt.substr(4);
  }

  static _generateSalt(length) {
    return Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, length);
  }

  static _def(variable) {
    return null !== variable && typeof variable !== 'undefined';
  }
}
