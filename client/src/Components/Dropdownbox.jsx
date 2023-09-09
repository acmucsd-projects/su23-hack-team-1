import { useState } from "react";
import Calendar from "react-calendar";

const create = () =>{
    const [name, setUserName] = useState('');
    const [selectitem, setSelectitem] = useState('');
    const [Amount, setAmount] = useState('');
    const [Fridge, setFridge] = useState('');
    const [date, setDate] = useState(new Date())

    return(
        <div className="create">
            <form>
                <lable>name</lable>
                <input 
                   type = "name"
                   required
                   value = {name}
                   onChange = {(e)=>setUserName(e.target.value)}
                />
                <label>Select Item Type</label>
                <select
                    value = {selectitem}
                    onChange = {(e)=> setSelectitem(e.target.value)}
                />
                    <option value = "meat">meat</option>
                    <option value = "poultry">poultry</option>
                    <option value = "vegetables">vegetables</option>
                    <option value = "fruit">fruit</option>
                <select
                    value = {Fridge}
                    onChange={(e)=> setFridge(e.target.value)}
                />
                
                <label>Store in Fridge ? </label>
                <select>
                     <option value = "Yes">Yes</option>
                     <option value = "No">No</option>
                     <option value = "Deep Fridge">Deep Fridge</option>
                 </select>
                 <label>Purchase date</label>
                     <div className="calendar-container">
                     <Calendar onChange={setDate} value={date}/> 
                     </div>
                 <div className="text-center">
                     Selected date: {date.toDateString()}
                     </div>
                 <label>expiry date</label>
                     <div className="calendar-container">
                     <Calendar onChange={setDate} value={date}/> 
                     </div>
                 <div className="text-center">
                     Selected date: {date.toDateString()}
                     </div>
     
                <label>Amount</label>
                <input
                     type= "Amount"
                     required
                     vaule = {Amount}
                     onChange ={(e)=>setAmount(e.target.value)}
                />
                
                        <label>
                            <p>Amount</p>
                        <input
                            value = {Amount}
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

                        <label className = "submit-button">
                            <input className = "submit-button-add-item" type="submit" />
                        </label>

                </div>
            </div>
        )
}

export default Dropdownbox;
