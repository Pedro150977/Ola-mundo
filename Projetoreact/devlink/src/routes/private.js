import {useState, useEffect} from "react"
import {auth} from "../services/firebase"
import {onAuthStateChanged} from "firebase/auth"
import {Navigate} from "react-router-dom"

export default function Private({children}) {

    const [loading, setloading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {

        async function checklogin() {

            const unsub = onAuthStateChanged(auth, (user) => {

                if(user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email 
                    };

                    
                    localStorage.setItem("@detailUser", JSON.stringify(userData ))
                    setloading(false)
                    setSigned(true)

                }else {
                    setloading(false)
                    setSigned(false)
                }


            })
        }

        checklogin();

    }, [])

    if(loading) {
        return (
            <div>  <strong> CARREGANDO </strong> </div>
        )
    }

    if(!signed) {
        return <Navigate to="/log" />
    }
    
    return children
}