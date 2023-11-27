"use client"
import { useEffect, useState } from "react";
import "../../style3.css";
import Link from "next/link";

export default function Page(props) {
  const [name, setName] = useState("");
  const [ingr, setIngr] = useState("");
  const [time, setTime] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    console.log(props.params.editrecipe);
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    try {
      let productData = await fetch(
        "http://localhost:3000/api/recipes/" + props.params.editrecipe
      );
      productData = await productData.json();

      if (productData.success) {
        let result = productData.result;
        setName(result.name);
        setIngr(result.ingr);
        setTime(result.time);
        setCost(result.cost);
      } else {
        console.error(
          "Product data retrieval failed:",
          productData.error
        );
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const updateProduct = async () => {
    let data = await fetch(
      "http://localhost:3000/api/recipes/" + props.params.editrecipe,
      {
        method: "PUT",
        body: JSON.stringify({ name, ingr, time, cost }),
      }
    );
    data = await data.json();
    if (data.success) {
      alert("Recipe has been updated");
    }
  };

  return (
    <div className="update-recipe-container">
      <h1>Update Recipe</h1>
      <div className="input-group">
        <label htmlFor="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Edit recipe name"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="ingr">Ingredients:</label>
        <input
          type="text"
          id="ingr"
          value={ingr}
          onChange={(e) => setIngr(e.target.value)}
          placeholder="Edit ingredients"
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
          placeholder="Edit prep time"
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
          placeholder="Edit recipe cost"
          className="input"
        />
      </div>
      <button className="btn" onClick={updateProduct}>
        Update Recipe
      </button>
      <Link href={"/recipes"}>Go to Recipe List</Link>

      <style jsx>{`
        .update-recipe-container {
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

        a {
          display: block;
          margin-top: 15px;
          color: #3498db;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
