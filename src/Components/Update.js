import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://642d2881bf8cbecdb4feac9c.mockapi.io/demoData/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <div className="col-6 container">
        <h2>Update</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
