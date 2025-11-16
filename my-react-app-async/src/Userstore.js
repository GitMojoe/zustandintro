import { create } from "zustand";

export const useUserStore = create((set)=>({
    users: [],
    loading: false,
    error: null,
    fetchUser: async()=>{
        set({loading: true, erro:null});
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            
            set({user:data, loading:false});
        }catch(err){
            set({error: "Falied to load users", loading:false})
        }
    }



}));
