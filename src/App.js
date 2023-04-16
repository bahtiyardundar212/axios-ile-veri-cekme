import React, {useState, useEffect } from "react";
import axios from "axios";
import Post from "./compenenets/post";
import Todos from "./compenenets/todos";

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reqName, setReqName] = useState("users");
  const [showPost, setShowPost] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showUser, setShowUser] = useState(true);
 

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/" + reqName)
    .then(res => {
      setTimeout(() => {
        console.log("res", res.data)
        setUsers(res.data)
        setError(false)
      },2000);
    }).catch(error => {
      console.log("error", error);
      setError(true);
      setUsers([]);
    })
  },[loading]);

  //erken kaçış
  if (users === null) {
    return(
      <h1>loading...</h1>
    )
  }

  if (error === true) {
    return(
      <h1>hata</h1>
    )
  }


  return (
    <div>
      <button onClick={() => {
        setUsers(null)
        setLoading(!loading)
        setShowPost(false)
        setShowTodos(false)
        setShowUser(true)
      }}>get users</button>

      <button onClick={() => {
        setShowPost(true);
        setShowTodos(false)
        setShowUser(false)
      }}>get posts</button>

      <button onClick={() => {
        setShowTodos(true);
        setShowPost(false)
        setShowUser(false)
      }}>get todos</button>


    {showPost && <Post />}
    {showTodos && <Todos />}

      
      {
       showUser && (
          users.map((user,index) => {
            return(
              
              <div key={index}>
              <h1><u>users {user.id}</u></h1>

                <h3> {user.name} </h3>
                <h3> {user.username} </h3>
                <h3> {user.phone} </h3>
                <h3> {user.email} </h3>
                <h3> {user.address.suite} </h3>
              </div>
              
            )
          }))  
      }

    </div>
  );
}

export default App;
