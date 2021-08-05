import React from 'react';
import {ReactComponent as User} from '../../assets/img/user.svg';
import { Button } from 'react-bootstrap';

const Profile = ({location:{state:{username,email,name}}}) => {
    return (
        <div style={{width: '80%', margin: '0 auto', display:'flex', flexDirection: 'row', marginTop: '25px'}}>
            <div style={{width: '40%'}}>
                <User style={{width: '150px', position: 'relative', left: '50%'}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{fontSize: '2.5rem'}}>{username}</div>
                <div style={{fontWeight: 'bold'}}>{name}</div>
                <div>{email}</div>
                <div>
                    <Button style={{width:'100px', height: '30px'}}/>
                </div>
            </div>
            
        </div>
    )

}

export default Profile;