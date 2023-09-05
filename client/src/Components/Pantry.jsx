import React from 'react';
import "./ItemList.css";

function Pantry(){
    return(
        <body>
        <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Purchased:</th>
            <th>Expires:</th>
            <th>Amount:</th>
            <th><button class="sort-by">Sort By</button></th>
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