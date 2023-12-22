import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
  let session = await getServerSession(request, response, authOptions);
  
  if(session){
    request.body.author = session.user.email;
    console.log(request.body)
  }
  if(request.method === "POST"){
    try{
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne(request.body);
      response.status(200).redirect("/list");
    } catch(error){
      return response.status(500).json(error);
    }
  }
}