import React from "react";
import { useState } from "react";
import "./add-item-box.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
function Dropdownbox() {
  const url = "http://localhost:8000/Pantry";
  // const [name, setUserName] = useState("");
  // const [selectItem, setSelectitem] = useState("");
  // const [Amount, setAmount] = useState("");
  // const [Fridge, setFridge] = useState("");
  // const [purchaseDate, setPurchaseDate] = useState(null);
  // const [expiryDate, setExpiryDate] = useState(null);
  // const [checked, setChecked] = React.useState(false);
  const[startDate, setStartDate] = useState();
  const[endDate, setEndDate] = useState();
  const [values, setValues] = useState({
    name: '',
    itemType:'',
    amount:'',
    fridge:'',
    purchaseDate:startDate,
    expiryDate:endDate,
  })

  
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
                selected={startDate}
                onChange={startDate => setStartDate(startDate)}
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
                selected={endDate}
                onChange={(endDate) => setEndDate(endDate)}
                //onChange={e => setValues({...values, expiryDate: e.target.value})}
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
                placeholder="1,2,3..."
              />
            </label>
          </div>

          <label className="submit-button">
            <input
              className="submit-button-add-item"
              type="submit"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Dropdownbox;
