import React from 'react';
import { observer } from 'mobx-react';

import {Avatar, Button, CssBaseline, TextField , Container , Typography, Box, Paper} from '@mui/material';
import { APP_STORAGE } from '../storage/AppStorage';

interface IProps{}

@observer
export class AuthForm extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }

    componentDidMount(): void {
        APP_STORAGE.main.setLogginned(false);
    }

    componentWillUnmount(): void {}

    render(): React.ReactNode {

        return (
            <React.Fragment>
                <Box sx={{margin:"0 auto", minWidth:'400px', width:"100%", maxWidth:"600px", paddingTop:"50px"}}>
            <Container >
            <div className='Box-login'>
                <Avatar >
                </Avatar>
             </div>
                <TextField variant="outlined"  margin="normal"  required fullWidth id="email" label="Логин" name="login" autoComplete="login" autoFocus  />
                <TextField  variant="outlined"  margin="normal" required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password"/>
                <Button type="button" fullWidth variant="contained" color="primary"> Войти </Button>
            </Container>
                </Box>  
            </React.Fragment>
        );
    }
}



