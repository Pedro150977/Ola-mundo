import "./login.css"
import {useState} from "react"
import {Logo} from "../../components/Logo"
import {auth} from "../../services/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        if(email === "" || password === "") {
            alert("Preencha todos os campos")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then (() =>{
            toast.success("Bem vindo de volta :)")
            navigate("/admin", {replace: true})
        })
        .catch(() => {
            toast.error("Erro ao tentar fazer o login")
        })
    }

    return(
        <div className="login-container">
            <Logo/>

            <form className="form" onSubmit={handleLogin}>
                <input type="email" 
                placeholder="Digite seu email..." 
                value={email} 
                onChange= { (event) => setEmail(event.target.value)}
                />

                <input type="password" 
                placeholder="********" 
                autoComplete="on" 
                className="senha"
                value={password}
                onChange = { (event) => setPassword (event.target.value)}
                />

                <button type='submit'>Acessar</button>
            </form>
        </div>
    )
}