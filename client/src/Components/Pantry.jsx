import React from 'react';
import "./ItemList.css";
import Navbar from "./navbar.jsx";

function Pantry(){
    return(
        <body>
        <Navbar></Navbar>
        <table>
        <thead>
          <tr>
            <th><div>Name:</div></th>
            <th><div>Purchased:</div></th>
            <th><div>Expires:</div></th>
            <th><div>Amount:</div></th>
            <th><div><button class="sort-by">Sort By</button></div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken Thigh</td>
            <td>09/03/2023</td>
            <td>2 days</td>
            <td>3 lb</td>
            <td> </td>
          </tr>
          <tr>
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
          <tr class="last-row">
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><button class="add-item-button">+</button></td>
          </tr>
        </tbody>
      </table>
      </body>
    )
}
export default Pantry;
