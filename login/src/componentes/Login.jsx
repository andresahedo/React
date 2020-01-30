import React, {Component} from 'react';
import '../App.css';
import '../css/main.css';
import '../css/util.css';

class Login extends Component {

  render(){
    return (
      <div class="limiter">
    		<div class="container-login100">
    			<div class="wrap-login100">
    				<form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">
                Iniciar Sesión
              </span>
                <div class="wrap-input100 validate-input m-b-16">
      						<input class="input100"
                        id='rfc'
                        name='userRFC'
                        placeholder='Introduce tu RFC' />
      						<span class="focus-input100"></span>
      					</div>
                <div class="wrap-input100 validate-input" data-validate = "Please enter password">
    						<input class="input100" type="password" name="pass" placeholder="Password"/>
    						<span class="focus-input100"></span>
    					</div>

    					<div class="container-login100-form-btn">
    						<button class="login100-form-btn">
    							Iniciar
    						</button>
    					</div>
            </form>
    			</div>
    		</div>
    	</div>
    )
  }
}

export default Login;
