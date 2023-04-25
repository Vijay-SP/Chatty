import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            displayName,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input
                        style={{
                            width: '80%',
                            fontSize: '15px',
                            fontWeight: '550',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            borderRadius: '20px',
                            border: 'none',
                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                        }}
                        placeholder="Message..."
                        type="text"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <Button
                        style={{
                            width: '15%',
                            fontSize: '15px',
                            fontWeight: '550',
                            marginLeft: '5%',
                            backgroundColor: 'green',
                            color: 'white',
                            borderRadius: '20px',
                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                        }}
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SendMessage
