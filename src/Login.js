/* useStateをimport↓ */
import React, { useState } from 'react';
import {
  Link
  ,useNavigate
} from "react-router-dom";
const Login = () => {
  /* ↓state変数を定義 */
  const navigate = useNavigate()
  const [inputid, setId] = useState("");
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState('')

  const handleBlur = (e) => {
    const pass = e.target.value
    if (!pass) {
      setPassError('required')
    } else if (pass.length < 5) {
      setPassError('should longer than 5')
    } else {
      setPassError()
    }
  }
  return (
    <>
      <h1>ログインページ</h1>
      <h1>研究協力承諾書</h1>
      <p>宛先：大阪公立大学　大学院情報学研究科　基幹情報学専攻　准教授　岩村雅一<br/>
      １．私は上記の文書を読み、研究の目的、研究協力の方法、報酬、個人情報の扱い、倫理的配慮について理解しました。 
      </p>
      <li>
        <input
        value={inputid}
          onChange={(event) => setId(event.target.value)}
          onBlur={handleBlur}
        />
        <input
          type="number"
          name="pass"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value)
          }}
          onBlur={handleBlur}
        />
        <Link to="/mypage" state={{id: inputid}}>
          <h5>NextPage</h5>
        </Link>
        <button onClick={() => navigate('/mypage', { state: { test: inputid } })} disabled={passError}>画面遷移します！</button>
      </li>
      {passError && <p>{passError}</p>}
    </>
  );
};



export default Login;
