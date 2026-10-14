const phones = [
  { name: 'iPhone x', price: 400, img: 'https://m.media-amazon.com/images/I/51G4Jpqq46L._AC_SL1000_.jpg' },
  { name: 'iPhone 11', price: 500, img: 'https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg' },
  { name: 'iPhone 12', price: 600, img: 'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg' },
];

localStorage.setItem('phones', JSON.stringify(phones));
