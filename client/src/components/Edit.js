import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ name: "", cost: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/expenses/${id}`)
      .then((response) => response.json())
      .then((expenses) => setExpenses(expenses));
  }, [id]);

  function handleSubmit(event) {
    console.log(formData);
    editExpense(setFormData({ name: "", cost: "" }));
    event.preventDefault();

    function editExpense() {
        axios.patch(`http://localhost:3000/expenses/${id}`, formData)
        .then((expenses) => setExpenses(expenses))
        .then(navigate("/expenses"));
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-black text-3xl font-semibold font-Monteserrat">
        Edit Expense
      </h1>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
          ></input>
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            onChange={handleChange}
            name="cost"
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={formData.cost}
          ></input>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default Edit;
