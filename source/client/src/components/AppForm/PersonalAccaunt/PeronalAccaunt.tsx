import React from 'react';
import { observer } from 'mobx-react';


import Dialog from '@mui/material/Dialog';
import {TextField, Box, Button} from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { APP_STORAGE } from '../../../storage/AppStorage' 
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

  <Dialog open={APP_STORAGE.personal_acc.getPersonalAccaunt()}>
  <Box sx={{p: 2}}>

        <div className='header-modal' style={{display: 'flex', justifyContent : 'space-between'}}> <Typography sx = {{color: '#0D80D8', paddingBottom: '10px'}} > Карточка пользователя </Typography>
        <CloseIcon  
        onClick={()=>{ APP_STORAGE.personal_acc.setPersonalAccaunt(false); }}/> 
        </div>

        <Divider  sx = {{marginBottom: '20px'}}/>


    <Box 
        className='wrapper' sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        alignItems : 'center', 
        gap: 1
          }}>


          <Box 
              sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignItems : 'center', 
              gap: 1
          }}
          > 

            <Typography>Фамилия:</Typography>
              <TextField 
                  size='small'
                  onChange={ (e)=>{ APP_STORAGE.personal_acc.setFamily(e.target.value);; } }
                  value={ APP_STORAGE.personal_acc.getFamily() || user.family } />

       
            <Typography >Имя:</Typography>
                <TextField  
                    size='small'
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setName(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getName() || user.name} />


            <Typography >Отчество:</Typography>
                <TextField 
                    size='small' 
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setFather(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getFather() || user.father }  />


            <Typography >Телофон:</Typography>
                <TextField 
                    size='small' 
                    type="number"
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setTelephone(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getTelephone() || user.telephone } />


            <Typography >Старый пароль:</Typography>
                <TextField   
                    size='small' 
                    type="password"
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setOld_Pass(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getOld_Pass()  } />
                    

            <Typography >Новый пароль:</Typography>
                <TextField 
                    size='small' 
                    type="password"
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setNew_Pass(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getNew_Pass() } />

          
            <Typography >E-mail:</Typography>
                <TextField  
                    size='small'
                    type = 'email'
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setEmail(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getEmail() || user.email} />
          

            <Typography >Примечание</Typography>
                <TextField 
                    size='small'
                    onChange={ (e)=>{ APP_STORAGE.personal_acc.setInfo(e.target.value); } }
                    value={ APP_STORAGE.personal_acc.getInfo()  || user.info} />
            
          
        </Box>
        <Box className='right-wrapper' sx ={{pl: 1}}>

        <Button     
            variant="outlined"
            onClick={ ()=>{ APP_STORAGE.personal_acc.set_CUserData()}}>
            Сохранить
         </Button>
     </Box>
    </Box>
  </Box>
        <Divider />
      </Dialog>
    </React.Fragment>
        );
    }
}



