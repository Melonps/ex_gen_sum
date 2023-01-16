import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import {
    collection,
    getDoc,
    doc
} from "firebase/firestore";
import "./App.css";
import { useLocation } from "react-router-dom";

import About from "./components/About"
import Question from "./components/Question"


const Mypage = () => {
  const [UserId, setUserId] = useState();
  const location = useLocation();
  console.log(location.state['id'])
  const id_for_db = (location.state['id']);
  const [ans, setans] = useState([])


  /* ↓state変数「user」を定義 */

  useEffect(() => {
        // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
        const read_data = async (value) => {
            const userdata = (collection(db, "users"));
            const usersDocRefId1 = doc(userdata, value);
            const usersDocId1 = await getDoc(usersDocRefId1);
            const usersDataId1 = usersDocId1.data();

            setUserId(usersDataId1.id);
        };
        read_data(id_for_db);
    }, []);
  
  
  const addans = (value) => {
    var newans = [...ans, value];
    setans(newans);
  };


  return (
    <div className="App">
      <h1>ユーザー{UserId}さん、ありがとうございます</h1>
      <ui>
        <About />
      </ui>
      
      <Question addans={addans} q_id={ 2 } />
      <Question addans={addans} q_id={ 4 } />
      <h1>{ans}</h1>
    </div>
  );
};
export default Mypage;