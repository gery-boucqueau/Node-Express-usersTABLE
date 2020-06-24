import React from 'react';

const Notes = () => {
    const styles = {
        container: {
            background: '#FFF',
            borderRadius: '15px',
            margin: '10px',
            height: '22vh',
            textAlign: 'left',
            paddingLeft: '4pt',
        }
    }
    
    return (
        <div style={styles.container}>
            Notes :
        </div>
  );
}

export default Notes;