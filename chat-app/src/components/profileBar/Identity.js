import React from 'react';
import IdInfo from './IdComponent/IdInfo';
import IdPicture from './IdComponent/IdPicture';

const Identity = () => {
    const styles = {
        container: {
            background: '#F2F2F2',
            height: '30vh',
            display: 'flex',
            paddingTop: '20px',
        }
    }
    
    return (
        <div style={styles.container}>
            <IdInfo />
            <IdPicture />
        </div>
  );
}

export default Identity;