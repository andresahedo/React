import React, {Component} from 'react';
const API = 'http://localhost:8080/catalogoController/allJurc';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rfc: '',
      password:'',
      usuario:{}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.iniciarSesion = this.iniciarSesion.bind(this);
  }

  handleChange(event) {
    this.setState({
      rfc: event.target.value
    });
  }

  iniciarSesion(){
    console.log("incia  sesion");
    var peticion = {
        "rfc": this.state.rfc,
        "password":"12345678a"
    }

    fetch(API,{
		crossDomain:true,
        method: 'get',
		      headers:{ 'Content-Type': 'application/json' }
      })
    .then(response => response.json())
    .then(
        data =>{
          this.setState({ usuario: data })

        }
      )
    ;

    console.log(this.state.usuario);
  }

  handleSubmit(event) {
    console.log("Inicia Sesión:");
    this.iniciarSesion();
    console.log(this.state.rfc);
    event.preventDefault();
  }

  render(){
    return (
      <div class="limiter">
    		<div class="container-login100">
    			<div class="wrap-login100">
    				<form class="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={this.handleSubmit}>
              <span class="login100-form-title">
                Iniciar Sesión
              </span>
                <div class="wrap-input100 validate-input m-b-16">
      						<input class="input100"
                        id='rfc'
                        name='userRFC'
                        value={this.state.rfc} onChange={this.handleChange}
                        placeholder='Introduce tu RFC' />
      						<span class="focus-input100"></span>
      					</div>
                <div class="wrap-input100 validate-input" data-validate = "Please enter password">
    						<input class="input100"
                      type="password"
                      value={this.state.password}
                      name="pass"
                      placeholder="Password"/>
    						<span class="focus-input100"></span>
    					</div>


    					<div class="container-login100-form-btn">
    						<button class="login100-form-btn" type="sumit">
    							Iniciar Sesión
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
