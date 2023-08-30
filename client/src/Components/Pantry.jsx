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
            <th><button class="sort-by">Sort By:</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dfgh</td>
            <td> gg</td>
            <td>g</td>
            <td> gg</td>
            <td> </td>
          </tr>
          <tr>
            <td>g</td>
            <td>  g</td>
            <td>g</td>
            <td> gg</td>
            <td> </td>
          </tr>
          <tr>
            <td>g</td>
            <td>  g</td>
            <td>g</td>
            <td> gg</td>
            <td> </td>
          </tr>
          <tr>
            <td>g</td>
            <td>  g</td>
            <td>g</td>
            <td> gg</td>
            <td> </td>
          </tr>
          <tr>
            <td>g</td>
            <td>  g</td>
            <td>g</td>
            <td> gg</td>
            <td> </td>
          </tr>
          <tr class="last-row">
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><div class="add-item-button"></div></td>
          </tr>
        </tbody>
      </table>
      </body>
    )
}

export default Pantry;