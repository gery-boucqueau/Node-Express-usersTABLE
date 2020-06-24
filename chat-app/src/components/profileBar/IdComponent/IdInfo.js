import React from 'react';

const IdInfo = () => {
    const styles = {
        container: {
            background: '#FFF',
            width: '50%',
            height: '100%',
            borderRadius: '15px',

        }
    }
    
    return (
        <div style={styles.container}>
            <h3>André Family</h3>
            <p>Avenue des fleurs</p>
            <p>Paris FRANCE</p>
            <h3>0485/265.3263</h3>
        </div>
  );
}

export default IdInfo;