import React from 'react';
import './App.css';
import ChatComponent from './components/ChatComponent';
import Profile from './components/Profile'

function App() {
  const styles = {
    container:{
      display: 'flex',
      width: '100vw',
      background: '#FFF',
    }
  }
  return (
    <div className="App" style={styles.container}>
        <ChatComponent />
        <Profile /> 
      
    </div>
  );
}

export default App;
