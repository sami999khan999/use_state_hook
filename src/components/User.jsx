import { useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  const handelAddUser = () => {
    const id = user.length;
    const number = Math.floor(Math.random() * 100 + 1);

    setUser([...user, { id: id, number: number }]);
  };

  return (
    <div>
      <button onClick={handelAddUser}>Add User</button>
      {user.map((singleUser) => (
        <h1 key={singleUser.id}>
          {singleUser.number}, {singleUser.id}
        </h1>
      ))}
    </div>
  );
};

export default User;
