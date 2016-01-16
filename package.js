Package.describe({
  name: 'cismous:react-bootstrap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'ReactBootstrap 0.28.2 using official React package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cismous/react-bootstrap.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use(['ecmascript']);
  api.addFiles('lib/react-bootstrap/react-bootstrap.min.js', 'client');
});
