import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  let session = await getServerSession(request,response,authOptions);

  const db = (await connectDB).db("forum");
  const findId = await db.collection("post").findOne({ _id :new ObjectId(request.body) });

  if(request.method === "DELETE") {
    try{
      if(findId.author === session.user.email){
        const db = (await connectDB).db("forum");
        const result = await db.collection("post").deleteOne({ _id :new ObjectId(request.body) });
        response.status(200).json();
      }
    } catch(error){
      return response.status(500).json(error);
    }
  }
}