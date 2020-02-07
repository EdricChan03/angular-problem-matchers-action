function addMatcher(matcherPath) {
  if (typeof matcherPath === 'string') {
    console.log(`::add-matcher::${__dirname}/${matcherPath}`);
  }
}

const matchers = [
  '.github/matchers/tslint-matcher.json',
  '.github/matchers/tsc-matcher.json'
];

matchers.forEach(matcher => {
  addMatcher(matcher);
})
