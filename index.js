'use strict'

const axios = require('axios')

module.exports = class Amazon {
  constructor(apiKey) {
    this.productsOutputSchema = {
      list: {
        group: '.s-search-results [data-component-type=\'s-search-result\']',
        data: {
          name: {
            selector: 'h2:first-of-type a.a-link-normal',
            attr: '*text*',
            replacer: [
              {
                search: '\n',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          rating: {
            selector: '.a-icon-star-small',
            attr: '*text*',
            replacer: [
              {
                search: ' out of 5 stars',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          price: {
            selector: '.a-price:not(.a-text-price) .a-offscreen',
            attr: '*text*',
            modifier: [
              'totrimmed'
            ]
          },
          thumbnail: {
            selector: '.s-image',
            attr: 'src',
            modifier: [
              'totrimmed'
            ]
          },
          link: {
            selector: 'h2:first-of-type a.a-link-normal',
            attr: 'href',
            modifier: [
              'totrimmed'
            ]
          }
        }
      }
    }
    this.productDetailsSchema = {
      details: {
        group: 'html',
        data: {
          name: {
            selector: 'title',
            attr: '*text*',
            replacer: [
              {
                search: 'Amazon.com:',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          rating: {
            selector: '#centerCol #acrPopover',
            attr: 'title',
            modifier: [
              'totrimmed'
            ]
          },
          price: {
            selector: '#price_inside_buybox',
            attr: '*text*',
            replacer: [
              {
                search: '\n',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          thumbnail_base64: {
            selector: '#main-image-container img:first-child',
            attr: 'src',
            replacer: [
              {
                search: '\n',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          description: {
            selector: 'meta[name=\'description\']',
            attr: 'content',
            modifier: [
              'totrimmed'
            ]
          },
          long_description: {
            selector: '#productDescription p',
            attr: '*text*',
            replacer: [
              {
                search: '\n',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          attribute_names: {
            selector: '#productDetails_detailBullets_sections1 th',
            attr: '*text*',
            replacer: [
              {
                search: '\n',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          attribute_values: {
            selector: '#productDetails_detailBullets_sections1 td',
            attr: '*text*',
            replacer: [
              {
                search: '\n',
                replace: ''
              }
            ],
            modifier: [
              'totrimmed'
            ]
          },
          link: {
            selector: 'link[rel=\'canonical\']',
            attr: 'href',
            modifier: [
              'totrimmed'
            ]
          }
        }
      }
    }
    this.opts = {
      apikey: apiKey,
      jsrender: true,
      renderuntil: 'domloaded',
      headers: {
        'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
        'Referer': 'https://www.google.com'
      }
    }
  }

  getProducts(searchUrl) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'https://api.wintr.com/fetch',
        method: 'post',
        responseType: 'json',
        data: {...this.opts, ...{ url: searchUrl, outputschema: this.productsOutputSchema } }
      })
      .then((result) => {
        resolve(result.data.content.list)
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
          err = err.response.data.error.message
        }

        reject(err)
      })
    })
  }

  getProductDetails(productUrl) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'https://api.wintr.com/fetch',
        method: 'post',
        responseType: 'json',
        data: {...this.opts, ...{ url: productUrl, outputschema: this.productDetailsSchema } }
      })
      .then((result) => {
        resolve(result.data.content.details[0])
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
          err = err.response.data.error.message
        }

        reject(err)
      })
    })
  }
}