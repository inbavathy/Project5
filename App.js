import {useState} from 'react'
import'./App.css';
import About from'./compnents/About';
import Heading from'./components/Heading';
function App(){
    var a = "Hello world!"
    function abc(n){
        console.log(n)
    }
    var c="hagxhavx"
    const [name,setName]=useState("Inbavathy")
    return(
        <div>
            current name is: {name}</br>
            <button onClick={()=>setName("Jeni")}>click me to change name to Jeni</button>
        </div>
    );
    }
export default App;