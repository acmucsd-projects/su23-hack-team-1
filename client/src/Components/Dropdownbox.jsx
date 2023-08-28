import {useState} from "react";
import Calendar from "react-calendar";

const Create = () =>{
    const [name, setUserName] = useState('');
    const [selectitem, setSelectitem] = useState('');
    const [Amount, setAmount] = useState('');
    const [Fridge, setFridge] = useState('');
    const [date, setDate] = useState(new Date())
    const handleSubmit = (e) => {
            e.preventDefalut();
        const item = {name, selectitem, Amount, Fridge, date};
    }


    return(
        <div className="create">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
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
                
                    
                
                 

        
            </form>

        </div>
    )
}
export default Dropdownbox;
