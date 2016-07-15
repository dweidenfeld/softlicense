function MyModule(license) {
    var checker = new Checker('0xtnMHh0bnFpdDE3NzZTNzc2Vjc3Nk83NzZkNzc2UTc3NjA3NzZDNzc2MA==qit1', license);

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

function init() {
    var myModule = new MyModule(
        '0twaMHR3YTF4ZG03NzZvNzcrRDc3Nmg3NzZFNzc2VDc3NkY3NzZZNzc2Yzc3Nkc3NzYrNzc2Sjc3K2w3NysyNzcrLzc3NnE3NzZrNzc2VTc3NnM3NzZhNzc2ejc3Kys3NytoNzc2Sjc3Ky83NzZMNzc2Kzc3Nk03NzZ6Nzc2djc3Nno3NzZ4Nzc2cjc3NnM3NzZNNzcrMzc3NnM3NytHNzcrUDc3Nkg3NzZZNzcrSjc3K2s3NytCNzcrbzc3K2g3NzYvNzc2bzc3K2g3NytaNzcrMDc3K2I3NzZ0Nzc2Kzc3K283NytnNzcrODc3K2g3NysxNzcrTDc3K2k3NzZ1Nzc2eDc3K283NytoNzc2Zzc3NlA3Nyt2NzcrVjc3Nlo3NzZaNzc2Vjc3NjU3NzZSNzc2ajc3NkU3NzZ6Nzc2Lzc3Ky83NytvNzcrdjc3NlE3NzZ0Nzc2QTc3Nno3NzZ6Nzc2QTc3NnQ3NzZRNzcrSDc3K3I3NytINzc2aTc3Nmg3NzY4Nzc2Szc3Nm83NzY1Nzc2VTc3Nng3NzZZNzc2Ujc3K1A3NzZQ1xdm');

    myModule.myfunction();
    myModule.myfunctionInvalid();
}

document.addEventListener('DOMContentLoaded', init, false);
