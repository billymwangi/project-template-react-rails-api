import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Edit from "./components/Edit";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


function App() {
 

  const [formData, setFormData] = useState({ name: "", cost: "" });
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/expenses")
      .then((response) => response.json())
      .then((expenses) => setExpenses(expenses));
  }, [formData]);

  function handleSubmit(event) {
    console.log(formData);
    addExpense(setFormData({ name: "", cost: "" }));
    event.preventDefault();

    function addExpense() {
      fetch("http://localhost:3000/expenses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }
  }
  function handleChange(event) {
    console.log(event.target.value);
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }
  const deleteExpense = (id) => {
    fetch(`http://localhost:3000/expenses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<RegisterForm />} />
        <Route
          path="/expenses"
          element={
            <div className="container">
              <h1 className="mt-3">My Budget Planner</h1>

              <div className="row mt-3">
                <div className="col-sm">
                  <Budget />
                </div>
                <div className="col-sm">
                  <Remaining />
                </div>
                <div className="col-sm">
                  <TotalExpenses />
                </div>
                <h3 className="mt-3">Add Expense</h3>
                <div className="mt-3">
                  <div className="col-sm">
                    <AddExpenseForm
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      formData={formData}
                    />
                  </div>
                </div>
              </div>
              <h3 className="mt-3">Expenses</h3>
              <div className="row mt-3">
                <div className="col-sm">
                  <ExpenseList
                    expenses={expenses}
                    deleteExpense={deleteExpense}
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className="col-sm">
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
    
        <Route path="/articles" element={<Articles />} />
        <Route path="/edit-expense/:id" element={<Edit />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
