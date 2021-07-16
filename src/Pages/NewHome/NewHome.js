import React from 'react';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestions/Suggestions';
import './newHome.css';

const NewHome = () => {
    return (
        <div className='div-newHome'>
            <Feeds />
            <Suggestions />
        </div>
    )
}

export default NewHome;