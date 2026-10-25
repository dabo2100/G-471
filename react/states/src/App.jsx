import { useRef, useState } from "react";

export default function App() {
  // useRef
  let nameInput = useRef();
  let priceInput = useRef();
  let qtyInput = useRef();

  const [products, setProucts] = useState([
    { name: "iPhone x", price: 500, qty: 3 },
    { name: "iPhone 12", price: 600, qty: 4 },
    { name: "iPhone 13", price: 700, qty: 7 },
  ]);

  const addNewPhone = () => {
    let newPhone = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value,
    };

    let copy = [...products];
    copy.push(newPhone);
    setProucts(copy);
  };

  const removePhone = (index) => {
    let copy = [...products];
    copy.splice(index, 1);
    setProucts(copy);
  };

  return (
    <div
      className="w-full h-dvh overflow-auto flex justify-center"
      data-theme="light"
    >
      <div className="container">
        <h1 className="bg-blue-400 py-4 text-center text-2xl">Our Products</h1>

        <button
          className="btn btn-primary my-3"
          onClick={() => document.getElementById("new_phone_modal").showModal()}
        >
          Add New Phone
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Phone Name</th>
              <th>Phone Price</th>
              <th>Phone Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.price} USD</td>
                  <td>{el.qty}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <button
                        className="btn btn-error"
                        onClick={() => removePhone(index)}
                      >
                        Remove
                      </button>
                      <button className="btn btn-warning">Edit</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <dialog id="new_phone_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Phone</h3>
            <div className="modal-action">
              <form method="dialog" className="flex flex-col gap-3 w-full">
                <input
                  type="text"
                  placeholder="Enter new phone name"
                  className="input w-full"
                  ref={nameInput}
                />
                <input
                  type="number"
                  placeholder="Enter new phone price"
                  className="input w-full"
                  ref={priceInput}
                />
                <input
                  type="number"
                  placeholder="Enter new phone qty"
                  className="input w-full"
                  ref={qtyInput}
                />
                <button className="btn btn-success" onClick={addNewPhone}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
