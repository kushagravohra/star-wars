import React from 'react';
import {connect} from 'react-redux';

import Actions from './actions';
import AuthActions from '../../auth/login/actions';
import NavBar from '../../../components/navbar';
import Cards from './components/cards';
import _ from 'lodash';


class PlanetsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            loading: false,
            typing: false,
            typingTimeout: 0,
            seconds: 60,
            sCount: 0,
        };
        this.timer = 0;
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.authenticated !== nextProps.authenticated) && ( nextProps.authenticated === false )){
            this.props.history.push("/login");
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    planetSearch = (text) => {
        //start timer and check
        if(text !== ''){
            if (this.timer === 0 && this.state.seconds > 0) {
              this.timer = setInterval(this.countDown, 1000);          
            }
            else if(!this.isLuke() && this.state.sCount === 15){
                return alert('You are not allowed to make 15 searches in a minute');
            }
            this.setState({
                sCount: this.state.sCount + 1,
            });
            this.props.planetSearch(text);
        }
    }

    changeSearch = (event) => {
        const self = this;

        if (self.state.typingTimeout) {
           clearTimeout(self.state.typingTimeout);
        }

        self.setState({
           searchText: event.target.value,
           typing: false,
           typingTimeout: setTimeout(function () {
               self.planetSearch(self.state.searchText);
            }, 1100)
        });
    }

    logout = (e) => {
        this.props.logout();
    }

    countDown = () => {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          seconds: seconds,
        });        
        // Check if we're at zero.
        if (seconds === 0) {
          clearInterval(this.timer);
          this.timer = 0;
          this.setState({
            sCount: 0,
            seconds: 60,
          });
        }
    }

    isLuke(){
        if (this.props.username === 'Luke Skywalker') return true;
    }

    render() {
        return (
            <div className="grad-color" style={{ height: '100%' }}>
                <NavBar
                    onSearch={this.changeSearch}
                    logout={this.logout}
                    username={this.props.username}
                    countdown={this.state.seconds}
                    searchCount={this.state.sCount}
                /> 
                { this.props.loading === false && this.props.planetList.length > 0 &&
                    <Cards 
                        planetList = {this.props.planetList}                    
                    />
                }
                { this.props.loading === true && <div className="spinner-div">
                    <img className="spinner-logo2" alt="spinner" src="assets/spinner.gif" />
                </div>  
                }          
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        planetList: state.planetsView.planetList,
        authenticated: state.loginView.authenticated,
        username: state.loginView.username,
        loading: state.planetsView.loading,
    }
};

const mapDispatchToProps = {
    planetSearch: Actions.planetSearch,
    logout: AuthActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);