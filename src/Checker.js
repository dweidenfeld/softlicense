import Base64 from './lib/Base64';

export default class Checker {

    constructor(privateKey, license) {
        this.moduleName = this.decrypt(privateKey, null, false);
        this.license = JSON.parse(this.decrypt(license, this.moduleName, true));
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

    decryptFunction(hash) {
        return this.decrypt(hash, this.moduleName, false);
    }

    //noinspection JSMethodCanBeStatic
    decrypt(str, pSalt, objectFix) {
        let salt = str.substr(0, 4) + str.substr(str.length - 4);
        let strArr = Base64.decode(Base64.decode(str.substr(4, str.length - 8)).substr(salt.length)).split('');
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].charCodeAt(0);
            if (this._def(pSalt)) {
                strArr[i] = strArr[i] ^ pSalt[(i % pSalt.length)].charCodeAt(0);
            }
            strArr[i] = (~ (strArr[i] ^ i)) ^ (strArr.length - i);
            strArr[i] = String.fromCharCode(strArr[i]);
        }
        strArr = strArr.reverse();
        if (objectFix) {
            strArr[0] = '{';
        }
        return strArr.join('');
    }

    //noinspection JSMethodCanBeStatic
    _def(variable) {
        return null !== variable && typeof variable !== 'undefined';
    }
}