import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Table.css';

let tableHeaders = ["Name of Group", "Category", ""];

const Table = () =>{ 
    const [Data, setData] = useState([["a","b","c"],["d","e","f"]]);
    useEffect(() => 
        {
            /**
             * async function fetchData(){
             *     let data = await loadData();
             *     //Update function to table here!
             *     setData(data);
             * }
             */
            /**
             * fetchData();
             */
        }, [Data]
    );

   // const entry = (color, content) => {
        ///
   //}
   return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((title, index) => (
              <th class="th-sm" scope="col" key={index}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="styled-table">
          {Data.map((e) => (
            <tr class="color">
              {e.map((e) => (
                <td class="color" scope="row">
                  <b>{e}</b>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default Table;
