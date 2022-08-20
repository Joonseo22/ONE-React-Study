import { useNull } from "../util/common"

export default function Register() {
    const onClickBtn = () => {
        if (!useNull([id, pw, name])) return alert('ERROR, Null')

    }

    return (
      <>
        <h1>Register Page</h1>
        <input placeholder="EMAIL"/>
        <br />
        <input placeholder="PW"/>
        <br />
        <input placeholder="PWC"/>
        <br />
        <input placeholder="NAME"/>
        <button>Register</button>
      </>
    )
}