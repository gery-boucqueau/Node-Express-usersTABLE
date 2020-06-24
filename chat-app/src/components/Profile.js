import React from 'react';
import Identity from './profileBar/Identity';
import History from './profileBar/History';
import Appointment from './profileBar/Appointment';
import Posology from './profileBar/Posology';
import Notes from './profileBar/Notes';

const Profile = () => {
    const styles = {
        container: {
            background: '#F2F2F2',
            width: '35vw',
            height: '100vh',
        }
    }
    
    return (
        <div style={styles.container}>
            <Identity />
            <History />
            <Appointment />
            <Posology />
            <Notes />
        </div>
  );
}

export default Profile;
