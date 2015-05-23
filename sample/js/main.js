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

function init() {
    var myModule = new MyModule(
        '0n5pMG41cGJoYWM3NzZkNzc2TDc3K0M3NzZ5Nzc2Kzc3NnI3NzZ0Nzc2MTc3NmU3NzZ6Nzc2Vzc3' +
        'Nmw3NzY4NzcrZzc3NkM3NytzNzcrQzc3Nmw3NzZGNzcrUTc3K0U3NytHNzcrVzc3K2I3NzZ5Nzc2' +
        'Szc3Kzg3NytRNzcrRTc3K003NzZENzc2VTc3K0Y3NytpNzcrQjc3K1k3NysxNzcrczc3Kzg3NzYw' +
        'Nzc2Yzc3K3E3NytjNzcrcDc3Ky83NzY0Nzc2Nzc3K3o3NytVNzcrMzc3K2s3NytJNzcrRDc3K0Q3' +
        'NytONzcrRjc3Nnk3NzZLNzc2eTc3K1o3NytkNzcrWDc3K2Q3NytaNzc2dDc3NnY3NzZ0NzcrKzc3' +
        'K3I3NytnNzc2ODc3Njc3NzZSNzc2STc3NlY3NzZ3Nzc2azc3Nm03NzYyNzc2Nzc3K0M3NzZ0bhac');

    myModule.myfunction();
    myModule.myfunctionInvalid();
}

document.addEventListener('DOMContentLoaded', init, false);
