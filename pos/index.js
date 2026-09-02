const products = [
  { name: 'iPhone x', price: 400, qty: 3 },
  { name: 'iPhone 11', price: 500, qty: 3 },
  { name: 'iPhone 12', price: 600, qty: 4 },
  { name: 'iPhone 15', price: 700, qty: 5 },
  { name: 'Samsung', price: 800, qty: 3 },
];

let table = document.querySelector('table tbody');

const showProducts = () => {
  table.innerHTML = ''; // console.clear()
  products.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price} $</td>
            <td>${el.qty}</td>
        </tr>
    `;
  });
};
