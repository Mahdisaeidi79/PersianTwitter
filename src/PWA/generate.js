const workbox = require('workbox-build');

workbox.generateSW({
  cacheId:"index",
  globDirectory:"./",
  globPatterns:[
      "**/*.{css,js}"
  ],
  globIgnores:[
      "**/generate.js",
      "**/sw.js",
      "node_modules/**/*"
  ],
  swDest:"./src/PWA/sw.js",
  runtimeCaching:[
      {
          urlPattern:/\.(?:html|htm|xml)$/,
          handler:"StaleWhileRevalidate",
          options:{
              cacheName:"markup",
              expiration:{
                  maxAgeSeconds:1800
              }
          }
      },
      {
          urlPattern:/\.(?:png|jpg|svg)$/,
          handler:"StaleWhileRevalidate",
          options:{
              cacheName:"image",
              expiration:{
                  maxAgeSeconds:1800
              }
          }
      }
  ]

  
})