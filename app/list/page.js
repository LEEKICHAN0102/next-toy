import { connectDB } from "/util/database.js"
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map((e,i)=> (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id}`}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={`/edit/${result[i]._id}`}>⭐</Link>
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  )
}