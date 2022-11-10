import React from 'react';
import { observer } from 'mobx-react';

import { APP_STORAGE } from '../storage/AppStorage';

import {Avatar, Button, TextField, Box} from '@mui/material';

interface IProps{}

@observer
export class AuthForm extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                 <Box sx={{margin:"0 auto", minWidth:'400px', width:"100%", maxWidth:"600px", paddingTop:"50px"}}>
            <div>
                <Avatar >
                </Avatar> 
                <form  noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Логин"
                        name="login"
                        autoComplete="login"
                        autoFocus  

                        onChange={ (e)=>{ APP_STORAGE.auth_form.setLogin(e.target.value); } }
                        value={ APP_STORAGE.auth_form.getLogin() }
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"

                        onChange={ (e)=>{ APP_STORAGE.auth_form.setPassword(e.target.value); } }
                        value={ APP_STORAGE.auth_form.getPassword() }
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"

                        onClick={ ()=>{ 
                            console.log(APP_STORAGE.auth_form.getLogin(), APP_STORAGE.auth_form.getPassword()); 
                            APP_STORAGE.auth_form.get_UserByAuth();
                        } }
                        
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </Box>
            </React.Fragment>
        );
    }
}



