import React from 'react';
import {connect} from 'react-redux';
import Actions from './actions';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            error: '',
            containerClicked: false,
            i: 0,
            loginText: 'Welcome Aboard The Millenium Falcon. May the force be with you.',
            displayLoginText: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.authenticated !== nextProps.authenticated) && ( nextProps.authenticated === true )){
            this.props.history.push("/planets");
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
        this.props.submitCredentials({username, password});
    }

    containerClick = (e) => {
        if(this.state.containerClicked !== true){            
            let media = document.getElementById("audio");
            media.currentTime = 10;
            const playPromise = media.play();
            if (playPromise !== null) {
              playPromise.catch(() => {
                media.play();
              })
            };
            this.setState({ containerClicked: true });
            this.typeWriter();
        }
    }

    typeWriter = () => {

        if (this.state.i < this.state.loginText.length) {
          this.setState({
            i: this.state.i + 1,
            displayLoginText: this.state.displayLoginText + this.state.loginText.charAt(this.state.i)
          });
          setTimeout(this.typeWriter, 100);
        }
    }

    render() {
        const { username, password, loading } = this.state;
        const sss = {'height': '100%'};
        const boxStyle = this.state.containerClicked === true ? {'display': 'block'} : {'display': 'none'};
        return (

            <div className="vid-container" style={sss}>
                <div className={'inner-container' + (this.state.containerClicked === true ? ' color' : '')} id="inner-container">
                  <div className="logo-container" onClick={this.containerClick} id="logo-container">
                    <div className="logo-piece top">
                      <img className="logo" alt="l1" src="assets/l1.png" id="l1" />
                    </div>
                    <div className="box" style={boxStyle} id="login-box">
                        <form name="form" >
                            <h3 className="login-header">{this.state.displayLoginText}</h3>
                            <h3 className="login-error">{this.props.errorMessage}</h3>
                            <h3 className="login-error">{this.state.submitted && !this.state.username && 'Username is required!!'}</h3>
                            <h3 className="login-error">{this.state.submitted && !this.state.password && 'Password is required!!'}</h3>
                            <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username" autoComplete="off" />
                            <input type="password" name="password" value={password} onChange={this.handleChange}  placeholder="Password" />
                            <button className="login-btn" type="submit" form="form" value="Submit" disabled={loading} onClick={this.handleSubmit} >Login</button>
                        </form>
                        {this.props.loading === true && <div>
                            <img className="spinner-logo" alt="spinner" src="assets/spinner.gif" />
                        </div>}
                    </div>
                    <div className="logo-piece bottom">
                      <img className="logo" alt="l21" src="assets/l2.png" id="l2" />
                    </div>
                  </div>
                </div>
                <audio autoPlay id="audio" preload="auto" loop>
                  <source src="assets/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
                </audio>
                <video className="bgvid" autoPlay muted preload="auto" loop id="video" autobuffer="true" playsInline>
                  <source src="assets/Pexels Videos 4338.mp4" />
                  <source src="assets/Pexels Videos 4338.webm" type="video/webm" />
                </video>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.loginView.authenticated,
        errorMessage: state.loginView.errorMessage,
        loading: state.loginView.loading,
    }
};

const mapDispatchToProps = {
  submitCredentials: Actions.submitCredentials,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);