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

/*
PRINTS:
{
  name: 'Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 3/32GB | 48MP Camera | Silver',
  rating: '4.6 out of 5 stars',
  price: '$199.99',
  thumbnail_base64: 'data:image/webp;base64,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',
  description: 'Buy Moto G Power | 2021 | 3-Day Battery | Unlocked | Made for US by Motorola | 3/32GB | 48MP Camera | Silver: Everything Else - Amazon.com ✓ FREE DELIVERY possible on eligible purchases',
  long_description: 'Want longer battery life and gorgeous photos? Get moto g power. With its 5000 mAh battery, you can go up to three days on a single charge. Enjoy that weekend getaway without ever worrying about recharging. moto g power packs a 48 MP triple camera system2, so you can capture stunning images in any light, everywhere you go. Want a better view on the move? Watch games, movies, and video chats come to life on an ultra-wide 6.6" screen. Want to lose that annoying lag? Get more done with a speedy processor. How about a phone that’s not afraid to get a little wet? No worries. Wanna capture more of life? You got it.',
  attribute_names: [
    'Package Dimensions',
    'Item Weight',
    'ASIN',
    'Item model number',
    'Customer Reviews',
    'Best Sellers Rank',
    'OS',
    'RAM',
    'Wireless communication technologies',
    'Connectivity technologies',
    'GPS',
    'Special Features',
    'Other display features',
    'Device interface - primary',
    'Other camera features',
    'Audio Jack',
    'Form Factor',
    'Colour',
    'Battery Power Rating',
    'Included Components',
    'Manufacturer',
    'Date First Available'
  ],
  attribute_values: [
    '7.01 x 3.58 x 1.65 inches',
    '12.6 ounces',
    'B08NWDMR9N',
    'XT2117',
    '4.6 out of 5 stars8,596 ratings4.6 out of 5 stars',
    '#786 in Electronics (See Top 100 in Electronics)#21 in Cell Phones',
    'Android 10.0',
    '4 GB',
    'Wi-Fi',
    'Bluetooth, Wi-Fi',
    'True',
    'Touchscreen, Bluetooth Enabled, Fast Charging Support, Unlocked, 3 day battery, Expandable Memory, Max Vision display, Octa Core Processor, Water Resistant, LED flash, Video Calling, Text/Messaging, No contract, Camera, 5000mAh battery, Fingerprint Sensor, LTE, Smartphone, Built-In GPS, Mobile Hotspot Capability',
    'Wireless',
    'Touchscreen',
    'Rear, Front',
    '3.5 mm',
    'Smartphone',
    '32GB',
    '5000',
    'Sim tool, 10W rapid charger, Phone - moto g power (2021), User guide',
    'Motorola',
    'January 8, 2021'
  ],
  link: 'https://www.amazon.com/Battery-Unlocked-Motorola-Camera-Silver/dp/B08NWDMR9N'
}
*/
```
