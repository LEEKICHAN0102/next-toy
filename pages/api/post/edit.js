import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response){
  if(request.method === "POST"){
    let edit = { title: request.body.title , content: request.body.content };
    try{
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").updateOne({_id : new ObjectId(request.body._id)} , {$set : edit});
      response.redirect(302, "/list");  // response.status(200).redirect("/list") 안댐;; next 문법에 이렇게 사용하라고 나옴 
      // API handler should not return a value, received object. 작동은 하는데 Error 나니까 위 방법대로 ㄱㄱ
    } catch(error){
      return response.status(500).json(error);
    }
  }
}