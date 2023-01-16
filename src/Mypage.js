import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import "./App.css";
import { useLocation } from "react-router-dom";

import About from "./components/About"
import Addread from "./components/Addread"
import Read from "./components/Read"
import Question from "./components/Question"


const Mypage = (props) => {
  const [users, setUsers] = useState([]);

  const location = useLocation();
  console.log(location.state['test'])
  const id_for_q = Number(location.state['test']);


  /* ↓state変数「user」を定義 */

  useEffect(() => {
      const userdata = collection(db, "users")
      const q = query(userdata,  where("id", "==", id_for_q));
      getDocs(q).then((snapShot) => {
        setUsers(snapShot.docs.map((doc) => ({ ...doc.data() })));
        
      });
    
  }, []);
  
  function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
  }

  return (
    <div className="App">
      <ui>
        <About />
      </ui>
      

      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
      <img src="https://melonps.github.io/gen_sum_graph/sorce/ex_1/1.png" alt="ne"/>
    
      <audio controls autoPlay controlsList="nodownload"  id = "player" src="https://res.cloudinary.com/code-kitchen/video/upload/v1555038697/posts/zk5sldkxuebny7mwlhh3.mp3"></audio>
      <div className="btn" onClick={audio}>音がなるよ!!</div>
      <audio id="btn_audio">
          <source src="https://res.cloudinary.com/code-kitchen/video/upload/v1555038697/posts/zk5sldkxuebny7mwlhh3.mp3" type="audio/mp3"/>
      </audio>
      <div>
        {users.map((post) => (
          <div key={post.id}>
            <p>{post.password}</p>
          </div>
        ))}
        </div>
      <div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
        {JSON.stringify(location.state)}
      </div>
      <Addread id={"4"} />
      <Read />
      <Question array={[2, 1]} />
    </div>
  );
};
export default Mypage;