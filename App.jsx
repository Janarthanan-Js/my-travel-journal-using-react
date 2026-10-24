import { Header } from "./components/Header"
import { Entry } from "./components/Entry"
import data from "./data.js"
export function App(){
    const array=data.map((places)=>{
        return(
            <Entry
            key={places.id}
            {...places}
            />
            
            
        )
    })
    return(
        <>
        <Header
        img={
            {
                src:"/images/globe.png",
                alt:"Globe image"
            }
        }
        head="My travel journal."  
        />
        <main className="container">
            {array}

        </main>
        
        </>
        
    )

}
