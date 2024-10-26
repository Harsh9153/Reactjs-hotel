import "./Sing.css"
import { Link } from "react-router-dom";


function Forget(){
    return(
        <>
        <section className="login">
            <div class="container-main">
                <form className="main-form" >
                    <p>Forget Password</p>
                    <input type="password" placeholder="Password" /><br />
                    <input type="password" placeholder="Confirm_Password" /><br />
                    <input type="button" value="Submit" /><br />
                </form>

              
            </div>
            </section>
        </>
    )
}
export default Forget;