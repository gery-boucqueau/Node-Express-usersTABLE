import React from 'react';
import ChatApp from './ChatApp';

const ChatComponent = () => {
    const styles = {
        container: {
            background: '#FFF',
            width: '65vw',
            height: '100vh',
        }
    }
    
    return (
        <div style={styles.container}>
            <ChatApp />
        </div>
  );
}

export default ChatComponent;