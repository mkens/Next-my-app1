import React from 'react'
import {useRouter} from 'next/router'

export default function Post({postData}) {
const router = useRouter()
      if(router.isFallback){
        return <div>Loading Page</div>
      }

console.log(postData);
  return (
    <div>
        
           <h1>{postData.title}</h1>
           <h4>{postData.body}</h4>
           
      
    </div>
  )
}
export async function getStaticPaths(){
  const paths =["/posts/1","/posts/2"]
  return {paths,fallback:true}
}

export async function getStaticProps({query,params}){
  const {id} = query|| params;
  const res = await fetch(`${process.env.API_BASE_URL}/posts/`+ id);
  const postData = await res.json();

  return{
    props:{
      postData
    }
  }
}

// Post.getInitialProps =async({query})=>{
//     const {id} =query;
//     console.log(id);
//     return{id};

// }

// export async function getServerSideProps({query}){
//   const {id} =query;
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
//   const postData = await res.json();

//   return{
//     props:{
//       postData
//     }
//   }
// }