import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Table.css';
import axios from 'axios';


let tableHeaders = ["Name of Group", "Category", ""];

const Table = () =>{ 
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:8000/find-specific-subject');
              setData(response.data);
              console.log(data)
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, []);


//   const fetchData = async () => {
//     try {
//         const response = await axios.get('http://localhost:8000/find-specific-subject');
//         setData(response.data);
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// };
// fetchData();
// var counter = 0;

  if (data.length === 0) {
    return;
  }

  return (
      <div className="table">
          <table>
              <thead>
                  <tr>
                      <th scope="col">Name of Group</th>
                      <th scope="col">Number of Users</th>
                      <th scope="col">Last Message Time</th>
                  </tr>
              </thead>
              <tbody className="styled-table">

                    {/* <tr key='0'>
                          <td>{data[0].name}</td>
                          <td>{data[0].numOfUsers}</td>
                          <td>{data[0].lastMessageTime}</td>
                    </tr> */}


                    {/* <tr key='1'>
                          <td>{data[1].name}</td>
                          <td>{data[1].numOfUsers}</td>
                          <td>{data[1].lastMessageTime}</td>
                    </tr>

                    <tr key='2'>
                          <td>{data[2].name}</td>
                          <td>{data[2].numOfUsers}</td>
                          <td>{data[2].lastMessageTime}</td>
                    </tr> */}

                  {data.map((row, index) => (
                      <tr key={index}>
                          <td>{row[index].name}</td>
                          <td>{row[index].numOfUsers}</td>
                          <td>{row[index].lastMessageTime}</td>
                      </tr> 
                  ))}

                      <tr key='1'>
                          <td>{data[0][1].name}</td>
                          <td>{data[0][1].numOfUsers}</td>
                          <td>{data[0][1].lastMessageTime}</td>
                      </tr>

                      <tr key='2'>
                          <td>{data[0][2].name}</td>
                          <td>{data[0][2].numOfUsers}</td>
                          <td>{data[0][2].lastMessageTime}</td>
                      </tr>

              </tbody>
          </table>


          
      </div>
  );
}

export default Table;
