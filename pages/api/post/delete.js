import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if(request.method === "DELETE") {
    try{
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").deleteOne({ _id :new ObjectId(request.body) });
      response.status(200).json();
    } catch(error){
      response.status(500).json(error);
    }
  }
}