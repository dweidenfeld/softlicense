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
        var checker = new Checker('0g28MGcyOGN3Y3g3NzZTNzc2Vjc3Nk83NzZkNzc2UTc3NjA3NzZDNzc2MA==cwcx', license);

        this[checker.decryptFunction(
            '09e1MDllMWkzZ3Q3NytXNzcraDc3K1I3NytnNzcrNjc3K2s3NytrNzcrNDc3K0I3Nytqi3gt')] =
            function () {
                if (!checker.isModuleLicensed('myfunction')) {
                    console.warn('myfunction has not been licensed');
                    return;
                }
                alert('myfunction');
            };

        this[checker.decryptFunction(
            '04rnMDRybmVyaTA3NytINzcrKzc3K1Q3Nys4Nzcrazc3K3Q3NytYNzcr' +
            'NTc3K2M3Nyt1NzcrTDc3Kys3Nys4NzcrMjc3KzQ3Nyt1NzcrTw==eri0')] =
            function () {
                if (!checker.isModuleLicensed('myfunctionInvalid')) {
                    console.warn('myfunctionInvalid has not been licensed');
                    return;
                }
                alert('myfunctionInvalid');
            };

        if (checker.isLicenseValid()) {
            return {
                myfunction: this[checker.decryptFunction(
                    '0c7xMGM3eHU0eHA3NytXNzcraDc3K1I3Nytn' +
                    'NzcrNjc3K2s3NytrNzcrNDc3K0I3Nytqu4xp')],
                myfunctionInvalid: this[checker.decryptFunction(
                    '0r9mMHI5bWpnOWI3NytINzcrKzc3K1Q3Nys4Nzcrazc3K3Q3NytYNzcr' +
                    'NTc3K2M3Nyt1NzcrTDc3Kys3Nys4NzcrMjc3KzQ3Nyt1NzcrTw==jg9b')]
            };
        } else {
            console.warn('MyModule has not been licensed or license is invalid');
        }
    }

### Crypt a function internally
First crypt the function

    softlicense-cli --action crypt --moduleName MyModule --input myFunction

Then use the function like this

    var checker = new Checker(privateKey, license);
    this[checker.decryptFunction(cryptedFunctionString)]()