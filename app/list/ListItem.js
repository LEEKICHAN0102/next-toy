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
          <span onClick={(e)=>{
            fetch("/api/post/delete" , { method: "DELETE", body: result[i]._id }) // Object => | JSON.stringify() // print: JSON.parse()
            .then(()=>{
              e.target.parentElement.style.opacity = 0;
              setTimeout(()=> {
                e.target.parentElement.style.display ="none"
              } ,1000)
            })
          }}>❌</span>
          <p>{result[i].content}</p>
        </div>
      ))}
    </>
  )
}

// use dynamic Routes = URL parameter (request.query)
// use Query String = request.query | $REGEXP