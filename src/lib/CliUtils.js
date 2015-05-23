import minimist from 'minimist';

export function exit(retCode) {
    //noinspection JSUnresolvedVariable
    process.exit(retCode);
}

export function usage() {
    console.log(
        `softlicense-cli --action [action] --moduleName [moduleName]
         [action]
            "generate"
                --startDate yyyy-mm-dd
                --endDate yyyy-mm-dd
                --modules moduleA,moduleB,moduleC
            "crypt"
                --input [string]
            "decrypt"
                --input [string]
                --privateKey [private key]
                --license [license]
            "check"
                --license [license]`);
}

export function getParams() {
    let args = minimist(process.argv.slice(2));

    if (!args.action) {
        usage();
        console.warn('specify action with "--action"');
        exit(1);
    }
    if (!args.moduleName) {
        usage();
        console.warn('specify moduleName with "--moduleName"');
        exit(2);
    }

    return args;
}