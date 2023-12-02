import {Grid, Paper, Avatar, Link, TextField, Autocomplet, Stack, Autocomplete, Button, MenuItem} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {makeStyles} from '@material-ui/styles';
import {Col, Divider, Form, Input, message, Row, Typography, Spin, Select} from "antd";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import Backdrop from '@mui/material/Backdrop';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import './signup.css'
import CircularProgress from '@mui/material/CircularProgress';

import HeaderView from "../Header/Header.view";
import {countryList, genderList} from "../../utils";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import FooterView from "../footer/Footer.view";
//import 'antd/dist/antd.css';

const {Title} = Typography
const {TextArea} = Input
const {Option} = Select

const SignupMemberView = (props) => {

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [severity, setSeverity] = useState('');
    const [msg, setMsg] = useState('');
    const [club, setClub] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [form] = Form.useForm()
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    function TransitionDown(props) {
        return <Slide {...props} direction="down" />;
    }
    const paperStyle = {
        padding: '30px 20px',
        width: '400px',
        margin: '20px auto',
    }

    const headerStyle = {
        margin: 0,
    }

    const colorDef = {
        color: '#fff'
    }

    const formMarg = {
        width: '350px',
        marginTop: 15,
        color: '#000',
    }

    const btnStyle = {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#f94144',

    }

    const avatarStyle = {
        backgroundColor: '#f94144'
    }


    const linkS = {
        textDecoration: 'none',
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

    const handleSubmit = (e) => {
        console.log(country, club, gender)
        if (password === cpassword) {
            const {cpassword, ...newe} = e
            const postBody = {
                ...newe,
                "userRole": "Member",
                "userStatus": "Active",
                "club": null,
                "gender": gender,
                "country": country,
                "state": "west",

            }
            console.log(postBody)
            props.signupCall(
                postBody,
                () => {
                    setSeverity('success')
                    setMsg('Successfully Signed up !')
                    setOpen(true);
                    setTimeout(()=>navigate('/signin'), 1000);

                },
                () => {
                    setSeverity('error')
                    setMsg('Something went wrong, Please try again')
                    setOpen(true);
                }
            );
        } else {
            setPasswordMatch(false);
        }

    }
    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div id="controls">
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={open}
                autoHideDuration={6000}
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
            <HeaderView/>
            <div className={classes.root}>
                <Grid>
                    <Paper id='paper' elevation={20} style={paperStyle}>

                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <AddCircleOutlineIcon/>
                            </Avatar>
                            <h2 style={headerStyle}> Sign Up </h2>
                            <Typography variant='caption'>
                                Please fill this form to create an account
                            </Typography>
                        </Grid>
                        <Spin spinning={false}>
                            <Form onFinish={handleSubmit} {...layout} form={form} layout="vertical">
                                <Form.Item
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a name!',
                                        },
                                    ]}>
                                    <TextField style={formMarg} id='firstName' fullWidth label='First Name'
                                               variant="standard"/>
                                </Form.Item>
                                <Form.Item
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a last name!',
                                        },
                                    ]}>
                                    <TextField style={formMarg} id='lastName' fullWidth label='Last Name'
                                               variant="standard"/>
                                </Form.Item>
                                <Form.Item
                                    name="preferredName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a Preferred Name!',
                                        },
                                    ]}>
                                    <TextField style={formMarg} id='preferredName' fullWidth
                                               label='Preferred Name/Nick-Name' variant="standard"/>
                                </Form.Item>
                                <Form.Item
                                    name="emailAddress"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter an email!',
                                        },
                                        {
                                            type: "email",
                                            message: 'Please enter a valid email!',
                                        }
                                    ]}>
                                    <TextField style={formMarg} id='emailAddress' fullWidth label='Email Address'
                                               variant="standard"/>
                                </Form.Item>
                                <Form.Item
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a Phone Number!',
                                        },


                                    ]}>
                                    <TextField style={formMarg} id='phoneNumber' type="number" fullWidth label='Mobile Number'
                                               variant="standard"/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a Password!',
                                        },
                                    ]}>
                                    <TextField style={formMarg} id='password' type='password' fullWidth label='Password'
                                               variant="standard" onChange={(e) => {
                                        setPasswordMatch(true)
                                        setPassword(e.target.value)
                                    }}/>

                                </Form.Item>
                                <Form.Item
                                    name="cpassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter a Password!',
                                        },
                                    ]}>
                                    <TextField style={formMarg} id='confirmPassword' type='password' fullWidth
                                               label='Confirm Password' variant="standard" onChange={(e) => {
                                        setPasswordMatch(true)
                                        setCpassword(e.target.value)
                                    }}/>
                                </Form.Item>
                                {passwordMatch ? <></> : <p style={{color: 'red'}}>Password dont Match !</p>}

                                <Form.Item
                                    name="club"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please choose a club!',
                                        },
                                    ]}>
                                    <Autocomplete
                                        options={['none']}
                                        onChange={(e) => {
                                            setClub(e.target.innerText)
                                        }}
                                        style={formMarg}
                                        disablePortal
                                        id="club"
                                        renderInput={(params) =>
                                            <TextField
                                                variant="standard"
                                                {...params} label="Choose Club"/>}
                                    />

                                </Form.Item>
                                <Form.Item
                                    name="gender"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please choose a Gender',
                                        },
                                    ]}>
                                    <Autocomplete
                                        options={genderList}
                                        style={formMarg}
                                        disablePortal
                                        onChange={(e) => {
                                            setGender(e.target.innerText)
                                        }}
                                        id="gender"
                                        renderInput={(params) =>
                                            <TextField
                                                variant="standard"
                                                {...params} label="Gender"/>}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="dateOfBirth"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter date of Birth',
                                        },

                                    ]}>
                                    <Stack noValidate spacing={3}>
                                        <TextField
                                            style={formMarg}
                                            variant="standard"
                                            id="dateOfBirth"
                                            label="Date of Birth"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Stack>
                                </Form.Item>
                                <Form.Item
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Choose a Country',
                                        },

                                    ]}>

                                    <Autocomplete
                                        style={formMarg}
                                        id="country"
                                        options={countryList}
                                        autoHighlight
                                        onChange={(e) => {
                                            setCountry(e.target.innerText)
                                        }}
                                        getOptionLabel={(option) => option.label}
                                        renderInput={(params) => (
                                            <TextField
                                                variant="standard"
                                                {...params}
                                                label="Choose a country"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                                }}

                                            />)}

                                    />
                                </Form.Item>
                                <Button disabled={!passwordMatch || props.pending} type='submit' fullWidth
                                        variant='contained' style={btnStyle}>Sign up</Button>

                                <Typography> Already have an account?
                                    <Link onClick={() => {
                                        navigate('/signin')
                                    }} style={linkS}>
                                        &nbsp;Sign in
                                    </Link>
                                </Typography>
                            </Form>
                            <Divider/>
                        </Spin>
                    </Paper>
                </Grid>
            </div>
            <FooterView/>
        </div>
    );

}

export default SignupMemberView;