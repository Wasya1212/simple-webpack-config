const path = require('path');

module.exports = {
  distDir: path.resolve(__dirname, '../dist'),
  srcDir: path.resolve(__dirname, '../src'),
  pagesDir: path.resolve(__dirname, '../src/pages'),
  scriptsDir: path.resolve(__dirname, '../src/scripts'),
  stylesDir: path.resolve(__dirname, '../src/styles/pages'),
  assetsDir: path.resolve(__dirname, '../src/assets'),
  pages: [
    {
      name: 'index',
      scripts: [
        'index',
        'main'
      ],
      styles: [
        'frontpage'
      ]
    },
    {
      name: 'about',
      scripts: [
        'about',
        'main'
      ],
      styles: [
        'about'
      ]
    },
    {
      name: 'services',
      scripts: [
        'services',
        'main'
      ],
      styles: [
        'services'
      ]
    },
    {
      name: 'products',
      scripts: [
        'products',
        'main'
      ],
      styles: [
        'products'
      ]
    },
    {
      name: 'learn',
      scripts: [
        'learn',
        'main'
      ],
      styles: [
        'learn'
      ]
    },
    {
      name: 'contacts',
      scripts: [
        'contacts',
        'main'
      ],
      styles: [
        'contacts'
      ]
    },
    {
      name: 'catalog',
      scripts: [
        'catalog',
        'main'
      ],
      styles: [
        'catalog'
      ]
    },
    {
      name: 'consultation',
      scripts: [
        'main'
      ],
      styles: [
        'docs'
      ]
    },
    {
      name: 'instalation',
      scripts: [
        'main'
      ],
      styles: [
        'docs'
      ]
    },
    {
      name: 'settings',
      scripts: [
        'main'
      ],
      styles: [
        'docs'
      ]
    },
    {
      name: 'accompaniment',
      scripts: [
        'main'
      ],
      styles: [
        'docs'
      ]
    },
    {
      name: 'fredo',
      scripts: [
        'main'
      ],
      styles: [
        'docs'
      ]
    }
  ]
}
