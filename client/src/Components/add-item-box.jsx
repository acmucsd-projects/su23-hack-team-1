import React from "react";
import { useState } from "react";
import "./add-item-box.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
function Dropdownbox() {
  const url = "http://localhost:3001/Items";
  // const [name, setUserName] = useState("");
  // const [selectItem, setSelectitem] = useState("");
  // const [Amount, setAmount] = useState("");
  // const [Fridge, setFridge] = useState("");
  // const [purchaseDate, setPurchaseDate] = useState(null);
  // const [expiryDate, setExpiryDate] = useState(null);
  // const [checked, setChecked] = React.useState(false);

  const [values, setValues] = useState({
    name: '',
    itemType:'',
    amount:'',
    fridge:'',
    purchaseDate:'',
    expiryDate:'',
  })

  // const handlePurchaseDateChange = (date) => {
  //   setPurchaseDate(date);
  // };

  // const handleExpiryDateChange = (date) => {
  //   setExpiryDate(date);
  // };

  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url,values)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="Add-Item-Container">
      <div className="Add-Item-For">
        <form onSubmit={handleSubmit} className="Add-Item-Form">
          <div className="Item-div">
            <label className="Item">Item: </label>

            <input
              className="name"
              type="text"
              placeholder="Name"
              required
              onChange={e => setValues({...values, name: e.target.value})}
            />
          </div>

          <div className="labelled-form">
            <label>
              <p className="body">Category</p>
              <select
                onChange={e => setValues({...values, itemType: e.target.value})}
              >
                <option key="" value="">
                  Select Item
                </option>
                <option value="Protein">Protein</option>
                <option value="Dairy">Dairy</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
              </select>
            </label>

            <label>
              <p className="body">Location</p>
              <select
                onChange={e => setValues({...values, fridge: e.target.value})}
              >
                <option key="" value="">
                  Store in fridge?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Deep Fridge">Deep Fridge</option>
              </select>
            </label>

            <div>
              <label>
                <p className="body">Purchase Date:</p>
              </label>
              <DatePicker
                onChange={e => setValues({...values, purchaseDate: e.target.value})}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                showYearDropdown // Enable year dropdown
                scrollableYearDropdown // Allow scrolling through years
              />
            </div>

            <div>
              <label>
                <p className="body">Expiry Date:</p>
              </label>
              <DatePicker
                onChange={e => setValues({...values, expiryDate: e.target.value})}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                showYearDropdown // Enable year dropdown
                scrollableYearDropdown // Allow scrolling through years
              />
            </div>

            <label>
              <p className="body">Amount</p>
              <input
                onChange={e => setValues({...values, amount: e.target.value})}
                placeholder="3 apples; 2 lb; etc."
              />
            </label>
          </div>

          <label className="submit-button">
            <input
              className="submit-button-add-item ${checked ? 'pressed' : ''}"
              type="submit"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Dropdownbox;
