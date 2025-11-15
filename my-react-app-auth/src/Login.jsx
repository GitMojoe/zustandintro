import { useAuthStore } from "./store";

function Login(){
    const login = useAuthStore((state)=>state.login);
    return  <button onClick ={()=>login("Mojoe")}>
        Login
    </button>
}

export default Login;