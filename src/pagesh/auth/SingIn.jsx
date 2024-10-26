import { Link } from "react-router-dom";
import "./Sing.css"
import { useState } from "react";
import  Axios  from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../redux/Actions/UserActions";

function SingIn() {

    let [login, setLogin] = useState({})
let dispatch=useDispatch()

    let changeInput = (e) => {
        let { name, value } = e.target
        setLogin({ ...login, [name]: value })
    }

    let submitData = async (e) => {
        e.preventDefault();

        let userData = await Axios.get("http://localhost:3000/hotelList?email="+login.email);
        if (userData.data.length == 1) {
            if (userData.data[0].password == login.password) {
                toast.success("You are login sucessfully")
                dispatch(setUserLogin(userData.data[0]))
                window.location="/"

                setLogin({})
            }
            else{
                toast.error("Invalid Password")
            }
        }
        else{
            toast.error("Invalid Email")
        }

    }

    return (
        <>
            <section className="login">
                <div class="container-main">
                    <form className="main-form" method="post" onSubmit={(e) => submitData(e)}>
                        <p>SingIn</p>
                        <input type="email" placeholder="Email" name="email" onChange={(e) => changeInput(e)} /><br />
                        <input type="password" placeholder="Password" name="password" onChange={(e) => changeInput(e)} /><br />
                        <input type="submit" name="submit" value="Sing_In" /><br />
                        <Link to="/Forget"><a style={{ fontSize: "18px" }}>Forget Password</a></Link>
                    </form>


                </div>
            </section>
            <ToastContainer />

        </>
    )
}
export default SingIn;