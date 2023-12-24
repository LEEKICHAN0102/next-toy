"use client"

import { useEffect, useState } from "react"

export default function Comment({_id}){
  const [comment, setComment ] =useState();
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(`/api/comment/list?id=${_id}`).then(r=>r.json())
    .then((result)=>{
      return setData(result);
    })
  },[])

  return(
    <div>
      <div>댓글 창</div>
      <input onChange={(e)=>{setComment(e.target.value)}}/>
      <button onClick={()=>{
        fetch("/api/comment/new" , {
          method: "POST", 
          body: JSON.stringify({ 
            comment,
            _id,
          }),
        })
      }}>등록</button>
      {
        data.map((e,i) => 
        <div key={i}>
          <p>{e.author} :  {e.content}</p>
        </div>
      )}
    </div>
  )
}