// Adapted from https://github.com/jonasb/android-problem-matchers-action/blob/master/test.js.

const absoluteFilename = __filename;
const relativeFilename = absoluteFilename.replace(`${__dirname}/`, '');

// ng-lint matcher
console.log(`ERROR: ${absoluteFilename}:1:23 - file should end with a newline`);
console.log(`WARNING: ${absoluteFilename}:76:30 - DomPortalHost is deprecated: Use \`DomPortalOutlet\` instead.`);

// ng-cli matcher
console.log(`ERROR in ${absoluteFilename}:9:19 - error TS2305: Module '"../../../../common/common"' has no exported member 'ɵNgClassImpl'.`);
