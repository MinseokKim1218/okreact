import axios from 'axios'
import React from "react"

const baseURL = "https://jsonplaceholder.typicode.com/postsh/3"



function Help()
{

  const [post, setPost] = React.useState({});


  React.useEffect(() => {
   async function doIt() {
    try {

    } catch (error)
    {

    }


    axios.get(baseURL).then((response) => {
      setPo
      st(response.data);
    });
  }
  doIt();
  }, []);


  return(
    <>
      <h1>Help</h1>
      <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>

    </>
  )
}

export default Help
