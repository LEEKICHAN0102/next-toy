import { connectDB } from "@/util/database"

export default async function handler(request, response){
  if(request.method === "POST"){
    if(response.body.title === ""){
      return response.status(500).json("작성 되지 않음");
    } try{
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne(request.body);
      return response.status(200).redirect("/list");
    } catch(error){
      return response.status(500).json(error);
    }
  }
}