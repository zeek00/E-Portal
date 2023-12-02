import './RegisterasPage.style.css'
import {makeStyles} from "@material-ui/styles";
import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

import clubImg from "../signin/assets/regassignup.svg"
import memberImg from "../signin/assets/undraw_people_re_8spw.svg"




import FooterView from "../footer/Footer.view";
import {IconButton} from "@mui/material";
import HeaderView from "../Header/Header.view";



const RegAsStyles = makeStyles({
    root:{
        display: 'block',
    },

    container:{
        width: '100%',
        Height: '80vh',
    },

    getStart:{
        textDecoration:'none',
        color: '#fff',
        fontWeight:'600'
    },

    club:{
        width: '50%',
        border: '6px solid #f94144',
        backgroundColor: '#fff',
        float: 'left',
        height: '80vh',
    },

    clubH1:{
        color: '#f94144',
        fontSize: '2.5rem',
        marginTop: '70px',
        fontWeight: '600',

    },

    member:{
        width: '50%',
        backgroundColor: '#f94144',
        float: 'left',
        height: '80vh',
    },

    member1:{
        width: '50%',
        backgroundColor: '#fff',
        float: 'left',
        height: '80vh',
    },

    memberH1:{
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: '600'

    },
    member1H1:{
        color: '#f94144',
        fontSize: '2.5rem',
        fontWeight: '600'

    },


    btn: {
        display: 'block',
        margin: '20px auto',
        borderStyle: 'none',
        color: '#fff',
        fontSize: '1rem',
        fontFamily: 'Nunito',
        width: '150px',
        padding: '10px',
        borderRadius: '10px'
    },

    clubimg: {
        display: 'block',
        width: '30vw',
        margin: '0px auto',




    },

    clubimg2: {
        display: 'block',
        width: '30vw',
        margin: '0px auto',

    },


})

function MouseOver(event) {
    event.target.style.color = '#f94144';
}
function MouseOut(event){
    event.target.style.color="#fff";
}

function RegAs() {
    const classes = RegAsStyles();
    const navigate = useNavigate();

    return (
        <div id="controls">
            <HeaderView/> <br/>
            <div id='regas' className={classes.root}>

                <div id="container" className={classes.container}>

                    <div id="member1" className={classes.member1}>
                        <div id="memberblock">
                        <h1 id="member1H1" className={classes.member1H1}>Register as Club</h1>
                        <img src={clubImg} alt="" className={classes.clubimg2}/>

                        <div className={classes.btn}>
                            <IconButton style={{
                                margin: '0px auto',
                                backgroundColor: '#02325f',
                                borderStyle: 'none',
                                color: '#fff',
                                fontSize: '1rem',
                                fontFamily: 'Nunito',
                                width: '150px',
                                padding: '10px',
                                borderRadius: '10px'}}>
                                <a id='signUp' className={classes.getStart} href='' onClick={()=>{navigate('/adminsignup')}}>Sign Up</a>
                            </IconButton>
                        </div>

                    </div>
                    </div>
                    <div id="member" className={classes.member}>
                        <div id="memberblock">
                        <h1 id="memberH1" className={classes.memberH1}>Register as Member</h1>
                        <img src={memberImg} alt="" className={classes.clubimg2}/>

                        <div className={classes.btn}>
                            <IconButton style={{
                                margin: '0px auto',
                                backgroundColor: '#02325f',
                                borderStyle: 'none',
                                color: '#fff',
                                fontSize: '1rem',
                                fontFamily: 'Nunito',
                                width: '150px',
                                padding: '10px',
                                borderRadius: '10px'}}>
                                <a id='signUp' className={classes.getStart} href='' onClick={()=>{navigate('/membersignup')}}>Sign Up</a>
                            </IconButton>
                        </div>

                        </div></div>

                </div>
            </div>
             <FooterView />
        </div>
    );
}

export default RegAs;









