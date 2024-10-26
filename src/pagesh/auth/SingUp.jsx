import { Link } from "react-router-dom";
import "./Sing.css"
import Axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function SingUp() {
    let [user, setUser] = useState({});

    let changeInput = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    let submiData = async (e) => {
        e.preventDefault();
        try {
            let chekUser = await Axios.get("http://localhost:3000/hotelList?email="+user.email);
            if (chekUser.data.length === 0) {
                if (user.password === user.cpass) {
                    let resgisterUser = await Axios.post("http://localhost:3000/hotelList", user);
                    if (resgisterUser) {
                        toast.success("User registered successfully");
                    } else {
                        toast.error("User not registered");
                    }
                } else {
                    toast.error("Password & Confirm password do not match");
                }
            } else {
                toast.error("User is already registered!! Try a new email ID");
            }
        } catch (error) {
            toast.error("Invalid email or server error");
        }
    };

    return (
        <>
            <section className="login">
                <div className="container-main">
                    <form className="main-form" method="post" onSubmit={submiData}>
                        <p>SignUp</p>
                        <input type="text" placeholder="User_Name" name="username" onChange={changeInput} /><br />
                        <input type="email" placeholder="Email" name="email" onChange={changeInput} /><br />
                        <input type="password" placeholder="Password" name="password" onChange={changeInput} /><br />
                        <input type="password" placeholder="Confirm Password" name="cpass" onChange={changeInput} /><br />
                        <input type="submit" name="submit" value="Sign Up" /><br />
                        <Link to="/SingIn"><a style={{ fontSize: "18px" }}>Sign In</a></Link>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default SingUp