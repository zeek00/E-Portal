import React, {useState} from 'react'
import './member.style.css'
import 'antd/dist/antd.css'
import { styled } from '@mui/material/styles';



const ClubMember = (props) => {


    return(
        <div className="MyEvents">
            <div className="header">
                <h1 className='createEventHead'>Members</h1>
                <button className='contact'>Contact</button>
            </div>
            <div className="memberHead">
                <div className="users">
                    <h3>Member Name <i className="bi bi-arrow-down-up msgicon"></i></h3>
                </div>
                <div className="emails">
                    <h3>Email address <i className="bi bi-arrow-down-up msgicon"></i></h3>
                </div>
            </div>
            <div className="memberBody">
                <div className="users">
                    <h4>dummy_one</h4>
                </div>
                <div className="emails">
                    <h4>dummy@gmail.com</h4>
                </div>



            </div>
            <div className="messageBody"></div>
            <div className="messageBody"></div>
            <div className="messageBody"></div>


        </div>
    );
}

export default ClubMember