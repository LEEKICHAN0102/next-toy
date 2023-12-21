import { connectDB } from "@/util/database"

export default async function handler(request, response){
  if(request.method === "POST"){
    try{
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne(request.body);
      response.status(200).redirect("/list");
    } catch(error){
      response.status(500).json(error);
    }
  }
}