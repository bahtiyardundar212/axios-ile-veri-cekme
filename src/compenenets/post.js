import axios from "axios";
import React, {useState, useEffect } from "react";

function Post () {
    const [posts, setPosts] = useState(null);
    const [pdata, setPdata] = useState ("posts")
    const [error, setError] = useState(false);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/" + pdata)
        .then(res => {
          setTimeout(() => {
            console.log("res", res.data)
            setPosts(res.data)
            setError(false)
          },2000);
        }).catch(error => {
          console.log("error", error);
          setError(true);
          setPosts([]);
        })
    },[])

    if (posts === null) {
      return(
        <h1>loading...</h1>
      )
    }
    
    return (
        <div>

          {
            pdata === "posts" && (
            posts.map((post,index) => {
              return(
                

                <div key={index}>
                <h1><u>post numarası {post.id}</u></h1>

                  <h3>{post.userId}</h3>
                  <h3>{post.id}</h3>
                  <h3>{post.title}</h3>
                  <h3>{post.body}</h3>
                </div>
                
              )
            }))
          }
      </div>
    )
}

export default Post;
