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

  const [formData, setFormData] = useState({
    name: '',
    specificSubject: ''
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    const sendData = async () => {
      try {
          axios.post('http://localhost:8000/create-study-space-for-single', formData);

      } catch (error) {
          console.log(error);
      }
    };
  sendData();
  };

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
                  {data.map((row) => (
                    row.map((column, index) => (
                      <tr key={index}>
                          <td ><a style={{textDecoration: "none"}} href ="http://localhost:3000/groups">&rarr;</a> {column.name}</td>
                          <td>{column.numOfUsers}</td>
                          <td>{column.lastMessageTime}</td>
                      </tr> 
                  ))))}

              </tbody>
          </table>


          <form>
            <label>
              Group Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Specific Subject:
              <input type="text" name="specificSubject" value={formData.specificSubject} onChange={handleInputChange} />
            </label>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>



      </div>
  );
}

export default Table;
