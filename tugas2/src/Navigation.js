import React from 'react';
import {Link} from 'react-router-dom';
class Navigation extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand">BMKG</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <Link to='/'>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    </Link>
                    <Link to='/Cuaca'>
                    <li class="nav-item">
                        <a class="nav-link" href="/cuaca">Cuaca Provinsi</a>
                    </li>
                    </Link>
                    <Link to='/Gempa'>
                    <li class="nav-item">
                        <a class="nav-link" href="/gempa">Gempa Bumi</a>
                    </li>
                    </Link>
                    <Link to='/Tsunami'>
                    <li class="nav-item">
                        <a class="nav-link" href="/tsunami">Tsunami</a>
                    </li>
                    </Link>     
                    </ul>
                 </div>  
            </nav>
        );
    }
}
export default Navigation;