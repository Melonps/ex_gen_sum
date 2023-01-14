import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import {
  collection,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userdata = collection(db, "users")
    const q = query(userdata, orderBy("id"));
    getDocs(q).then((snapShot) => {
      // console.log(snapShot.docs);
      setUsers(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>hi</h1>
        {users.map((post) => (
          <div key={post.id}>
            <p>{post.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;