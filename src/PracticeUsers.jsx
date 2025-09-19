import { use } from "react";
import PracticeUser from "./PracticeUser";

export default function PracticeUsers({ UsersPromise }) {
  const users = use(UsersPromise);
  console.log(users);
  return (
    <div className="card">
      <h3>Uses : {users.length}</h3>
      {users.map((user) => (
        <PracticeUser key={user.id} user={user}></PracticeUser>
      ))}
    </div>
  );
}
