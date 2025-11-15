import { useAuthStore } from "./store";

function Profile(){
    const username = useAuthStore((state)=>state.username)
    return <h2>
        Welcome {username ? username : "Guest"}
    </h2>
}
export default Profile;