import Base64 from './lib/Base64';

export default class Checker {

  constructor(privateKey, license) {
    this.moduleName = Checker.decrypt(privateKey, null, false);
    try {
      this.license = JSON.parse(Checker.decrypt(license, this.moduleName, true));
    } catch (e) {
      throw new Error('cannot parse license', e);
    }
  }

  isLicenseValid() {
    let valid = this.moduleName === this.license.moduleName;
    let now = new Date();
    if (Checker._def(this.license.startDate)) {
      if (new Date(this.license.startDate) > now) {
        valid = false;
      }
    }
    if (Checker._def(this.license.endDate)) {
      if (new Date(this.license.endDate) < now) {
        valid = false;
      }
    }
    if (Checker._def(this.license.domain)) {
      const domainRegex = new RegExp(this.license.domain, 'i');
      if (domainRegex.test(window.location.hostname)) {
        valid = false;
      }
    }
    return valid;
  }

  isModuleLicensed(moduleName) {
    return this.getModules().indexOf(moduleName) > -1;
  }

  getModules() {
    return this.license.modules || [];
  }

  decryptFunction(hash) {
    return Checker.decrypt(hash, this.moduleName, false);
  }

  static decryptFunctionOfModule(hash, moduleName) {
    return Checker.decrypt(hash, moduleName, false);
  }

  static decrypt(str, pSalt, objectFix) {
    let salt = str.substr(0, 4) + str.substr(str.length - 4);
    let strArr = Base64.decode(Base64.decode(str.substr(4, str.length - 8)).substr(salt.length)).split('');
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].charCodeAt(0);
      if (Checker._def(pSalt)) {
        strArr[i] = strArr[i] ^ pSalt[(i % pSalt.length)].charCodeAt(0);
      }
      strArr[i] = (~(strArr[i] ^ i)) ^ (strArr.length - i);
      strArr[i] = String.fromCharCode(strArr[i]);
    }
    strArr = strArr.reverse();
    if (objectFix) {
      strArr[0] = '{';
    }
    return strArr.join('');
  }

  static _def(variable) {
    return null !== variable && typeof variable !== 'undefined';
  }
}
