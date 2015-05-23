import Generator from './Generator';
import Checker from './Checker';
import * as CliUtils from './lib/CliUtils';

let params = CliUtils.getParams();

switch (params.action) {
    case 'generate':
        console.log('License: ' + new Generator(params.moduleName).generate(params));
        break;
    case 'check':
        if (!params.license) {
            CliUtils.usage();
            console.warn('specify license with "--license"');
            CliUtils.exit(3);
        }
        let checker = new Checker(params.license);
        console.log('Is license valid: ' + checker.isLicenseValid());
        console.log('Modules: ' + checker.getModules().join(', '));
        break;
    default:
        CliUtils.usage();
        break;
}
