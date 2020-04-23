import React from "react";
import { useSelector } from "react-redux";


const Pisp = props => {
  const user_token = useSelector(state => state.shell.token);
  return (
    <>
    {user_token ? 
      (<div style={{ padding: "10px 30px" }}>
          <label>Hello <b>{user_token}</b>! I'm from PISP</label>
       </div>) : 
      (<div> User not found</div>)}
    </>
  );
};

export default Pisp;
