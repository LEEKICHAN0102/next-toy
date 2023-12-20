import { connectDB } from "/util/database.js"


export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  console.log(result);

  return (
    <div className="list-bg">
      {result.map((e,i)=> (
        <div className="list-item">
          <h4>{result[i].title}</h4>
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  )
}