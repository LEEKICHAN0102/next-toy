import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Write(){
  let session = await getServerSession(authOptions);
  return(
    <div className="p-20">
      <h4>글 작성</h4>
      {session ? 
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목" />
        <input name="content" placeholder="내용" />
        <button type="submit">작성</button>
      </form> : 
      <div>로그인 해야 작성이 가능합니다</div> 
      }
    </div>
  )
}