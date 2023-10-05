import React from 'react';
import { useState,useEffect} from "react";
import "./ItemList.css";
import Navbar from "./navbar.jsx";
import Dropdownbox from "./add-item-box.jsx";
import Modal from 'react-modal';
import axios from "axios";

function Pantry(){


  const[data,setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/Add")
    .then((res) => setData(res.data))
    .catch(err => console.log(err));
  }, [])
  function openModal(){
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  const [selectSort, setSelectSort] = useState('');
  const[modalIsOpen, setIsOpen] = useState(false);
    return(
        <body>
        <Navbar></Navbar>
        <div class="table-margins">
        <table class="fixed-size">
        <thead>
          <tr>
            <th><div>Name:</div></th>
            <th><div>Purchased:</div></th>
            <th><div>Expires:</div></th>
            <th><div>Amount:</div></th>
            <th><div class ="dropdown-container">
              <select class="dropdown"
                value = {selectSort}
                onChange = {(e)=> setSelectSort(e.target.value)}
              >
              <option key="" value="">Sort By</option>
              <option>Expiration Date</option>
              <option>Purchase Date</option>
              <option>Lexicographical</option>
              <option>Amount</option>

              </select>
            </div></th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((items,i) => (
            <tr key={i}>
              <td>{items.name}</td>
              <td>{items.itemType}</td>
              <td>{items.fridge}</td>
              <td>{items.amount}</td>
              <td> </td>
              </tr>
          ))
          }
          { <tr>
            <td>Apples</td>
            <td>09/03/2023</td>
            <td>2 days</td>
            <td>3 apples</td>
            <td> </td>
          </tr>
          <tr>
            <td>Carrots</td>
            <td>09/03/2023</td>
            <td>2 days</td>
            <td>3 lb</td>
            <td> </td>
          </tr>
          <tr>
            <td>Tomato Soup</td>
            <td>09/03/2023</td>
            <td>10/01/2024</td>
            <td>3 cans</td>
            <td> </td>
          </tr>
          <tr>
            <td>Honey</td>
            <td>09/03/2023</td>
            <td>10/01/2026</td>
            <td>1 bottle</td>
            <td> </td>
          </tr>
          <tr>
            <td>Potatoes</td>
            <td>09/03/2023</td>
            <td>10/01/2026</td>
            <td>1 bag</td>
            <td> </td>
          </tr>
          <tr>
            <td>Potatoes</td>
            <td>09/03/2023</td>
            <td>10/01/2026</td>
            <td>1 bag</td>
            <td> </td>
          </tr> }

          <tr class="last-row">
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td class="add-item-button-container">
              <button class="add-item-button" onClick={openModal}>+</button>
              <Modal
                className = "modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
              <Dropdownbox>
              </Dropdownbox>

              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      </body>
    )
}
export default Pantry;


