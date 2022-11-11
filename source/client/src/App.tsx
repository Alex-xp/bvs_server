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
        // console.log(APP_STORAGE);
    }

    componentDidMount(): void {
        APP_STORAGE.main.setTitle("ТИТУЛЬНЫЙ ЗАГОЛОВОК СТРАНИЦЫ");
        APP_STORAGE.get_UserBySessionCode();
    }

    componentWillUnmount(): void {}

    render(): React.ReactNode {
        document.title = APP_STORAGE.main.getTitle();

        console.log(APP_STORAGE.main);
        console.log(APP_STORAGE.main.getTitle());

        return (
            <React.Fragment>
              <AuthForm/>
            </React.Fragment>
        );
    }
}