import Generator from './Generator';
import Checker from './Checker';
import * as CliUtils from './lib/CliUtils';

let params = CliUtils.getParams();

let generator = new Generator(params.moduleName);

switch (params.action) {
    case 'generate':
        let license = generator.generate(params);
        console.log('PrivateKey: ' + license.privateKey);
        console.log('License: ' + license.license);
        break;
    case 'crypt':
        if (!params.input) {
            CliUtils.usage();
            console.warn('specify input with "--input"');
            CliUtils.exit(3);
        }
        console.log('Crypted: ' + generator.cryptFunction(params.input));
        break;
    case 'decrypt':
        if (!params.privateKey) {
            CliUtils.usage();
            console.warn('specify private key with "--privateKey"');
            CliUtils.exit(3);
        }
        if (!params.license) {
            CliUtils.usage();
            console.warn('specify license with "--license"');
            CliUtils.exit(3);
        }
        if (!params.input) {
            CliUtils.usage();
            console.warn('specify input with "--input"');
            CliUtils.exit(3);
        }
        let checker = new Checker(params.privateKey, params.license);
        console.log('Decrypted: ' + checker.decryptFunction(params.input));
        break;
    case 'check':
        if (!params.privateKey) {
            CliUtils.usage();
            console.warn('specify private key with "--privateKey"');
            CliUtils.exit(3);
        }
        if (!params.license) {
            CliUtils.usage();
            console.warn('specify license with "--license"');
            CliUtils.exit(3);
        }
        let checker = new Checker(params.privateKey, params.license);
        console.log('Is license valid: ' + checker.isLicenseValid());
        console.log('Modules: ' + checker.getModules().join(', '));
        break;
    default:
        CliUtils.usage();
        break;
}
