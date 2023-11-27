"use client";

import { useRouter } from "next/navigation";

export default function DeleteRecipe(props) {
  const router = useRouter();
  console.log(props.id);

  const deleteRecord = async () => {
    try {
      let response = await fetch(`http://localhost:3000/api/recipes/${props.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete product. Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert("Recipe deleted");
        router.push("/recipes");
      } else {
        console.error("Product deletion failed:", result.error);
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  return <button onClick={deleteRecord}>Delete</button>;
}