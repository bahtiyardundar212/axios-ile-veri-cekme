import axios from "axios";
import React, {useState, useEffect } from "react";

function Todos () {
    const [todos, setTodos] = useState(null);
    const [ptodos, setPtodos] = useState ("todos")
    const [showUsers, setShowUsers] = useState(false);
    const [error, setError] = useState(false);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/" + ptodos)
        .then(res => {
          setTimeout(() => {
            console.log("res", res.data)
            setTodos(res.data)
            setError(false)
          },2000);
        }).catch(error => {
          console.log("error", error);
          setTodos(true);
          setUsers([]);
        })

        // return (
        //   <button onClick={() => {
        //     setShowUsers(true);
        //     setLoading(!loading)
        //   }}></button>
        // )
    },[])
    
    if (todos === null) {
      return(
        <h1>loading...</h1>
      )
    }

    return (
        <div>
        {
        ptodos === "todos" && (
          todos.map((todos,index) => {
            return(
              <div key={index}>
                <h1><u>todos {todos.id}</u></h1>
                <h3>{todos.userId}</h3>
                <h3>{todos.id}</h3>
                <h3>{todos.title}</h3>
                <h3>{todos.completed}</h3>
              </div>
            )
          })
        )
      }
        </div>
    )
}

export default Todos;
