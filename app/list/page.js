import { connectDB } from "/util/database.js"
import ListItem from "./ListItem";

export const dynamic = "force-dynamic"; // static <=> dynamic 환경 변수 설정

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  result = result.map((e)=>{
    e._id = e._id.toString();
    return e;
  })

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}