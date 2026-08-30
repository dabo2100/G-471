const products = [
  { name: 'iPhone x', price: 400, qty: 5 },
  { name: 'iPhone 12', price: 500, qty: 3 },
  { name: 'iPhone 15', price: 1100, qty: 4 },
];

const showPhones = () => {
  console.clear();
  console.table(products);
};

const addNewPhone = () => {
  let newPhone = {
    name: prompt('Please Enter Phone Name'),
    price: +prompt('Please Enter Phone Price'),
    qty: +prompt('Please Enter Phone Qty'),
  };
  products.push(newPhone);
  showPhones();
};

const editPhoneName = () => {
  let phoneIndex = +prompt('Please Enter Phone Index you want to Edit');
  let newName = prompt('Please enter new Phone Name');
  products[phoneIndex].name = newName;
  showPhones();
};

const editPhonePrice = () => {
  let phoneIndex = +prompt('Please Enter Phone Index you want to Edit');
  let newPrice = +prompt('Please enter new Phone Price');
  products[phoneIndex].price = newPrice;
  showPhones();
};

const editPhoneQty = () => {
  let phoneIndex = +prompt('Please Enter Phone Index you want to Edit');
  let newQty = +prompt('Please enter new Phone Qty');
  products[phoneIndex].qty = newQty;
  showPhones();
};

const removePhone = () => {
  let phoneIndex = +prompt('Please enter Phone Index you want to delete');
  products.splice(phoneIndex, 1);
  showPhones();
  // products.splice(مكان القطع , عدد القطاعت)
};
