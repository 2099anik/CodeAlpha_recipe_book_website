"use client"
import { useState } from "react";
import "../style3.css";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [ingr, setIngr] = useState("");
  const [time, setTime] = useState("");
  const [cost, setCost] = useState("");

  const addProduct = async () => {
    console.log(name, ingr, time, cost);
    let result = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      body: JSON.stringify({ name, ingr, time, cost }),
    });
    result = await result.json();
    if (result.success) {
      alert("New recipe added");
    }
  };

  return (
    <div className="add-recipe-container">
      <h1>Add Recipe</h1>
      <div className="input-group">
        <label htmlFor="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          id="ingredients"
          value={ingr}
          onChange={(e) => setIngr(e.target.value)}
          placeholder="Enter ingredients"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="time">Prep Time:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter prep time"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="cost">Recipe Cost:</label>
        <input
          type="text"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Enter recipe cost"
          className="input"
        />
      </div>
      <button className="btn" onClick={addProduct}>
        Add Recipe
      </button>
      <Link href={"/"}>recipe list</Link>
      <style jsx>{`
        .add-recipe-container {
          max-width: 400px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          text-align: center;
        }

        .input-group {
          margin-bottom: 15px;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          margin-top: 5px;
        }

        .btn {
          background-color: #3498db;
          color: #fff;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
}
