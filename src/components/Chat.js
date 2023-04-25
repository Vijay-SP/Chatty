import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import './../App.css';
import { transparent } from 'material-ui/styles/colors';

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <>
        <SignOut />
        <br /><br /><br /><br />
         <div className="messages-container">
                {messages.map(({ id, text, displayName, uid, photoURL }) => (
                    <div key={id} className={`message ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        <img style={{height:'100px', width:'100px', backgroundColor: 'transparent'}} className="message-photo" url={photoURL} />
                        <p className="message-user">{displayName}</p>
                        <p className="message-text">{text}</p>
                    </div>
                ))}
                <div ref={scroll} />
            </div>
            <SendMessage scroll={scroll} />
        </>
    )
}

export default Chat
