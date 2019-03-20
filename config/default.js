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
        'index'
      ],
      styles: [
        'frontpage'
      ]
    },
    {
      name: 'about',
      scripts: [
        'about'
      ],
      styles: [
        'about'
      ]
    },
    {
      name: 'services',
      scripts: [
        'services'
      ],
      styles: [
        'services'
      ]
    },
    {
      name: 'products',
      scripts: [
        'products'
      ],
      styles: [
        'products'
      ]
    },
    {
      name: 'learn',
      scripts: [
        'learn'
      ],
      styles: [
        'learn'
      ]
    }
  ]
}
