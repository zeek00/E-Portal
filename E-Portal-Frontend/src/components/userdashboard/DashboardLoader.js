import React, {useState} from 'react'
import SideBar from "./Sidebar.view";
import './Dashboard.style.css'
import NavBar from "./Navbar.view";
import ContentArea from "./ContentArea.view";








function UserDashLoader(){
    const [pageSelected, setPageSelected] = useState("");
    console.log("page is ",pageSelected);

    return (
        <div className="Load">
            <SideBar onSubmit={value => setPageSelected(value)}/>
            <NavBar/>
            <ContentArea value={pageSelected}/>
        </div>
    )
}

export default UserDashLoader;
