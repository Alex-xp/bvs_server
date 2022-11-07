import React from 'react';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { APP_STORAGE } from './storage/AppStorage';
import { WSocket } from './storage/WSocket';

import { IWSQuery, WSQuery } from '../../xcore/WSQuery';

interface IProps {}

@observer
export class App extends React.Component<IProps>{

    constructor(props:any){
        super(props);
        console.log(APP_STORAGE);
    }

    componentDidMount(): void {
        this.mountData();
    }

    mountData(){
        APP_STORAGE.projects.getProjects();
    }

    componentWillUnmount(): void {}

    render(): React.ReactNode {
        document.title = APP_STORAGE.main.getTitle();

        console.log(APP_STORAGE.main);
        console.log(APP_STORAGE.main.getTitle());

        return (
            <React.Fragment>
                <div>REACT APP</div>
            </React.Fragment>
        );
    }
}