import React, { useEffect, useState } from "react";
import './Dashboard.style.css'










const SideBar = (props) => {
    const [active, setActive] = useState("");
    const [name, setName] = useState("");


    const callCreateEvent = () => {
        setName("EXPLORE");
        setActive("true");
        submit();
    };

    const callMyEvents = () => {
        setName("MYEVENT");
        submit();
    };

    const callClubMembers = () => {
        setName("CLUBMEMBERS");
        submit();
    };

    const callMessages = () => {
        setName("MESSAGES");
        submit();
    };

    const callProfile = () => {
        setName("PROFILE");

        submit();
    };

    const submit = () => {
        props.onSubmit(name);
    }

    useEffect(() => {
        submit();
    },[name])

    return(

        <div className="sidebar">

            <div className="logo">
                <h1 className='appbarTitle'>
                    e<span className='h1span'>Club</span>.
                </h1>
            </div>

            <div className='main-menu'>
                <ul>

                    <li >
                        <a className='menu-item fixed' onClick={callCreateEvent}>
                            <div className="menuicon">
                                <i className="bi bi-globe2 Sideicons"></i>
                            </div>
                            <h3 className="Sidetext"  >Explore</h3>
                        </a>
                    </li>

                    <li>
                        <a className='menu-item' onClick={callMyEvents}>
                            <div className="menuicon">
                                <i className="bi bi-card-checklist Sideicons"></i>
                            </div>
                            <h3 className="Sidetext" >my events</h3>
                        </a>
                    </li>



                    <li>
                        <a className='menu-item' onClick={callProfile}>
                            <div className="menuicon ">
                                <i className="bi bi-person-bounding-box Sideicons"></i>
                            </div>
                            <h3 className="Sidetext" >profile</h3>
                        </a>
                    </li>

                    <li>
                        <a className='menu-item' onClick={callMessages}>
                            <div className="menuicon ">
                                <i className="bi bi-chat-dots Sideicons"></i>
                            </div>
                            <h3 className="Sidetext" >messages</h3>
                        </a>
                    </li>

                </ul>

                <a className='menu-item tools'>
                    <div className="navigates">
                        <div className="menuicon">
                            <i className="bi bi-question-circle Sideicons"></i>
                        </div>
                        <h3 className="Sidetext">support</h3>
                    </div>
                </a>

            </div>
        </div>


    );
}

export default SideBar