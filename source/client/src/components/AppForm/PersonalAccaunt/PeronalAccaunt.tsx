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

      <Dialog  
        open={APP_STORAGE.personal_acc.getPersonalAccaunt()}
      >
        <Box sx={{p: 2}}>
       <div className='header-modal' style={{display: 'flex', justifyContent : 'space-between'}}> <Typography sx = {{color: '#0D80D8', paddingBottom: '10px'}} > Карточка пользователя </Typography>
        <CloseIcon  onClick={()=>{ APP_STORAGE.personal_acc.setPersonalAccaunt(false); }}/> 
        </div>
        <Divider  sx = {{marginBottom: '20px'}}/>
        <Box className='wrapper' sx={{
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
            <Typography  > Фамилия: </Typography>
            <TextField size = 'small'
             onChange={ (e)=>{ APP_STORAGE.personal_acc.setСhangeSurname(e.target.value); } }
             value={ APP_STORAGE.personal_acc.getСhangeSurname() } />
       
            <Typography  > Имя: </Typography>
            <TextField size = 'small'
              onChange={ (e)=>{ APP_STORAGE.personal_acc.setChangeName(e.target.value); } }
              value={ APP_STORAGE.personal_acc.getСhangeName() } />

            <Typography  > Отчество: </Typography>
            <TextField size = 'small' 
            onChange={ (e)=>{ APP_STORAGE.personal_acc.setChangePName(e.target.value); } }
            value={ APP_STORAGE.personal_acc.getСhangePName() } />
          
            <Typography > Подразделение: </Typography>
            <TextField size = 'small' value={user.org_id } />
         

            <Typography > Вид должности: </Typography>
            <TextField size = 'small'/>
          

            <Typography > Телофон: </Typography>
            <TextField size = 'small'  value={user.telephone } />
          
         
            <Typography > E-mail: </Typography>
            <TextField size = 'small' value={user.email } />
          


            <Typography > Состояние: </Typography>
            <TextField  size = 'small' value='Действующая' />
        </Box>
        <Box className='right-wrapper' sx ={{height: '100%', background: '#F7F9FB', display: 'grid'}}>
        <Button 
         variant="outlined"
         onClick={ ()=>{ APP_STORAGE.personal_acc.change_Surnameh()}}
         >Сохранить</Button>
        </Box>
        </Box>
        </Box>
        <Divider />
      </Dialog>
    </React.Fragment>
        );
    }
}



