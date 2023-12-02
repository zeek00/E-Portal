import React from 'react'
import '../Dashboard.style.css'
import 'antd/dist/antd.css'
import './profile.style.css'
import dummyimg from '../../../assets/image-alignment-150x150.jpg'
import { Card, Col} from "antd";
import {TextField} from "@mui/material";
import { Input } from 'antd';


const { TextArea } = Input;




const Profile = () => {
    const [name, setName] = React.useState('....');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return(
        <div className='profile'>
            <div className="head">
                <h1 className="createEventHead">Club Profile</h1>
            </div>

            <div className="Imagecontent">

                <Card className='itemsCard' title="Photo" bordered={false}>

                    <div className="imgarea">
                        <img src={dummyimg} className='img' alt="upload an image"/>
                    </div>

                    <div className="uploadarea">
                        <h3> Choose an image from your computer</h3>
                        <p> Minimum Size 150x150</p>
                        <div className='actionBtn'>
                            <button className="browse"> Browse </button>
                            <button className="delete"> Delete </button>

                        </div>
                        <div className="clear"></div>



                    </div>


                </Card>
            </div>

            <div className="Infocontent">
                <Card className='itemsCard' title="Information" bordered={false}>

                    <div className="textinfo">
                        <div className="row1">
                            <h3>First Name</h3>
                            <Input className='textField' placeholder="..." />
                        </div>
                        <div className="row2">
                            <h3>Last Name</h3>
                        <Input className='textField' placeholder="..." />
                        </div>
                    </div><div className="textinfo">
                        <div className="row1">
                            <h3>User Name</h3>
                            <Input className='textField' placeholder="..." />

                        </div>
                        <div className="row2">
                            <h3>Native Language</h3>
                            <Input className='textField' placeholder="..." />

                        </div>
                    </div>

                    <div>
                        <h3>Bio</h3>
                        <TextArea rows={3} />
                        <button className='save'>Save</button>
                    </div>


                </Card>
            </div>

        </div>

    );

}

export default Profile;