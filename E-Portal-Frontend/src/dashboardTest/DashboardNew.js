import React , {useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Divider, Row, Col, Typography, Dropdown,PageHeader,Button, Tag, Spin ,Space} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    LogoutOutlined,
    LoadingOutlined,
    EditTwoTone,
    MailOutlined,
    PhoneOutlined,
    HomeOutlined
} from '@ant-design/icons';
import axios from 'axios';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes, Redirect,} from "react-router-dom";

import Sidebar from './sidebar';
import logo from '../assets/logouni.jpg';

import Dashboard from './DashboardContent';



const {Header, Sider, Footer, Content,} = Layout;
const {Title, Text, Paragraph} = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;

const DashboardNew = () => {


    const navigate = useNavigate();
    const [collapsed, setcollapsed] = useState(true);
    const [logoutloading, setLogoutLoading] = useState(false);

    const data = JSON.parse(localStorage.getItem('userData'))
    const toggle = () => {
        setcollapsed(!collapsed)
    };

    const Update = () => {
        console.log('in update');
        navigate('/student/settings')
    }

    const Logout = () => {
        setLogoutLoading(true)
        // axios.post("/user/logout").then((resp)=>{
        //     if(resp){setLogoutLoading(false)}
        //     localStorage.userLoggedIn = false;
        //     localStorage.userData = ''
        //     navigate('/student-signin')
        // })
    }

    const IconLink = ({ icon, text }) => (
        <a className="example-link">
            {icon}<text style={{marginLeft:'5px'}}>{text}</text>
        </a>
    );


    return (

            <Layout >
                <Sider  trigger={null} collapsible collapsed={collapsed} theme="dark">

                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        style:{color:'white',marginTop:'5px'},
                        onClick: toggle,
                    })}
                    {/*{collapsed ? null : <img src={logo} style={{width: '120px', margin: '20px 20px 20px 10px', background:'#1890ff'}} alt=''/>}*/}


                    <Divider style={{margin: '0px 10px 10px 20px', width: '80%', minWidth: '50%'}}/>
                    {collapsed ? null :
                        <Title level={4} style={{fontSize: '12pt', fontWeight: '900', margin: '10px 10px 10px 20px', color:'white'}}> Member
                            Dashboard</Title>}
                    <Sidebar/>

                </Sider>
                <Layout className="site-layout" style={{minHeight: '100vh'}}>

                    {/*<Header className="site-layout-background" style={{padding: 0, background:'#1890ff'}}>*/}
                    {/*    <Row style={{height: '80px'}}>*/}
                    {/*        <Col span={16} style={{textAlign:'center', marginLeft:'150px'}}>*/}
                    {/*            <text style={{color:'white', fontSize:'30pt', fontFamily:'Copperplate'}}>STUDENT MANAGEMENT SYSTEM</text>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Header>*/}


                    <PageHeader
                        title={'Hamza Raja'}
                        className="site-layout-background"
                        subTitle={'202120363'}
                        tags={<Tag color="#f94144">Online</Tag>}
                        extra={[

                            <Button className='custom' onClick={Update}><EditTwoTone twoToneColor="#f94144"/>  Update Contact</Button>,
                            <Button className='custom' onClick={Logout} disabled={logoutloading}>
                                <LogoutOutlined style={{ color:'#f94144'}}/>
                                Logout
                                <Spin spinning={logoutloading} indicator={antIcon}/>
                            </Button>,
                        ]}
                        avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                    >

                    </PageHeader>
                    <Dashboard/>
                    <Routes>
                         {/*<Route path="/clubdashboard/home" element={<Dashboard/>} />*/}
                        {/*<Route path="/student/profile" component={Profile} />*/}
                        {/*<Route path="/student/courselist" component={UserCourseslist} />*/}
                        {/*<Route path="/student/registeredcourses" component={RegCourseslist} />*/}
                        {/*<Route path="/student/result" component={Result} />*/}
                        {/*<Route path="/student/program" component={Program} />*/}
                        {/*<Route exact path="/student/settings" component={Settings} />*/}
                        {/*<Redirect to="/student/home" from="/" />*/}
                    </Routes>

                </Layout>

            </Layout>
    );


}

export default DashboardNew;
