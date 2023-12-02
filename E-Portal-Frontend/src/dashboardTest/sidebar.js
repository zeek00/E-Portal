import React, {useEffect, useState} from 'react';

import { Menu, Button, } from 'antd';
import {
    HomeOutlined,
    GlobalOutlined,
    SolutionOutlined,
    RadiusSettingOutlined,
    DiffOutlined

} from '@ant-design/icons';
import axios from 'axios';
import '../App.css'

import {useNavigate} from "react-router-dom";



const Sidebar = () => {
    const [Current, setCurrent] = useState("0");
    const [User, setUser] = useState("");
    const [Log, setLog] = useState(false);


    // useEffect(() => {
    //     let mounted = true
    //     axios.get("/user/").then(res => {
    //         if (mounted)
    //         {
    //             setUser(res.data.user);
    //             setLog(true);
    //
    //         }
    //     });
    //
    //     return function cleanup() {
    //         mounted = false
    //     }
    //
    // },[]);



    const navigate = useNavigate();



    const handleHomeClick = () => {
        navigate('/student/home');
    }

    const handleGlobalClick = () => {
        navigate('/student/courselist');
    }

    const handleAddClick = () => {
        navigate('/student/registeredcourses');
    }

    const handleResultClick = () => {

        navigate('/student/result');
    }


    const Login = () => {

        navigate('/student/signin');



    }

    const Logout = () => {
        // axios.post("user/logout").then((resp)=>{
        //     localStorage.adminLoggedIn = false;
        //     localStorage.userLoggedIn = false;
        //     history.push('/signin');
        // })
    }

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };



    return (
        <div>

            <Menu theme="dark"  onClick={handleClick} mode="inline" selectedKeys={[Current]}>
                <Menu.Item key="0" style={{backgroundColor:'#f94144'}} onClick={handleAddClick} icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="1" onClick={handleGlobalClick} icon={<GlobalOutlined />}>
                    All Events
                </Menu.Item>
                <Menu.Item key="3" onClick={handleResultClick} icon={<RadiusSettingOutlined />}>
                    Join Event
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Sidebar;