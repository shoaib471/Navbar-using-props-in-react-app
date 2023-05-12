import React, {useState} from 'react'
import "./Signup.css"
function Signup() {
const [input,setInput]=useState({
	email:"" , fname:" ",pwd:""
});
let name,value;
const handleInputs=(e)=>{
name=e.target.name;
value=e.target.value
setInput({...input,[name]:value})
console.log(e);}
  return (
    <>
<main>
        <section class="section-login">
            <div class="section-main">
                <div class="section-login-1">
                    <div class="section-login-1-main">

                        <h1 class="section-login-1-title">Gradie</h1>
                        <p class="section-login-1-text">Beautiful gradients in seconds.</p>
                        <div class="section-login-1-img">
                        </div>
                        
                    </div>
                </div>
                <div class="section-login-2">
                    <div class="section-login-2-main">
                        
                        <h1 class="section-login-2-title">Login</h1>
                        <form class="section-login-2-form">
                            <div class="login-form-1">
                                <label>Email</label>
                                <input type="text" name="email" id="input-email" value={input.email} onChange={handleInputs} placeholder="john@example.com" required/>
                            </div>
                            <div class="login-form-2">
                                <label >Full Name</label>
                                <input type="text" name="fname" id="input-name" value={input.fname} onChange={handleInputs} placeholder="John Doe" required/>
                            </div>
                            <div class="login-form-3">
                                <label >Password</label>
                                <input type="password" name="pwd"  value={input.pwd} onChange={handleInputs}id="input-password" placeholder="At least 8 characters" required/>
                            </div>
                            <div class="login-form-4">
                                <input type="checkbox" id="input-checkbox"/>
                                <p>By creating an account, you agree to the <a href="#">Terms & Conditions.</a></p>
                            </div>
                            <div class="login-form-submit-btn">
                                <button>Create an Account</button>
                            </div>
                            <div class="login-form-5">
                                <p>Already have an account? <a href="#">Sign In</a></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
	</>
)}
export default Signup;
