import React from 'react'
import {Route, Switch} from "react-router-dom";

import  Explore from '../clubdashboard/Explore.view'



const Routes = () => {

    return(
        <Switch>
            <Route path='/explore' component={Explore} />



        </Switch>


    )


}