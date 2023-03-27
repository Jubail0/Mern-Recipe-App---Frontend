import React from 'react';
import {useCookies} from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../Api/recipeApi';

const CreateRecipe = () => {
  const[cookies,_] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [recipe, setRecipe] = React.useState({
    name:"",
    imgUrl:"",
    description:"",
    ingredients:[],
  })
  

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]:value
    }))
  }


  const handleIngredientChange = (e,index)=>{
    const ingredients = [...recipe.ingredients];
    ingredients[index] = e.target.value;
    setRecipe({...recipe,ingredients})
    
  }

  const addIngredients = ()=>{
    const ingredients = [...recipe.ingredients,""]
    setRecipe({...recipe,ingredients})
   
  }

  const removeIngredient = (id) =>{
    let ingredients = [...recipe.ingredients];
    const ingre = ingredients[id];
    const ingreIndex = ingredients.indexOf(ingre)

    ingredients.splice(ingreIndex,1);
    setRecipe({...recipe,ingredients})
  }


 


  
  return (
    <div className='create_recipe_wrapper'>
      <h2 className='create-recipe-heading'>Create Your Recipe</h2>
        <div className='create-recipe-form'>
          <div className='fld'>
            <label htmlFor='recipeName'>Name:</label>
            <input id='recipeName' name="name" value={recipe.name} onChange={handleChange}  type="text" placeholder='Enter recipe name' required/>
          </div>
          <div className='fld'> 
            <label htmlFor='imageUrl'>Image Url:</label>
            <input id='imageUrl' name="imgUrl"  value={recipe.imgUrl} onChange={handleChange} type="text" placeholder='Paste a image url' required/>
          </div>
          <div className='fld'>
            <label htmlFor='description'>Description:</label>
          <textarea id='description' name="description" value={recipe.description} onChange={handleChange}  type="text" cols={30} placeholder='Write a short description for your recipe' required/>
          </div>

         
          </div>
          <div className= "fld ingredients-wrapper">
            <div className='ingredients-grp'>
              {recipe.ingredients && recipe.ingredients?.map((ingredient,index)=>(
              <span className='ingredient' key={index} >
              <input type="text" onChange={(e)=>handleIngredientChange(e,index)} value={ingredient}/>
               <button className='remove-btn' onClick={()=>removeIngredient(index)}><i className='fa fa-remove'></i></button>
              </span> 
               ))} 
            </div>
            <button onClick={addIngredients}  className='addIngredients-btn'>Add Ingredients</button>
          </div>

          <button className='upload-btn'onClick={()=>createRecipe(recipe,cookies,navigate)}>Upload Recipe</button>
       
         
    </div>
  )
}

export default CreateRecipe