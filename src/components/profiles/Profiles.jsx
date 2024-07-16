import { useEffect, useState } from "react"
import { Card } from "./Card";

import './Profiles.css'
export const Profiles = ()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(response=> response.json())
        .then(result => setData(result.users));
    }, [])

    return(
        <main>
            <div className="card-container">
                {
                    data.map((profile)=>{
                        return (
                            <Card key={profile.id} user={profile}/>
                        )
                    })
                }
            </div>
        </main>
    )
}