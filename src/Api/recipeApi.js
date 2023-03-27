import axios from "axios";
import { getUserID } from "../Utils/getUserID";

const baseUrl = "http://localhost:8000/"

// Get All Recipe
export const getHomeData = async()=>{
try {
    const res = await axios.get(baseUrl)
    return res.data.allRecipes
} catch (error) {
    throw error;
}
}

// Get Ids of Saved Recipe
export const get_ids_of_savedData = async ()=>{
    const userId = getUserID();
    if(!userId) return null;

   
        try {
         const res = await axios.get(`${baseUrl}savedRecipe/${userId.toString()}`)
         return res.data.savedRecipeId

        } catch (error) {
          console.log(error)
        }
    

}

// Get Saved Recipe
export const getSavedRecipe = async ()=>{
    const userId = getUserID();
  
        try {
            const res = await axios.get(`${baseUrl}savedRecipe/user/${userId}`)
            return res.data.savedRecipe;
    
        } catch (error) {
            throw error;
        }
    }
    

// Save a recipe Put Method
export const saveRecipe = async(_id,cookies)=>{
     const userId = getUserID();

        try {
            const res = await axios.put(`${baseUrl}saveRecipe`,{
              userId:userId,
              recipeId:_id
            },{
                headers:{Authorization:cookies.access_token}
            })
      
            if (res.data.isSaved) return true;
      
          } catch (error) {
            alert(error.response.data.err)
           
          
          }
   
   
  } 


// Create recipe Post Method
  export const createRecipe = async(recipe,cookies,navigate)=>{
    const userId = getUserID();
    const {
        name,
        imgUrl,
        description,
        ingredients
      } = recipe

      try {
        const res = await axios.post(`${baseUrl}createRecipe`,{
        name,
        imgUrl,
        description,
        ingredients,
        userId : userId.toString()
      },{
        headers:{Authorization:cookies.access_token},
      })
  
      navigate("/")
      alert(res.data.message);
      
  
      } catch (error) {
        alert(error.response?.data?.err)
      } 
  }