import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import {
  collection,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";
import "./App.css";

class About extends React.Component {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userdata = collection(db, "users")
    const q = query(userdata, orderBy("id"));
    getDocs(q).then((snapShot) => {
      // console.log(snapShot.docs);
      setUsers(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
}, []);
  
  render(){
    return(
      <div>
        <h1>About</h1>
        <h2>I am {this.props.name}</h2>
      </div>
    )
  }
};

export default App;