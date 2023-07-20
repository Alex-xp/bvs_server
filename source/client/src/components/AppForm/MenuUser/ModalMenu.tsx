import React from 'react';
import { observer } from 'mobx-react';

import Dialog from '@mui/material/Dialog';
import {TextField, Box, Button , Divider , Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { APP_STORAGE } from '../../../storage/AppStorage';

import {ChangePassword} from './ChangePassword'

interface IProps{}


@observer
export class PersonalAccaunt extends React.Component<IProps> {
    constructor(props:any){
        super(props);
    }
      render(): React.ReactNode {

         

 

      return (
      <React.Fragment>

      <Dialog open={APP_STORAGE.personal_acc.getPersonalAccaunt()}>

      <Box 
         sx={{p: 2}}>
            <Typography 
              sx = {{color: '#0D80D8', paddingBottom: '10px'}}> 
              Карточка пользователя 
            </Typography>

            <CloseIcon  
             onClick={()=>{ APP_STORAGE.personal_acc.setPersonalAccaunt(false); }}/> 
   ddd

      <Divider sx = {{marginBottom: '20px'}}/>


        <Button  sx ={{mr: 2}}   
              variant="outlined"
              onClick={ ()=>{ APP_STORAGE.personal_acc.set_CUserData('sess_id', APP_STORAGE.auth_form.getdt())}}>
              Сохранить
        </Button>

        <Button     
              variant="outlined"
              onClick={ ()=>{ APP_STORAGE.personal_acc.set_ChangePass('sess_id', APP_STORAGE.auth_form.getdt())}}>
              Изменить и сохранить пароль
        </Button>

      </Box>
      <Divider/>
      <Divider />
      </Dialog>
      </React.Fragment>
        );
    }
}



