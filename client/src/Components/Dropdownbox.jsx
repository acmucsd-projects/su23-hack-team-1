import React from 'react';
import { useState } from "react";
import "./Dropdownbox.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';


function Dropdownbox(){
    const [name, setUserName] = useState('');
    const [selectitem, setSelectitem] = useState('');
    const [Amount, setAmount] = useState('');
    const [Fridge, setFridge] = useState('');
    const [purchaseDate, setPurchaseDate] = useState(null);
    const [expiryDate, setExpiryDate] = useState(null);
    const [checked, setChecked] = React.useState(false);
    
    const handlePurchaseDateChange = (date) => {
        setPurchaseDate(date);
    };

    const handleExpiryDateChange = (date) => {
        setExpiryDate(date);
    };

    const handleChange = () => {
        setChecked(!checked);
    };

        return(
            <div className="Add-Item-Container">
                <div className = "Add-Item-Form">
                    
                        <div className = "Item-div">
                        <label className = "Item">Item: </label>
                        
                        <input className = "name"
                            type = "text"
                            placeholder = "Name"
                            required
                            value = {name}
                            onChange = {(e)=>setUserName(e.target.value)}
                        />
                        </div>
                        
                        <div className = "form">
                        <label>
                            <p>Category</p>
                        <select
                            value = {selectitem}
                            onChange = {(e)=> setSelectitem(e.target.value)}
                        >
                            <option key="" value="">
                            Select Item
                            </option>
                            <option value = "Meat">meat</option>
                            <option value = "Poultry">poultry</option>
                            <option value = "Vegetables">vegetables</option>
                            <option value = "Fruit">fruit</option>
                        </select>
                        </label>

                        <label> 
                            <p>Location</p>
                        <select
                         value = {Fridge}
                         onChange={(e)=> setFridge(e.target.value)}
                         >
                            <option key="" value="">
                            Store in fridge?
                            </option>
                            <option value = "Yes">Yes</option>
                            <option value = "No">No</option>
                            <option value = "Deep Fridge">Deep Fridge</option> 
                        </select>
                        </label>
                        <div>
                        <label><p>Purchase Date:</p></label>
                        <DatePicker
                        selected={purchaseDate}
                        onChange={handlePurchaseDateChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="mm/dd/yyyy"
                        showYearDropdown // Enable year dropdown
                        scrollableYearDropdown // Allow scrolling through years
                        />
                    </div>
                    <div>
                        <label>
                            <p>Expiry Date:</p>
                        </label>
                        <DatePicker
                        selected={expiryDate}
                        onChange={handleExpiryDateChange}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="mm/dd/yyyy"
                        showYearDropdown // Enable year dropdown
                        scrollableYearDropdown // Allow scrolling through years
                        icon = {FaCalendarAlt}
                        />
                        

                    </div>
            
                        <label>
                            <p>Amount</p>
                        <input
                            vaule = {Amount}
                            onChange ={(e)=>setAmount(e.target.value)}
                            placeholder = "3 apples; 2 lb; etc."
                        />
                        </label>
                        </div>

                        <label className = "checkbox-component">
                    
                        <input className = "checkbox-input"
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        />
                        Choose given expiry date: 
                    </label>
 
                </div>
            </div>
        )
}

export default Dropdownbox;
