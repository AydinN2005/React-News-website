import { BasicApi } from "./BasicApi";

export const GetleftsidebarData = (callback) =>{
   return BasicApi().get("/leftsidebar")
    .then((response)=>{
        const data = response.data;
        const bool = true;
        callback(bool , data);
        console.log(bool);
    }).catch((error)=>{
        const err= error.data;
        const bool = false;
        console.log(err +"this is a error response")
        callback(bool , err);
        console.log(bool)
    })
}