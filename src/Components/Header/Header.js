import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/img/instagram.svg';
import { ReactComponent as Home } from '../../assets/img/home.svg';
import { ReactComponent as Explore } from '../../assets/img/explore.svg';
import './header.css';

const Header = ({history, isLogged}) => {
    const handleClick = () => {
        history.push('/')
        isLogged(false)
    }

    return (
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/')}>
                    <Logo />
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                    <NavLink to='/'><Home className='div-svg' /></NavLink>
                    <NavLink to='/explore' ><Explore className='div-svg' /></NavLink>
                    <button className='button-header' onClick={handleClick}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);