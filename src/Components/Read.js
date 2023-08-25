import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {IconButton, Button} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
  }

  const handleToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="col-6 container">
        <div className="d-flex justify-content-between">
          <h2>Read Operation</h2>
          <Link to="/create">
            <Button variant="contained"><AddCircleOutlineIcon fontSize="small" /> New</Button>
          </Link>
        </div>
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
                        <IconButton
                          aria-label="edit"
                          color="success"
                          onClick={() =>
                            handleToLocalStorage(
                              eachData.id,
                              eachData.name,
                              eachData.email
                            )
                          }>
                          <EditIcon fontSize="inherit" />
                        </IconButton>
                      </Link>
                    </td>
                    <td>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDelete(eachData.id)}>
                        <DeleteOutlinedIcon fontSize="inherit" />
                      </IconButton>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
