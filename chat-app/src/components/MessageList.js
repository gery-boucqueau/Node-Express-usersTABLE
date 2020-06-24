import React from 'react';

const MessageList = () => {
    const styles = {
        container: {
            height: '100vh',
            width: '100%',
            margin: '0px',
            overflowY: 'scroll',
            background: '#FFF',
        },
        chat: {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 5px 0 5px',
            fontSize: '0.8em',
        },
        p: {
            margin: '0 5px 0 0',
        }
    }
    
    return (
        <div style={styles.container}>
            HELLO
        </div>
  );
}

export default MessageList;
