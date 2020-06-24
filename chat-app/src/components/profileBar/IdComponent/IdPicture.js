import React from 'react';

const IdPicture = () => {
    const styles = {
        container: {
            background: '#F2F2F2',
            height: '100%',
            width: '50%',
            borderRadius: '15px',
        }
    }
    
    return (
        <div style={styles.container}>
            <img height="100%" borderRadius="50%" alt="profileImg" src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" />
        </div>
  );
}

export default IdPicture;