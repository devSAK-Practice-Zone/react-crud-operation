import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://642d2881bf8cbecdb4feac9c.mockapi.io/demoData")
      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://642d2881bf8cbecdb4feac9c.mockapi.io/demoData/${id}`)
      .then(() => {
        getData();
      });
  };

  const handleToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleToLocalStorage(eachData.id,eachData.name,eachData.email)}>
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger fill"
                      onClick={() => handleDelete(eachData.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
