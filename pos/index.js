let table = document.querySelector('table tbody');
let newPhoneModal = document.querySelector('#newPhoneModal');
let editPhoneModal = document.querySelector('#editPhoneModal');
let phoneNameInput = document.querySelector('#phoneNameInput');
let phonePriceInput = document.querySelector('#phonePriceInput');
let phoneQtyInput = document.querySelector('#phoneQtyInput');
let phoneNameInputE = document.querySelector('#phoneNameInputE');
let phonePriceInputE = document.querySelector('#phonePriceInputE');
let phoneQtyInputE = document.querySelector('#phoneQtyInputE');
let phoneIndexToEdit = null;

const products = [
  { name: 'iPhone x', price: 400, qty: 3 },
  { name: 'iPhone 11', price: 500, qty: 3 },
  { name: 'iPhone 12', price: 600, qty: 4 },
  { name: 'iPhone 15', price: 700, qty: 5 },
  { name: 'Samsung', price: 800, qty: 3 },
];

const showProducts = () => {
  table.innerHTML = ''; // console.clear()
  products.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price} $</td>
            <td>${el.qty}</td>
            <td>
              <div class="d-flex gap-3">
                <button class="btn btn-danger" onclick="removePhone(${index})">
                  <i class="fa-solid fa-trash"></i>Remove
                </button>

                <button class="btn btn-warning" onclick="openEditModal(${index})">
                  <i class="fa-solid fa-pen-to-square"></i>Edit
                </button>
              </div>
            </td>
        </tr>
    `;
  });
};

showProducts();

const openModal = () => {
  newPhoneModal.style.display = 'flex';
};

const openEditModal = (index) => {
  editPhoneModal.style.display = 'flex';
  let phoneData = products[index];
  phoneNameInputE.value = phoneData.name;
  phonePriceInputE.value = phoneData.price;
  phoneQtyInputE.value = phoneData.qty;
  phoneIndexToEdit = index;
};

const closeModal = () => {
  newPhoneModal.style.display = 'none';
  editPhoneModal.style.display = 'none';
};

const addNewPhone = () => {
  // Object Collection
  let newPhone = {
    name: phoneNameInput.value,
    price: +phonePriceInput.value,
    qty: +phoneQtyInput.value,
  };
  // Push into Array
  phoneNameInput.value = '';
  phonePriceInput.value = '';
  phoneQtyInput.value = '';
  products.push(newPhone);
  showProducts();
  closeModal();
};

const removePhone = (index) => {
  let confirmDelete = confirm('Are you sure ?');
  if (confirmDelete) {
    products.splice(index, 1);
    showProducts();
  }
};

const updatePhoneData = () => {
  let newPhoneData = {
    name: phoneNameInputE.value,
    price: phonePriceInputE.value,
    qty: phoneQtyInputE.value,
  };
  products[phoneIndexToEdit] = newPhoneData;
  showProducts();
  closeModal();
};