/* useStateをimport↓ */
import React, { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";



const Login = () => {
  /* ↓state変数を定義 */
  const navigate = useNavigate()
  const [inputid, setId] = useState("");
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState(true)
  const [isChecked, setIsChecked] = useState(true)

  const handleBlur = (e) => {
    const pass = e.target.value
    if (!pass) {
      setPassError('required')
    } else if (pass.length < 4) {
      setPassError('パスワードは4文字以上です')
    } else {
      setPassError()
    }
  }
  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <h1>ログインページ</h1>
      <h1>研究協力承諾書</h1>
      <p><br/>
        １．私は上記の文書を読み、研究の目的、研究協力の方法、報酬、個人情報の扱い、倫理的配慮について理解しました。 
      </p>
      <li>

        <div class="input-group flex-nowrap">
          <input type="text" class="form-control" placeholder="UserId" aria-label="Username" aria-describedby="addon-wrapping" value={inputid}
          onChange={(event) => setId(event.target.value)}
          onBlur={handleBlur}/>
        </div>

        <div class="input-group flex-nowrap">
          <input  class="form-control"  aria-label="UserName" aria-describedby="addon-wrapping" type="number"
          name="pass"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value)
          }}
          onBlur={handleBlur}/>
        </div>
        {passError && <p>{passError}</p>}
        <div class="form-check">
          <input type="checkbox" name="agree" id="agreeCheck" onChange={() => toggleCheckbox()}
          />
          <label class="form-check-label" for="flexCheckDisabled">
            利用規約に同意します
          </label>
        </div>
        <button class="btn btn-primary" onClick={() => navigate('/test', { state: { test: inputid } })} disabled={passError || isChecked}>回答ページにうつる</button>
      </li>
      
    </>
  );
};



export default Login;
