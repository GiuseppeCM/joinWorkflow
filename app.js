var path = require('path');

var apos = require('apostrophe')({
  shortName: 'joinWorkflowflow',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-db': {
      uri: 'mongodb://localdocker:27018/joinWorkflow'
    },
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'apostrophe-workflow': {
      prefixes: {
        'it': '/it',
        'en': '/en'
      },
      locales: [{
        name: 'it',
        label: 'it',
      },
      {
        name: 'en',
        label: 'en',
      }
      ],
      defaultLocale: 'it',
      alias: 'workflow',
      excludeTypes: [
        'libro',
        'cd',
      ]
    },

    'biblioteche': { extend: 'apostrophe-pieces' },
    'cd': { extend: 'apostrophe-pieces' },
    'biblioteche-pages': { extend: 'apostrophe-pieces-pages', },
    'libri': { extend: 'apostrophe-pieces' },
    'libri-pages': { extend: 'apostrophe-pieces-pages', },

  }
});
