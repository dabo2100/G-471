const productsArea = document.querySelector('#productsArea');
const cartBody = document.querySelector('#cartBody');
const totalSpan = document.querySelector('#totalSpan');
const itemsCount = document.querySelector('#itemsCount');

const cart = [];

const phones = [
  { name: 'iPhone x', price: 400, img: 'https://m.media-amazon.com/images/I/51G4Jpqq46L._AC_SL1000_.jpg' }, //0
  { name: 'iPhone 11', price: 500, img: 'https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg' },
  { name: 'iPhone 12', price: 600, img: 'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg' },
  //   { name: 'iPhone 12', price: 600, img: 'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg' },
  //   { name: 'iPhone 12', price: 600, img: 'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg' },
];

const showPhones = () => {
  productsArea.innerHTML = '';

  phones.forEach((el, index) => {
    productsArea.innerHTML += `
        <div class="col-4">
            <div class="card py-3">
                <img src="${el.img}" style="height :300px; object-fit : contain" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${el.name}</h5>
                    <p class="card-text">price : ${el.price} USD</p>
                    <a data-bs-toggle="offcanvas" data-bs-target="#my-cart" aria-controls="my-cart" onclick="addToCart(${index})" href="#" class="btn btn-primary col-12">Add to cart</a>
                </div>
            </div>
        </div>
        `;
  });
};

showPhones();

const calcTotal = () => {
  let total = 0;
  cart.forEach((el, index) => {
    total += el.price * el.qty;
  });
  totalSpan.innerHTML = total;
};

const showCart = () => {
  cartBody.innerHTML = '';

  cart.forEach((el, index) => {
    cartBody.innerHTML += `
        <div class="col-12 d-flex align-items-center py-3 border-bottom">
            <img class="col-3" height="50" style="object-fit: contain;" src="${el.img}"/>
            <div class="col-9">
            <h3>${el.name}</h3>
            <div class="col-12 d-flex justify-content-between">
                <div class="d-flex align-items-center gap-2">
                <button onclick="decrementQty(${index})" class="btn btn-danger">-</button>
                <p class="mb-0">${el.qty}</p>
                <button onclick="incrementQty(${index})" class="btn btn-success">+</button>
                </div>
                <p>${el.price * el.qty} $</p>
            </div>
            </div>
        </div>
    `;
  });

  itemsCount.innerHTML = cart.length;

  calcTotal();
};

showCart();

const addToCart = (indexInProducts) => {
  // search functions -
  //   [10,20,30]
  // حط المنتج في الكارت
  // متحطش المنتج في الكارت لأنه بالفعل موجود ولكن زود الكمية واحد

  let product = phones[indexInProducts];

  let productIndexInCart = cart.findIndex((el, index) => {
    return el.name == product.name;
  });

  if (productIndexInCart == -1) {
    product.qty = 1;
    cart.push(product);
  } else {
    cart[productIndexInCart].qty++;
  }

  showCart();
};

const incrementQty = (index) => {
  cart[index].qty++;
  showCart();
};

const decrementQty = (index) => {
  let qty = cart[index].qty;
  if (qty == 1) {
    cart.splice(index, 1);
  } else {
    cart[index].qty--;
  }
  showCart();
};
