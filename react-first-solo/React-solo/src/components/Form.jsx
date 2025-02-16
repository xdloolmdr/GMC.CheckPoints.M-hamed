import { useState } from "react";
import UserCard from "./User_Card";

export default function UserForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  return (
    <>
      <div className="flex flex-row gap-84">
        <UserCard name={name} role={role} />
        <form className="User_Form">
          <label htmlFor="User-Name"></label>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value);
            }}
          />
          <label htmlFor="password"></label>
          <input type="password" placeholder="Password" />
          <select
            name="role"
            id=""
            value={role}
            onChange={(event) => {
              setRole(event.currentTarget.value);
            }}
          >
            <option value="" selected disabled>
              Select Role
            </option>
            <option value="Admin">Admin</option>
            <option value="Guest">Guest</option>
            <option value="Regular">Regular</option>
            <option value="Vip">Vip</option>
          </select>
        </form>
      </div>
    </>
  );
}
