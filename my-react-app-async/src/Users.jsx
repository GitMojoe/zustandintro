import { useUserStore } from "./Userstore";
import { useEffect } from "react";

export default function Users() {
  const { users, loading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers(); // runs once when component loads
  }, []);

  if (loading) return <h3>Loading users...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
