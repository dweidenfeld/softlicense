import Generator from '../src/Generator';
import Checker from '../src/Checker';
import chai from 'chai';

describe('Generator and Checker', () => {
    let generator = new Generator('testModule');

    describe('_generateSalt', () => {
        it('salt should have 8 characters', () => {
            let salt = generator._generateSalt(8);
            chai.expect(salt).to.have.length(8);
        });
    });

    describe('valid license', () => {
        let license = generator.generate({
            modules: 'a,b,c'
        });
        let checker = new Checker('testModule', license);

        it('should be valid', () => {
            chai.expect(checker.isLicenseValid()).to.be.true;
        });

        it('must contain all modules', () => {
            chai.expect(checker.getModules()).to.have.length.of(3);
        });

        it('must contain module a', () => {
            chai.expect(checker.isModuleLicensed('a')).to.be.true;
        });
    });

    describe('invalid license', () => {
        let license = generator.generate({
            startDate: new Date(0),
            endDate: new Date(1)
        });
        let checker = new Checker('testModule', license);

        it('should be invalid', () => {
            chai.expect(checker.isLicenseValid()).to.be.false;
        });

        it('must not contain modules', () => {
            chai.expect(checker.getModules()).to.be.empty;
        });

        it('must not have module a licensed', () => {
            chai.expect(checker.isModuleLicensed('a')).to.be.false;
        });
    });
});