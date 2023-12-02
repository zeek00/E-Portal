import {makeStyles} from "@material-ui/styles";
import {IconButton} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import './Footer.styles.css'

const FooterStyles = makeStyles({
    footer:{
        width: '100%',
        backgroundColor: '#02325f',
        float: "left",
        height: '23vh',


    },

    appbarTitle:{
        color: '#fff',
        fontSize: '2.5rem',
        marginTop: '30px',
        fontWeight: '600',
    },

    h1span:{
        color: '#f94144',
    },

    links:{
        width: '8%',
        padding: '50px 5px 5px 50px',
        height: '22vh',
        float: 'left',
        marginLeft: '35px',
    },

    links2:{
        padding: '50px 5px 5px 50px',
        width: '10%',
        height: 'inherit',
        float: 'left',
        marginLeft: '120px'

    },

    linksSection:{
        display: 'block',
        width: '85%',
        height: '19.5vh',
        float: 'left',

    },

    wrap:{
        width: '15%',
        float: "left",



    },


    headfoot:{
        width: '30%',
        display: 'block',
        paddingTop: '20px',
        textAlign: "center",

    },

    contentfoot:{
        marginTop: '20px',
        display: 'block',
        width: '20%'
    },

    contentfootlink :{
        display:'inline',
        whiteSpace: 'nowrap',
        color: '#fff',
        textDecoration: 'none',
        float: 'left',
        padding: '0',
        fontSize: '1rem',
        marginLeft: '70px',

    },

    headfootlink:{
        display: 'inline-block',
        color: '#fff',
        float: 'left',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: '600',
        marginLeft: '70px',

    },

    logoAndGit:{
        display: 'block',
        width: '15%',
        float: 'right',
        paddingRight: '4vw',
        height: '19.5vh',

    },
    git:{
        color:'#fff',
        marginTop: '-10px'
    },

    clear:{
        clear: 'both',
    },

    copy:{
        display: 'block',
        width: '100%',
        margin: '10px auto',

    }






})
function MouseOver(event) {
    event.target.style.color = '#f94144';
}
function MouseOut(event){
    event.target.style.color="#fff";
}

function FooterView() {
    const classesFT = FooterStyles();
    return(
        <div id="rootF" className={classesFT.footer}>

            <div id="linksSection" className={classesFT.linksSection}>
                <div id="wrap" className={classesFT.wrap}>
                    <div id="linksF" className={classesFT.headfoot}>
                        <a id="headfootlink" className={classesFT.headfootlink} href="">SUPPORT</a> <br/>
                    </div>
                    <div id='contentlinks' className={classesFT.contentfoot}>
                        <a id="contentfoot" className={classesFT.contentfootlink} onMouseOver={MouseOver} onMouseOut={MouseOut}  href="">FAQ</a> <br/>
                        <a id="contentfoot" className={classesFT.contentfootlink} onMouseOver={MouseOver} onMouseOut={MouseOut}  href="">Contact</a> <br/>
                        <a id="contentfoot" className={classesFT.contentfootlink} onMouseOver={MouseOver} onMouseOut={MouseOut}  href="">About Us</a> <br/>
                    </div>

                </div>
                <div id="wrap1" className={classesFT.wrap}>
                    <input type="search" placeholder="Email address" id="searchbox"></input>
                    <button id="btnft">
                        <a href="" id="searchlink">Subscribe</a>
                    </button>
                </div>

            </div>
            <div id="logoAndGit" className={classesFT.logoAndGit}>
                <h1 id="appbarTitle" className={classesFT.appbarTitle}>
                    e<span className={classesFT.h1span}>Club</span>.
                </h1>
            </div>
            <div id='copy' className={classesFT.copy}>
                <h1 style={{fontSize:'0.8rem', fontWeight:'200', color:'#fff'}}>&copy; Caterpillars</h1>
            </div>
        </div>


);
}
export default FooterView;

