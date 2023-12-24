import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";


export default  async function handler(request,response){
  if(request.method === "POST"){
    const {name , email ,password} = request.body;
    if (!email || !password || !name) {
      return response.status(400).json({ error: "필수 정보를 모두 입력하세요." });
    }
    const db = (await connectDB).db("forum");

    const existingUser = await db.collection("user_cred").findOne({
      email: request.body.email,
    });

    if(existingUser){
      return response.status(400).json({ error: "이메일이 이미 사용 중입니다" });
    }

    let hash = await bcrypt.hash(request.body.password, 10);
    request.body.password = hash;

    const result = db.collection("user_cred").insertOne(request.body);
    response.status(200).json("가입 성공");
  }
}