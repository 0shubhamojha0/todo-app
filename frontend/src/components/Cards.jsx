import React from "react";
import {motion} from "framer-motion"

export const Cards = ({ todos, reference }) => {
    return (
        <>
            {todos?.map(function (todo) {
                return <div>
                <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 w-60 h-60 rounded-[50px] bg-zinc-900/90 px-8 py-8 overflow-hidden">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="silver" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>

                    <div className="text-lg font-semibold text-zinc-400 mt-3" >{todo.title}</div>
                    <p className="text-sm text-zinc-400 mt-3">{todo.description}</p>
                    <div className={`footer absolute w-full h-12 flex justify-center items-center text-white bottom-0 left-0 ${todo.completed == true ? "bg-green-600" : "bg-blue-600"}`}>
                        {todo.completed == true ? <button onClick={()=>{todo.completed = !todo.completed}}>Completed</button> : <button>Mark as completed</button>}
                    </div>
                </motion.div>
                </div>
            })}

        </>
    )
}



