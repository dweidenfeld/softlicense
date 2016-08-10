function MyModule(license) {
    var checker = new Checker('0gnlMGdubGF5dDU3NzZTNzc2Vjc3Nk83NzZkNzc2UTc3NjA3NzZDNzc2MA==ayt5', license);

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
        '0zklMHprbDlqNWE3NytTNzc2cTc3Nmg3NzY0Nzc2RTc3K2M3NytsNzc2Njc3Nms3NzZINzc2STc3Kzc3NzZuNzcrSDc3K2E3NytQNzcrVDc3NjE3NzZXNzc2Yzc3NmQ3NzY0Nzc2dTc3K203NzZmNzc2eTc3NnQ3NzZ3Nzc2eTc3K3c3NzY1NzcraDc3NjA3NyszNzcrTTc3K3U3NytHNzcrMjc3Nmk3NysvNzcrVzc3K1o3NysxNzc2ODc3NlQ3NzZwNzcrSDc3Nm03NytRNzcrZjc3K2Q3NytMNzcrTTc3NjU3NzZzNzc2Lzc3K083NytWNzc2dzc3K203NzZrNzcrOTc3K2o3NzYxNzcrcjc3Nnk3NzYvNzc2czc3NmU3NzZWNzcrbDc3KzQ3Nyt2Nzc2RDc3Nko3NytoNzc2bjc3Nks3NzY3Nzcrcjc3Njg3Nys1NzcrRDc3K1g3NzZNNzc2Mjc3Nmg3NytkNzc2Yzc3Nm43NzYxNzcrMjc3Nkc3NzZuNzc2NTc3K3A=9j5a');

    myModule.myfunction();
    myModule.myfunctionInvalid();
}

document.addEventListener('DOMContentLoaded', init, false);
