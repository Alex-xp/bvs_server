import React from 'react';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { APP_STORAGE } from './storage/AppStorage';
import { WSocket } from './storage/WSocket';

import { IWSQuery, WSQuery } from '../../xcore/WSQuery';

import { AuthForm } from './components/AuthForm'

interface IProps {}

@observer 
export class App extends React.Component<IProps>{

    constructor(props:any){
        super(props);
    }
   
  
    componentDidMount(): void {
        APP_STORAGE.main.setTitle("ТИТУЛЬНЫЙ ЗАГОЛОВОК СТРАНИЦЫ");
        APP_STORAGE.get_UserBySessionCode();
    }

    componentWillUnmount(): void {}

    render(): React.ReactNode {
        document.title = APP_STORAGE.main.getTitle();

        var ret_dt:React.ReactNode = <></>;
        var user = APP_STORAGE.auth_form.getUser();
        if(user !== null && user.id > 0){
            ret_dt = <div>Next page</div>
        }else{
            ret_dt = <AuthForm/>;
        }
        
        return (
            <React.Fragment>
                {ret_dt}
            </React.Fragment>
        );
    }
}