import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    const {signIn} = props;
    return (
        <div>
            <Menu.Item>
               <Button  onClick={signIn} primary>Login</Button>
               <Button primary style={{marginLeft:'0.5em'}}>Sign Up</Button> 
            </Menu.Item>
        </div>
    )
}
