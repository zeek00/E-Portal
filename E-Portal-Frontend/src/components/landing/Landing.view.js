import './Landing.style.css'
import {makeStyles} from "@material-ui/styles";
import {AppBar, Collapse, IconButton, Toolbar} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import SortIcon from "@mui/icons-material/Sort";
import React, {useEffect, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import bannerimg from "../../assets/Mobile-login.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import FooterView from "../footer/Footer.view";
import HeaderView from "../Header/Header.view";
import { Link as Scroll } from 'react-scroll'




function myFunction() {
  const x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const HeaderTextStyles = makeStyles({

  container:{
    marginTop: '200px',
    display: 'block',
    textAlign: 'center',

  },


  goDown:{
    color: '#f94144',

  },

  title:{
    color: '#fff',
    fontSize: '2.6rem',
    fontWeight: '600',

  },

  icon:{
    color: '#fff',

  },
  h1span:{
    color: '#f94144',
  },
})
const SignupBannerStyles = makeStyles({
  rootSB:{
    display: 'block',
    backgroundColor: '#fff',
    height: '80vh',
  },
  imgPlace:{
    float: 'left',
    height: 'inherit',
    width: '48%'
  },
  buttonPlace:{
    float: 'right',
    height: 'inherit',
    width: '50%',
    backgroundColor: '#f94144',
  },
  banimg:{
    width: '400px',
    marginLeft: '170px',
    height: 'inherit',

  },
  buttonStyle:{
    float: 'right',
    marginRight:'90px',
    backgroundColor: '#485858',
    borderStyle: 'none',
    color: '#fff',
    fontFamily: 'Nunito',
    width: '150px',
    padding: '10px',
    borderRadius: '10px'

  },
  getStart:{
    textDecoration:'none',
    color: '#fff',
    fontWeight:'600'
  },

  calltoaction:{
    color: '#fff',
    fontSize: '3.5rem',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '80px'
  },
  pStyle:{
    color: '#fff',
    width: '600px',
    margin: '0px auto',
  }




})

function MouseOver(event) {
  event.target.style.color = '#f94144';
}
function MouseOut(event){
  event.target.style.color="#fff";
}

function LandingView() {

  const classesHT = HeaderTextStyles();
  const classesSB = SignupBannerStyles();


  const [checked,setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() =>{
    setChecked(true);
  },[]);
  return (
      <div>
        <div id='control'>
          <HeaderView/>
        <div id='rootHTs' className={classesHT.rootHT}>

          <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapsedHeight={50} >

            <div id='container' className={classesHT.container}>

              <h1 className={classesHT.title}>
                Welcome to <br /> e<span className={classesHT.h1span}>Club</span>.
              </h1>
              <Scroll to="getstarted" smooth={true}>
              <IconButton>
                <ExpandMoreIcon style={{fontSize: '3rem', marginTop: '-20px'}}className={classesHT.goDown} />
              </IconButton>
              </Scroll>
            </div>


          </Collapse>
        </div>
        </div>
        <div id='rootSB, getstarted' className={classesSB.rootSB}>
          <div id="imgPlace"  className={classesSB.imgPlace}>
            <img id='banimg' src={bannerimg} alt="" className={classesSB.banimg}/>
          </div>

          <div id="buttonPlace" className={classesSB.buttonPlace}>
            <h1 id='calltoaction' className={classesSB.calltoaction}> Create your community <i>or</i> find one. </h1>
            <p id="pStyle" className={classesSB.pStyle}> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

            </p>
            <IconButton id="getStarted" style={{
              margin: '20px auto',
              backgroundColor: '#02325f',
              borderStyle: 'none',
              color: '#fff',
              fontSize: '1rem',
              fontFamily: 'Nunito',
              width: '150px',
              padding: '10px',
              borderRadius: '10px'}}>
              <a id='getStarted' className={classesSB.getStart} onClick={()=>{navigate('/regas')}}>Get Started</a>
            </IconButton>
          </div>
        </div>
        <FooterView/>
      </div>


  );
}

export default LandingView;









