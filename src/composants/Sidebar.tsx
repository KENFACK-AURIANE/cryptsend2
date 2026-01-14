import {AiOutlineBarChart, AiOutlineBulb,AiOutlineClose,AiOutlineFileText, AiOutlineHome, AiOutlineLineChart, AiOutlineLogout, AiOutlineRise, AiOutlineSafety, AiOutlineSearch, AiOutlineSwap, AiOutlineTeam, } from "react-icons/ai"
import { Link, useLocation} from "react-router-dom"
import "../styles/Sidebar.css"
import logo from '../assets/Cryptsend CG W-03 1.png'

interface SidebarProps{
    collapsed: boolean;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    onLogOut: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({collapsed, isOpen, setIsOpen, onLogOut}) => {
    const location = useLocation();

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="nomapp">
            <div className="logo"><img src={logo}alt="" /></div>
            <div className="description">
                <div className="nom">Cryptsend</div>
                <div className="panel"> Admin Panel</div>
            </div>
            <div className="suppmenu"><button className="icon-menu" onClick={() => setIsOpen(!isOpen)}><AiOutlineClose size={20} color="black"/></button></div>
      </div>
      <div className="redirections">
            <div className="liens">
                <div className="lien">
                    <Link to="home" className={`position ${
                        location.pathname === "/dashboard/home" ? "active" : ""
                    }`}>
                        <div className="icon"><AiOutlineHome size={20} color="black"/></div>
                        <div className="text">Dashboard</div>
                    </Link>
                </div>
                <div className="domaines">
                    <div className="title"> BUSINESS OPERATIONS</div>
                    <div className="lien">
                        <Link to="transactions" className={`position ${
                        location.pathname === "/dashboard/transactions" ? "active" : ""}`}>
                            <div className="icon"><AiOutlineSwap size={20} color="black"/></div>
                            <div className="text">Transactions</div>
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/dashboard" className={`position ${
                        location.pathname === "/dashboard" ? "active" : ""}`}>
                            <div className="icon"><AiOutlineTeam size={20} color="black"/></div>
                            <div className="text">Users</div>
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/dashboard">
                            <div className="icon"><AiOutlineSafety size={20} color="black"/></div>
                            <div className="text">Security</div>
                        </Link>
                    </div>
                </div>
                <div className="domaines">
                    <div className="title"> TECHNICAL OPERATIONS</div>
                    <div className="lien">
                        <Link to="logs" className={`position ${
                        location.pathname === "/dashboard/logs" ? "active" : ""}`}>
                            <div className="icon"><AiOutlineFileText size={20} color="black"/></div>
                            <div className="text">Logs</div>
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="monitoring" className={`position ${
                        location.pathname === "/dashboard/monitoring" ? "active" : ""}`}>
                            <div className="icon"><AiOutlineLineChart size={20} color="black"/></div>
                            <div className="text">Monotoring</div>
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/dashboard">
                            <div className="icon"><AiOutlineSearch size={20} color="black"/></div>
                            <div className="text">Audit</div>
                        </Link>
                    </div>
                </div>
                <div className="domaines">
                    <div className="title"> DATA & ANALITICS</div>
                    <div className="lien">
                        <Link to="/dashboard">
                            <div className="icon"><AiOutlineBarChart size={20} color="black"/></div>
                            <div className="text">Reports</div>
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/dashboard">
                            <div className="icon"><AiOutlineRise size={20} color="black"/></div>
                            <div className="text">Statistics</div>
                        </Link>
                    </div>
                    <div className="lien">
                        <Link to="/dashboard">
                            <div className="icon"><AiOutlineBulb size={20} color="black"/></div>
                            <div className="text">Insights</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="deconnexion">
                <div className="lien">
                    <Link to="/dashboard" onClick={onLogOut}>
                        <div className="icon"><AiOutlineLogout size={20} color="black"/></div>
                        <div className="text">Log Out</div>
                    </Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Sidebar