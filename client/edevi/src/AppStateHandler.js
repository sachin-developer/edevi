import React, {Component} from 'react';
import AppToolBarHeader from './header/AppToolBarHeader';
import {withRouter} from 'react-router-dom';
import Routes  from './Routes';


class AppStateHandler extends Component {
    constructor(props) {
        super(props);      
        this.setRedirectState = this.setRedirectState.bind(this);
    }

    setRedirectState(state) {
        this.props.history.push(state);
    }

    render() {
        return (
            <div className='AppStateHandler'>
                <AppToolBarHeader data={{history: this.props.history}}/>
                <div className="AppBody">
                    <Routes />
                </div>
            </div>
          );
    }  
}

export default withRouter(AppStateHandler);