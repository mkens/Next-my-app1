import React from 'react'
import Link from 'next/link'


export default function Posts({posts}) {
  

  return (
    <div>
    <h1>Posts</h1>
    <ul>
       
        {posts.length}
       {posts.map((post)=>{
        return(
            <li key={post.id}>
                <Link href="/posts/[id]" as={"/posts/"+post.id}>{post.title}</Link>
                </li>
        )
       })}
            </ul>
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch(`${process.env.API_BASE_URL}/posts/`);
  const posts = await res.json();

  return{
    props:{
      posts
    }
  }
}

// export async function getServerSideProps(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
//   const posts = await res.json();

//   return{
//     props:{
//       posts
//     }
//   }
// }      
       
