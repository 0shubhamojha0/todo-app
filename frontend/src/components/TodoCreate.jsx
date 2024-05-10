import { useState } from 'react'
import {motion} from "framer-motion"

export function TodoCreate(reference){


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
    <div className='relative w-60 h-60 rounded-[50px] bg-zinc-900/80 px-3 py-8 overflow-hidden'>
       <div>
       <input className='w-50 h-10 bg-zinc-400 placeholder:text-zinc-900 mt-3 ml-2 pl-2' id="title" type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> 
       </div>
    
        <div>
        <textarea className='w-50 h-20 bg-zinc-400 placeholder:text-zinc-900 pt-2 pl-2 ml-2 mt-3 resize-none' id="desc" type="text" placeholder="Description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></textarea> 
        </div>

        <div className='flex justify-center'>
        <button className='w-20 bg-green-500 font-semibold rounded-2xl m-3'  onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add todo</button>
        </div>
    </div>
    )
    // return <div>
    //     <input style={{
    //         padding : 10,
    //         margin : 10
    //     }} type="text" placeholder="title" /><br />
    //     <input style={{
    //         padding : 10,
    //         margin : 10
    //     }}  type="text" placeholder="description" /><br />
    //     <button style={{
    //         padding : 10,
    //         margin : 10
    //     }} >Add to do</button>
    // </div>
}