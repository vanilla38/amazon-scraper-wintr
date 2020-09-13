# Amazon product scraper powered by WINTR API
> **Extract product data from Amazon search and product URLs**

### Get started

  - [Create an account](https://www.wintr.com/) on WINTR to get an API KEY
  - Visit your [WINTR account info dashboard](https://www.wintr.com/dashboard-account) and copy your API KEY

### Installation

```bash
$ npm install amazon-scraper-wintr
```

### Scrape products
```js
const Amazon = require('amazon-scraper-wintr')
const scraper = new Amazon('YOUR_WINTR_API_KEY')

scraper.getProducts('AMAZON_SEARCH_URL') // Example: https://www.amazon.com/s?k=phone
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})
```

### Scrape product details
```js
const Amazon = require('amazon-scraper-wintr')
const scraper = new Amazon('YOUR_WINTR_API_KEY')

scraper.getProductDetails('AMAZON_PRODUCT_URL') // Example: https://www.amazon.com/dp/B07ZDJCL76
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})
```