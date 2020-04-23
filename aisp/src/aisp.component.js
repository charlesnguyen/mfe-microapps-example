import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AISP = props => {
  const user_token = useSelector(state => state.shell.token);
  return (
    <>
      {user_token ? 
      (<div style={{ padding: "10px 30px" }}>
        <label>Hello <b>{user_token}</b>! I'm from AISP</label>
        <div style={{ padding: "10px 30px" }}>
          <Link to="/add" className="btn btn-link">Add Account</Link>
          <Link to="/list" className="btn btn-link">Accounts</Link>
        </div>
      </div>) : 
      (<div> User not found</div>)}
    </>
  );
};

export default AISP;
