'use strict'

module.exports = {
  'service': {
    'id': 'indooroopilly',
    'name': 'Indooroopilly - Book Share',
    'port': 9090,
    'contextPath': '/indooroopilly-book-share',
    'modules': ['users', 'search', 'notification']
  },
  'settings':{
    'mongodbUrl':'mongodb://localhost:27017'
  },
  'data': {
    'url': 'https://ea0f0014-9e4e-408e-966b-b18875127c1b.mock.pstmn.io/'
  }
};
