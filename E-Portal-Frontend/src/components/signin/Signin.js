import React, {useState} from 'react'
import {Grid, Paper, Avatar, Typography, Link, TextField, Button,} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {makeStyles} from '@material-ui/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import HeaderView from "../Header/Header.view";
import {useNavigate} from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Slide from "@mui/material/Slide";
import FooterView from "../footer/Footer.view";

const Signin = (props) => {
    const [severity, setSeverity] = useState('');
    const [msg, setMsg] = useState('');
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const paperStyle = {
        padding: '30px 20px',
        width: '400px',
        minHeight: '60vh',
        margin: '20px auto',

    }

    const headerStyle = {
        margin: 0,

    }


    const formMarg = {
        marginTop: 15,
        color: '#f94144'


    }

    const btnStyle = {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#f94144',

    }

    const linkS = {
        textDecoration: 'none',
        color: '#f94144'
    }


    const avatarStyle = {
        backgroundColor: '#f94144'
    }


    const remember = {
        color: '#f94144'

    }


    const useStyles = makeStyles({
        root: {
            display: 'block',
        },

        colorDef: {
            color: '#fff',
        }

    })

    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postBody = {
            "emailAddress": e.target.emailAddress.value,
            "password": e.target.password.value,
            "role": "Member"
        }
        console.log(postBody)
        props.signinCall(postBody,
            () => {
                setSeverity('success')
                setMsg('Successfully Signed up !')
                setOpen(true);
                setTimeout(() => navigate('/user/clubdashboard'), 1000);
            },


            () => {
                setSeverity('error')
                setMsg('Something went wrong, Please try again')
                setOpen(true);
            });
    }

    return (
        <div id="control">
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={open}
                autoHideDuration={2000}
                TransitionComponent={TransitionDown}
                key={'centerSnack'}
                onClose={handleClose}
            >
                <Alert severity={severity} onClose={handleClose}>
                    {msg}
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={props.pending}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <HeaderView/> <br/>
            <div className={classes.root}>

                <Grid>
                    <Paper elevation={20} style={paperStyle}>

                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <LockIcon/>
                            </Avatar>
                            <h2 style={headerStyle}> Sign in </h2>
                            <Typography variant='caption'>
                                Use your eClub Account
                            </Typography>
                        </Grid>
                        <form onSubmit={handleSubmit}>
                            <TextField style={formMarg} id='emailAddress' fullWidth label='Email*'
                                       placeholder='Enter Email Address' variant="standard"/>
                            <TextField style={formMarg} id='password' fullWidth label='Password*' type='password'
                                       placeholder='Enter password' variant="standard"/>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        style={remember}
                                        name="gilad"
                                        color='primary'
                                    />
                                }
                                label="Remember me"
                            />

                            <Button type='submit' fullWidth variant='contained' style={btnStyle}>Sign in</Button>

                            <Typography>
                                <Link href='#' style={linkS}>
                                    Forgot password ?
                                </Link>
                            </Typography>

                            <Typography> Don't have an account?
                                <Link onClick={() => {
                                    navigate('/regas')
                                }} style={linkS}>
                                    &nbsp;Sign Up
                                </Link>
                            </Typography>


                        </form>

                    </Paper>
                </Grid>
            </div>
            <FooterView/>
        </div>
    );
}

export default Signin;