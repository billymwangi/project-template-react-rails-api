import React from "react";
import { TiDelete } from "react-icons/ti";
import {Link} from "react-router-dom"


function ExpenseItem({ name, cost, id, category, deleteExpense }) {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge rounded-pill bg-success mr-3">Ksh{cost}</span>
      </div>
      <button className="btn btn-link text-white" >
	  <Link to={`/edit-expense/${id}`}>Edit</Link></button>
      <button className="btn btn-primary">
        <TiDelete size="1.5em" onClick={() => deleteExpense(id)} />
      </button>
    </li>
  );
}

export default ExpenseItem;
