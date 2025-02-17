import axios from "axios";

const API_URL = "https://digiprofile-djh7gkgphhbgbmed.eastus-01.azurewebsites.net/api/getbusinesscard"

 export const fetchData = async () =>{
   try{
    const response = await axios.get(API_URL)
    
    return response.data
   }
   catch(error){
    console.log(error)
    return []
   }
 }