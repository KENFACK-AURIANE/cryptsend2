
import {BellOutlined } from "@ant-design/icons";
import "../styles/Header.css";
import {AiOutlineLayout, AiOutlineMenu, AiOutlineMinusSquare } from "react-icons/ai";


interface HeaderProps {
  userName: string;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ userName, collapsed, setCollapsed, isOpen, setIsOpen }) => {
  // Initiales du nom
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* bouton por l'overview */}
        {collapsed ? (
          <button className="icon-button" onClick={() => setCollapsed(!collapsed)}>
          <AiOutlineLayout />
        </button>
        ) : (<button className="icon-button" onClick={() => setCollapsed(!collapsed)}>
          <AiOutlineMinusSquare />
        </button>)}
        {/* bouton pour le menu */}
        {isOpen ? (<button className="icon-menu" onClick={() => setIsOpen(!isOpen)}><AiOutlineMenu /></button>) :(<button className="icon-menu" onClick={() => setIsOpen(!isOpen)}><AiOutlineMenu /></button>)
        }
        
        <div className="line"></div>
        <div className="title-block">
          <div className="title">Dashboard Overview</div>
          <div className="secondtitle">Dashboard</div>
          <div className="subtitle">
            overview
          </div>
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-button">
          <BellOutlined />
        </button>
        <div className="user-circle">{initials}</div>
      </div>
    </div>
  );
};

export default Header;