import { TodoCreate } from "./TodoCreate"


export const Background = ()=>{
    return (
        <>
            <div className="fixed z-[2] w-full h-screen ">
                <div className="absolute w-full py-10 flex justify-center font-semibold text-xl  text-zinc-700">Todos</div>
                <h1 className="absolute text-[13vw] leading-none tracking-tight top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold">Todo.</h1>
                
            </div>
        </>
    )
}