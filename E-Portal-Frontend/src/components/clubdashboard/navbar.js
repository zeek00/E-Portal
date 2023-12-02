import React, {useState} from "react";
import './Dashboard.style.css'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import avatarIcon from "../../assets/avatar-svgrepo-com.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import 'animate.css';




const SideBarItems = [
    {name: 'create event', to: '/createvents'},
    {name: 'my events', to: '/'},
    {name: 'club members', to: '/clubmembers'},
    {name: 'club profile', to: '/clubprofile'},
    {name: 'messages', to: '/messages'},

];

function MouseOver(event) {
    event.target.style.color = '#f94144';
}
function MouseOut(event){
    event.target.style.color="#222";
}

let changeIcon = function (icon){
    icon.classList.toggle('bi bi-toggle2-on')
}


const NavBar = (props) => {

    const [isActive, setIsActive] = useState(false)
    return(
        <div  className="navBar">


            <ArrowDropDownOutlinedIcon className="arrow"  onClick={e => setIsActive(!isActive)}/>
            <img className="avatar" src={avatarIcon} alt=""/>




            <a href="">
                <SettingsIcon onMouseOver={MouseOver} onMouseOut={MouseOut} className="set"/>

            </a>
            <a href="">
                <NotificationsNoneOutlinedIcon onMouseOver={MouseOver} onMouseOut={MouseOut} className="set"/>

            </a>
            <a href="" className="switch">
                <h6 className='userswitch'>to user</h6>
                <i className="bi bi-toggle2-off" onClick="changeIcon(this)"></i>

            </a>
            <input  type="text" placeholder="Search.."/>
            <a href="" >
                <SearchOutlinedIcon className="search"/>

            </a>

            <div className="dropdown animate__fadeInRight">
                {isActive &&(
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <a className='aH' href="">Edit Profile</a>
                        </div>
                        <div className="dropdown-item">
                            <a className='aH' href="">Activity</a>
                        </div>
                    </div>
                )}
            </div>











        </div>



    );
}

export default NavBar