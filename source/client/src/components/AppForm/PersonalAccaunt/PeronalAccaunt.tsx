import React from 'react';
import { observer } from 'mobx-react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import {TextField, Box} from '@mui/material';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { APP_STORAGE } from '../../../storage/AppStorage' 

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
interface IProps{}


@observer
export class PersonalAccaunt extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }


    render(): React.ReactNode {
        const user =  APP_STORAGE.auth_form.user;
        return (
            <React.Fragment>

<Dialog  
        open={APP_STORAGE.personal_acc.getPersonalAccaunt()}
        onClick={()=>{ APP_STORAGE.personal_acc.setPersonalAccaunt(false); }}
        //TransitionComponent={1}
      >
        <Box sx={{p: 10}} id = '11111'>
        Ваши данные
        <ManageAccountsIcon fontSize="large" />
        <List >
          <ListItem button>
            <ListItemText primary="Изменить персональные данные" secondary="" />
            <TextField value={user.family } />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Изменить персональные данные"
              secondary=""
            />
          </ListItem>
        </List>
        </Box>
      </Dialog>
    </React.Fragment>
        );
    }
}



