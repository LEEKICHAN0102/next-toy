import { connectDB } from "/util/database.js"
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map((e,i)=> (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id}`} style={{textDecoration: "none"}}>
            <h4>{result[i].title}</h4>
          </Link>
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  )
}