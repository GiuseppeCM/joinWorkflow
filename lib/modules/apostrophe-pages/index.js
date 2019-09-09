// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    }],
  park: [{
    title: 'Biblioteche',
    slug: '/biblioteche',
    type: 'biblioteche-page',
    label: 'Biblioteche',
    parkedId: 'biblioteche',
    published: true
  },
  {
    title: 'Libri',
    slug: '/libri',
    type: 'libri-page',
    label: 'Libri',
    parkedId: 'libri',
    published: true
  }]
};
