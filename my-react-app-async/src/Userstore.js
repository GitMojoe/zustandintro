import { create } from "zustand";

export const useUserStore = create((set)=>({
    users: [],
    loading: false,
    error: null,
    fetchUsers: async()=>{
        set({loading: true, error:null});
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            
            set({users:data, loading:false});
        }catch(err){
            set({error: "Failed to load users", loading:false})
        }
    }



}));
