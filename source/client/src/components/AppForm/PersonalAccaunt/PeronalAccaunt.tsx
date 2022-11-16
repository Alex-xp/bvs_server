import React from 'react';
import { observer } from 'mobx-react';


import Dialog from '@mui/material/Dialog';
import {TextField, Box} from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
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
        onClick={()=>{ APP_STORAGE.personal_acc.setPersonalAccaunt(false); }}
        //TransitionComponent={1}
      >
        <Box sx={{p: 2}}>
         Карточка пользователя
        <Divider />
        <Box 
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                alignItems : 'center', 
                gap: 1
              }}
         > 
            <Typography  > Пользователь: </Typography>
            <TextField size = 'small' sx={{p: 1}} value={user.family } />
       

          
            <Typography > Подразделение: </Typography>
            <TextField size = 'small' sx={{p: 1}} value={user.family } />
         

            <Typography > Вид должности: </Typography>
            <TextField size = 'small' sx={{p: 1}} value={user.family } />
          

            <Typography > Телофон: </Typography>
            <TextField size = 'small' sx={{p: 1}} value={user.family } />
          
         
            <Typography > E-mail: </Typography>
            <TextField size = 'small' sx={{p: 1}} value={user.family } />
          


            <Typography > Состояние: </Typography>
            <TextField  size = 'small' sx={{p: 1}} value='Действующая' />
        

          
            <Typography > Примечание: </Typography>
            <TextField />
         
        </Box>
        </Box>
      </Dialog>
    </React.Fragment>
        );
    }
}



