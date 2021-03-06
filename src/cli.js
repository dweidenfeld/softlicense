import Generator from './Generator';
import Checker from './Checker';
import * as CliUtils from './lib/CliUtils';

let params = CliUtils.getParams();

let generator = new Generator(params.moduleName);
let checker = null;

switch (params.action) {
  case 'generate-privatekey':
    let privateKey = generator.generatePrivateKey(params);
    console.log('PrivateKey: ' + privateKey);
    break;
  case 'generate-license':
    if (!params.privateKey) {
      CliUtils.usage();
      console.warn('specify private key with "--privateKey"');
      CliUtils.exit(3);
    }
    let license = generator.generateLicense(params);
    console.log('LicenseInfo:');
    console.log(JSON.stringify(license, null, 2));
    break;
  case 'crypt':
    if (!params.input) {
      CliUtils.usage();
      console.warn('specify input with "--input"');
      CliUtils.exit(3);
    }
    if (!params.privateKey) {
      CliUtils.usage();
      console.warn('specify private key with "--privateKey"');
      CliUtils.exit(3);
    }
    console.log('Crypted: ' + generator.cryptFunction(params.input, params.privateKey));
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
    checker = new Checker(params.privateKey, params.license);
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
    checker = new Checker(params.privateKey, params.license);
    console.log('Is license valid: ' + checker.isLicenseValid());
    console.log('Modules: ' + checker.getModules().join(', '));
    break;
  default:
    CliUtils.usage();
    break;
}
