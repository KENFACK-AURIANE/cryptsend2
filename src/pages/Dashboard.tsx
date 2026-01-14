import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../composants/Sidebar";
import "../styles/Dashboard.css";
import Header from "../composants/Header";
import { useState } from "react";
import{auth} from "../services/firebaseConfiguration"
import { signOut } from "firebase/auth"
import { useBlockBackNavigation } from "../protection/useBlockBackNavigation";


const Dashboard = () => {

  
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useBlockBackNavigation();
  

  const handleLogout = async () => {
          try {
              await signOut(auth);
              navigate("/", {replace: true});
          } catch (error) {
              console.error("erreur de connexion", error);
          }
          
      }
  

  return (
    <div className="dashboards">
      {/* <Sidebar  collapsed={collapsed} /> */}
      <div className={`leftsideBar ${collapsed ? 'collapsed' : ''}`}>
        <Sidebar  collapsed={collapsed}  isOpen={isOpen} setIsOpen={setIsOpen} onLogOut={ handleLogout} />
      </div>
      <div className={`leftsideBarResp ${isOpen ? 'isOpen' : ''}`}>
        <Sidebar collapsed={collapsed} isOpen={isOpen} setIsOpen={setIsOpen} onLogOut={ handleLogout}/>
      </div>
      
      <div className="pages">
        <div className="Header">
          <Header userName="Kenfack Auriane" collapsed={collapsed} setCollapsed={setCollapsed} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        <div className="contents">
          <Outlet  />
        </div>
        
      </div>
     
       
    </div>
  )
}

export default Dashboard