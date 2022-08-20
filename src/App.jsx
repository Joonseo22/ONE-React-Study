import { useDebugValue } from "react"
import { useInput } from "./util/common"

function App() {
  const name = useInput('')
  const email = useInput('')
  const pw = useInput('')
  const pwc = useInput('')
  const pattern = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-_]+\.[a-zA-Z0-9._-]+/

  function register() {
    if (name.value&&pw.value&&pwc.value&&email.value) {
      if (pw.value != pwc.value) {
        window.alert('ERROR PW, PWC Not SAME')
      } else if (pattern.test(email.value) == false) {
        window.alert('ERROR, Email is Not @')
      } else {
        window.alert('Register Complete')
      }
    } else if (!name.value||!pw.value||!pwc.value||!email.value) {
        window.alert('ERROR NULL')
    }
  }
  
  return (
    <div>
      <h1>Register</h1>
      <>NAME: </>
      <input type="text" placeholder="Enter Ur Name" {...name}/>
      <br></br>
      <>EMAIL: </>
      <input type="email" placeholder="Enter Ur Email" {...email}/>
      <br></br>
      <>PW: </>
      <input type="password" placeholder="Enter Ur Pw" {...pw}/>
      <br></br>
      <>PWC: </>
      <input type="password" placeholder="Check Pw" {...pwc}/>
      <br />
      <button onClick={register}>Register</button>
    </div>
  )
}

export default App