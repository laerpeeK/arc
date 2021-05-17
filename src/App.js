import React,{Component} from 'react'
import {Route} from "react-router";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

class App extends Component {
    render() {
        return (
            <div>
                <Route path='/login' component={Login} />
                <Route path='/admin' component={Admin} />
                <Route path='/' component={Admin} />
            </div>
        )
    }
}

export default App;
