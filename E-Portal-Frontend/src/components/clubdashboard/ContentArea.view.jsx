import React, {useEffect, useState} from 'react'
import 'antd/dist/antd.css'
import CreateEvent from './events/CreateEvent.view';
import MyEvent from './events/MyEvents.view';
import ClubMember from './club/ClubMember.view';
import Messages from './messages/Messages.view'
import Profile from './profile/Profile.view'




const ContentArea = (props) => {

    if(props.value == "CREATEEVENT"){

    return(
        <div className="contentArea">
            <CreateEvent/>
        </div>
    );
    }else if (props.value == "MYEVENT"){
        return(
            <div className="contentArea">
                <MyEvent/>
            </div>
        );
    } else if(props.value == "CLUBMEMBERS"){
        return(
            <div className="contentArea">
                <ClubMember/>
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
                <ClubMember/>
            </div>
        )
    }

}

export default ContentArea