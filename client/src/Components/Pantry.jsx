import React from 'react';
import { useState} from "react";
import "./ItemList.css";
import Navbar from "./navbar.jsx";
import Dropdownbox from "./add-item-box.jsx";
import Modal from 'react-modal';

function Pantry(){

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
            <tr>
              <td>Bread</td>
              <td>09/03/2023</td>
              <td>5 Days Left</td>
              <td>4</td>
              <td> </td>
              </tr>
          <tr>
            <td>Apples</td>
            <td>09/03/2023</td>
            <td>2 Days left</td>
            <td>3</td>
            <td> </td>
          </tr>
          <tr>
            <td>Carrots</td>
            <td>09/03/2023</td>
            <td>1 day left</td>
            <td>7</td>
            <td> </td>
          </tr>
          <tr>
            <td>Tomato Soup</td>
            <td>09/03/2023</td>
            <td>40 Days Left</td>
            <td>3 </td>
            <td> </td>
          </tr>
          <tr>
            <td>Honey</td>
            <td>09/03/2023</td>
            <td>100 Days Left</td>
            <td>1</td>
            <td> </td>
          </tr>
          <tr>
            <td>Potatoes</td>
            <td>09/03/2023</td>
            <td>20 Days Left</td>
            <td>1 </td>
            <td> </td>
          </tr>
          <tr>
            <td>Celery</td>
            <td>09/03/2023</td>
            <td>2 Days Left</td>
            <td>3</td>
            <td> </td>
          </tr> 
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


