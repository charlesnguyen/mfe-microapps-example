import React, {useState, useEffect} from "react";


const AispList = props => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    fetch("https://api.openbankproject.com/obp/v4.0.0/banks")
    .then(res => res.json())
    .then(items => {
      setAccounts(items.banks);
    })
  },[]);

  return (
    <>
      <div style={{ padding: "10px 30px", height:"500px", overflow:"auto" }}>
        <ul>
        {accounts.map(account => (<li>{account.full_name}</li>))}
        </ul>
      </div>
    </>
  );
};

export default AispList;
