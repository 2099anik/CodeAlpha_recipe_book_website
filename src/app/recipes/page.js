import DeleteRecipe from "@/lib/DeleteRecipe";
import "../style2.css"
import Link from 'next/link';

const getProducts=async()=>{
    let data = await fetch('http://localhost:3000/api/recipes',{cache:"no-cache"});
    data = await data.json();
    if(data.success){
    return data.result;
    }else{
        return {success:false}
    }
}


export default async function Page(){
    const products = await getProducts();
    console.log(products);
    return(
      <div className="recipe-container">
      {products.map((recipe) => (
        <div  className="recipe-item">
          <h3>{recipe.name}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingr}</p>
          <p><strong>time:</strong> {recipe.time}</p>
          <p><strong>cost:</strong> {recipe.cost}</p>
          <div className="button-container">
            <Link className="delete-btn" href={`/recipes/${recipe._id}`}>
              Edit
            </Link>
            <DeleteRecipe className="edit-btn" id={recipe._id}/>
              
            
          </div>
          
        </div>
      ))}
      </div>
    )
      }
    
