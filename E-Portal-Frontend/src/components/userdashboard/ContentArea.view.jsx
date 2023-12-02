import React, {useEffect, useState} from 'react'
import 'antd/dist/antd.css'
import CreateEvent from './events/CreateEvent.view';
import MyEvent from './events/MyEvents.view';
import Messages from './messages/Messages.view';
import Profile from './profile/Profile.view';




const ContentArea = (props) => {

    if (props.value == "MYEVENT"){
        return(
            <div className="contentArea">
                <MyEvent/>
            </div>
        );
    } else if(props.value == "MESSAGES"){
        return(
            <div className="contentArea">
                <Messages/>
            </div>
        );

    } else if(props.value == "PROFILE"){
        return(
            <div className="contentArea">
                <Profile/>
            </div>
        );

    }
    else{
        return(
            <div className="contentArea">
                <CreateEvent/>
            </div>
        )
    }

}

export default ContentArea