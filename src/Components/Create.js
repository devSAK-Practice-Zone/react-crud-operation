import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://642d2881bf8cbecdb4feac9c.mockapi.io/demoData", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="col-6 container">
        <div className="d-flex justify-content-between">
          <h2>Create</h2>
          <Link to="/read">
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            onClick={handleSubmit}>
            Add <AddCircleOutlineIcon fontSize="small" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default Create;
