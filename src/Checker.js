import Base64 from './lib/Base64';

export default class Checker {

    constructor(moduleName, license) {
        this.moduleName = moduleName;
        this.license = JSON.parse(this._decrypt(license));
    }

    isLicenseValid() {
        let valid = this.moduleName === this.license.moduleName;
        let now = new Date();
        if (this._def(this.license.startDate)) {
            if (new Date(this.license.startDate) > now) {
                valid = false;
            }
        }
        if (this._def(this.license.endDate)) {
            if (new Date(this.license.endDate) < now) {
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

    //noinspection JSMethodCanBeStatic
    _decrypt(str) {
        let salt = str.substr(0, 4) + str.substr(str.length - 4);
        let strArr = Base64.decode(Base64.decode(str.substr(4, str.length - 8)).substr(salt.length)).split('');
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].charCodeAt(0);
            strArr[i] = (~ (strArr[i] ^ i)) ^ (strArr.length - i);
            strArr[i] = String.fromCharCode(strArr[i]);
        }
        strArr = strArr.reverse();
        strArr[0] = '{';
        return strArr.join('');
    }

    _def(variable) {
        return null !== variable && typeof variable !== 'undefined';
    }
}