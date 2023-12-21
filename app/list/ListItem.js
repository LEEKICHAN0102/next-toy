"use client"
import Link from "next/link"

export default function ListItem({result}) {
  return(
    <>
      {result.map((e,i)=> (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id}`}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={`/edit/${result[i]._id}`}>🖊</Link>
          <span onClick={()=>{
            fetch("/api/post/delete" , { method: "DELETE", body: result[i]._id }) // Object => | JSON.stringify() // print: JSON.parse()
          }}>❌</span>
          <p>{result[i].content}</p>
        </div>
      ))}
    </>
  )
}