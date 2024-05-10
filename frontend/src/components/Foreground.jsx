import { useRef } from "react"
import { Cards } from "./Cards"
import { TodoCreate } from "./TodoCreate"
import { Todos } from "./Todos"

export const Foreground = ({todos})=> {
    const ref = useRef()
    return (
            
            <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
                
                <TodoCreate reference={ref}/>
                <Cards todos={todos} reference={ref}/>
                
            </div>
        
    )
}