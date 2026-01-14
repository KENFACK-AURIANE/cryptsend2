import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineFileText, AiOutlineSafety, AiOutlineTeam } from "react-icons/ai"
import {BiStats} from "react-icons/bi"
import{auth} from "../services/firebaseConfiguration"
import { signInWithEmailAndPassword } from "firebase/auth"
import "../styles/Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import logo from '../assets/Cryptsend CG W-03 1.png'

const Login =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
       
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("utilisateur connecté", userCredential);
            navigate("/dashboard", { replace: true });
        } catch (error) {
            console.error("erreur de connexion", error);
        }
    }
  return (
    <div className="login">
        {/* parti gauche */}
      <div className="LeftPart">
        <div className="firstPart">
            <div className="rectangle">
                <div className="circle"></div>
            </div>
        </div>
        <div className="middlePart">
            <div className="welcome">
                Welcome to the Cryptsend administration interface.
            </div>
            <div className="instruction">
                <div className="firstInstruction">
                    Welcome back! Please sign in with your administrator credentials to securely access the dashboard and manage yur ressources.
                </div>
                <div className="firstInstruction">
                    This is a secure admin area. All actions are monitored to protect system integrity.
                </div>
            </div>
        </div>
        <div className="lastPart">
            <div className="presentation">
                <div className="icons">
                    <AiOutlineTeam size={22} color="white"/>
                </div>
                <div className="description">
                    User Management
                </div>
            </div>
            <div className="presentation">
                <div className="icons">
                    <BiStats size={22} color="white"/>
                   
                </div>
                <div className="description">
                    Statistics
                </div>
            </div>
            <div className="presentation">
                <div className="icons">
                     <AiOutlineFileText size={22} color="white"/>    
                </div>
                <div className="description">
                    Logs
                </div>
            </div>
        </div>
        <div className="lastLpart">
            Copright@dexblockchain.2025
        </div>
      </div>

      <div className="RightPart">
        <div className="firstpart">
            <div className="image">
                <img src={logo}alt="" />
            </div>
            <div className="title">CryptSend</div>
            <div className="otherTitle">
                <div className="substitle">Admin Panel Access</div>
            <div className="lasttitle">Please enter your administrator credentials</div>
            </div>
           
        </div>
        <div className="middlepart">

            <div className="form">
                <div className="input">
                    <label >Email</label>
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <label >Password</label>
                    <div className="password">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="visibilite" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiOutlineEyeInvisible  size={20}/> : <AiOutlineEye  size={20}/> }</div>    
                    </div>
                </div>
                <div className='rememberme'>
                    <a href='#'>Forgot password?</a>
                </div>
            </div>
            <div className="button">
                <input type="button" value="Sign in to Admin Panel" onClick={handleLogin} />
            </div>
            
            
        </div>
        <div className="lastpart">
            <div className="security">
                <AiOutlineSafety size={26} color="white"/>
            </div>
            <div className="text"><span>Security Notice:</span> Welcome to the secure administrator area. All activities are monitored and logged to ensure transparency and protect system integrity.</div>
        </div>
      </div>
    </div>
  )
}

export default Login;