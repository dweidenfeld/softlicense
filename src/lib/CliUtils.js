import minimist from 'minimist';

export function exit(retCode) {
  //noinspection JSUnresolvedVariable
  process.exit(retCode);
}

export function usage() {
  console.log(
    `softlicense-cli --action [action] --moduleName [moduleName]
         [action]
            "generate-privatekey"
            "generate-license"
                --privateKey [private key]
                --startDate [yyyy-mm-dd]
                --endDate [yyyy-mm-dd]
                --modules [moduleA,moduleB,moduleC]
                --domain '^((sub|www)\\.)?domain.com$' (regex)
            "crypt"
                --privateKey [private key]
                --input [string]
            "decrypt"
                --privateKey [private key]
                --license [license]
                --input [string]
            "check"
                --privateKey [private key]
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
