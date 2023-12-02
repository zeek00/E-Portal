import React, {useState} from 'react'
import '../Dashboard.style.css'
import 'antd/dist/antd.css'
import { styled } from '@mui/material/styles';



const Messages = (props) => {


    return(
        <div className="MyEvents">
            <div className="head">
                <h1 className='createEventHead'>Messages</h1>
                <button className='sendMessage'>Send Message</button>
            </div>
            <div className="messageHead">
                <div className="user">
                    <h3>Member Name <i className="bi bi-arrow-down-up msgicon"></i></h3>
                </div>
                <div className="email">
                    <h3>Email address <i className="bi bi-arrow-down-up msgicon"></i></h3>
                </div>
                <div className="datesent">
                    <h3>Date Sent <i className="bi bi-arrow-down-up msgicon"></i></h3>
                </div>
                <div className="dateseen">
                    <h3>Date Seen <i className="bi bi-arrow-down-up msgicon"></i> </h3>
                </div>

            </div>
            <div className="messageBody">
                <div className="user">
                    <h4>dummy_one</h4>
                </div>
                <div className="email">
                    <h4>dummy@gmail.com</h4>
                </div>
                <div className="datesent">
                    <h4>April 09,2022 11:00 AM</h4>
                </div>
                <div className="dateseen">
                    <h4>April 09,2022 11:00 AM</h4>
                </div>

                <div className='reply'>
                    <i className="bi bi-reply-fill msgreply"></i>
                </div>
            </div>
            <div className="messageBody"></div>
            <div className="messageBody"></div>
            <div className="messageBody"></div>


        </div>
    );
}

export default Messages