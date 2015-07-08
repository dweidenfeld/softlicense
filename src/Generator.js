import Base64 from './lib/Base64';

export default class Generator {

  constructor(moduleName) {
    this.moduleName = moduleName;
  }

  generate(options) {
    let startDate = options.startDate || null;
    let endDate = options.endDate || null;
    let modules = options.modules || null;

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
      modules: modules
    };

    return {
      privateKey: this.crypt(this.moduleName, null),
      license: this.crypt(JSON.stringify(licenseInfo), this.moduleName)
    };
  }

  cryptFunction(functionName) {
    return this.crypt(functionName, this.moduleName);
  }

  crypt(str, pSalt) {
    let salt = this._generateSalt(8);
    let strArr = str.split('');
    strArr = strArr.reverse();
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].charCodeAt(0);
      strArr[i] = (~(strArr[i] ^ i)) ^ (strArr.length - i);
      if (this._def(pSalt)) {
        strArr[i] = strArr[i] ^ pSalt[(i % pSalt.length)].charCodeAt(0);
      }
      strArr[i] = String.fromCharCode(strArr[i]);
    }
    return salt.substr(0, 4) + Base64.encode(salt + Base64.encode(strArr.join(''))) + salt.substr(4);
  }


  //noinspection JSMethodCanBeStatic
  _generateSalt(length) {
    return Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, length);
  }

  //noinspection JSMethodCanBeStatic
  _def(variable) {
    return null !== variable && typeof variable !== 'undefined';
  }
}
