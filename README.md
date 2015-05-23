# SoftLicense

SoftLicense is a javascript library for generating software licenses and checking them in your code.

## Installation
    npm install softlicense -g
    npm install softlicense --save

## Usage

### Generate a license
Read the manual by executing

    softlicense-cli

Minimal execution for endless license for MyModule

    softlicense-cli --action generate --moduleName MyModule

### Check a license (CLI)
    softlicense-cli --action check --moduleName testmodule --license ...

### Check a license (programmatically)

    function MyModule(license) {

        var checker = new Checker('MyModule', license);

        var myfunction = function myfunction() {
            if (!checker.isModuleLicensed('myfunction')) {
                console.warn('myfunction has not been licensed');
                return;
            }
            alert('myfunction');
        };

        var myfunctionInvalid = function myfunctionInvalid() {
            if (!checker.isModuleLicensed('myfunctionInvalid')) {
                console.warn('myfunctionInvalid has not been licensed');
                return;
            }
            alert('myfunctionInvalid');
        };

        if (checker.isLicenseValid()) {
            return {
                myfunction: myfunction,
                myfunctionInvalid: myfunctionInvalid
            };
        } else {
            console.warn('MyModule has not been licensed or license is invalid');
        }
    }
