const fs = require('fs');
const { ncp } = require('ncp');
const rimraf = require('rimraf');

function build() {
  clean();
  copySource( () => adjustPackageJson() );
}

function clean() {
  rimraf.sync('dist');
}

function copySource(next) {
  ncp('src', 'dist', () => {
    ncp('LICENSE', 'dist/LICENSE', () => {
      ncp('README.md', 'dist/README.md', () => {
        if (next) {
          next();
        }
      });
    });
  });
}

function adjustPackageJson() {
  const rawData = fs.readFileSync('package.json');
  const content = JSON.parse(rawData);

  content.schematics = './collection.json';
  content.optionalDependencies = undefined;
  content.devDependencies = undefined;
  const newJson = JSON.stringify(content, null, 2);
  fs.writeFileSync('dist/package.json', newJson);
}

build();
