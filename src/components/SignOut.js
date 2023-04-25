import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'left', color: 'white', position: 'fixed', backgroundColor: 'red', borderRadius: 10, top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '10 ', fontWeight: '600', display: 'flex', alignItems: 'center' }} onClick={() => auth.signOut()}>
                <ExitToAppIcon style={{ marginRight: '5px' }} />
                Sign Out
            </Button>
        </div>
    )
}

export default SignOut
