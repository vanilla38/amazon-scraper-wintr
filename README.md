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

/*
PRINTS:
[
  {
    name: 'Google Fi SIM Card Kit',
    rating: '4.1',
    price: '$9.99',
    thumbnail: 'https://m.media-amazon.com/images/I/714KigtJjxL._AC_UY218_.jpg',
    link: '/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A051183338A4QJHBOHW80&url=%2FGoogle-Fi-SIM-Card-Kit%2Fdp%2FB07P5GP11P%2Fref%3Dsr_1_1_sspa%3Fdchild%3D1%26keywords%3Dphone%26qid%3D1619271937%26sr%3D8-1-spons%26psc%3D1&qualifier=1619271937&id=7748553396516962&widgetName=sp_atf'
  },
  {
    name: 'JUJ F8 Wireless Bluetooth Earbuds, Active Noise Cancelling Earphones with True Wireless,ANC in-Ear Earphones with Digital Charging Case for Running/Driving/Companion Etc. (Black)',
    rating: '4.3',
    price: '$88.50',
    thumbnail: 'https://m.media-amazon.com/images/I/61atCFd8tPL._AC_UY218_.jpg',
    link: '/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A06117281XYPUD784UY5K&url=%2FJUJ-F8-Bluetooth-Cancelling-Earphones%2Fdp%2FB08JG94Z1M%2Fref%3Dsr_1_2_sspa%3Fdchild%3D1%26keywords%3Dphone%26qid%3D1619271937%26sr%3D8-2-spons%26psc%3D1&qualifier=1619271937&id=7748553396516962&widgetName=sp_atf'
  },
  {
    name: 'Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 3/32GB | 48MP Camera | Silver',
    rating: '4.6',
    price: '$199.99',
    thumbnail: 'https://m.media-amazon.com/images/I/61jKxwxAZFL._AC_UY218_.jpg',
    link: '/Battery-Unlocked-Motorola-Camera-Silver/dp/B08NWDMR9N/ref=sr_1_3?dchild=1&keywords=phone&qid=1619271937&sr=8-3'
  },
  ...
]
*/
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
