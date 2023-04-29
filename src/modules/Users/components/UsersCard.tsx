import React from "react";

import { Users } from "../../../interfaces/users";

const UsersCard = (
  users: Users,
) => {
  return (
    <>
      <div key={users._id}>
        <h5>
          {users.name}
        </h5>
        <p>
          {users.email}
        </p>
      </div>
    </>
  )
};

export default UsersCard;
