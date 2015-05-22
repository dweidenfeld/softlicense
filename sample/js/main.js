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

function init() {

    var myModule = new MyModule('00b2MDBiMjZvbTY3NytRNzcreTc3NlA3NytkNzcrYTc3K2U3NytCNzcrUTc3' +
        'K1Q3NytLNzcrYjc3K0s3NytZNzc2Vjc3K3U3NzZKNzc2UDc3K2M3NytJNzc2Lzc3Nmc3NzZ6Nzc2Njc3Nis3' +
        'NysvNzcrejc3Nng3NzYvNzc2Zzc3NjU3Nyt2NzcreDc3Nkk3NzZiNzc2TTc3NjM3NzZSNzc2Wjc3NlE3NytS' +
        'NzcrUjc3NlQ3NzZSNzc2Rzc3NmI3NytONzcrWDc3Nlc3NzZaNzc2Tzc3NnA3NzZuNzc2bjc3NjI3NzZoNzc2' +
        'Zzc3Ky83Nyt6NzcrLzc3NjI3NzY1Nzc2aTc3Nng3NzY4NzcrZzc3K1c3NytnNzc2Ujc3NlA3NzZWNzcrUTc3' +
        'K2U3NytjNzcreDc3K1k3NytmNzcrQTc3K1Q3NythNzcrZTc3NlA3NytV6om6');

    myModule.myfunction();
    myModule.myfunctionInvalid();
}

document.addEventListener('DOMContentLoaded', init, false);
