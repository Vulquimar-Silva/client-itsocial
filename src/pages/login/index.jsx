import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";

import './login.scss';

function Login() {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>IT.Social</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quos quis qui, quasi accusamus ratione, vitae temporibus nostrum cumque exercitationem ipsum facilis quaerat, placeat omnis quisquam. Commodi ut sequi eligendi!
          </p>
        </div>
        <div className="right">
          <h2>Conecte-se para usar sua conta do IT.Social</h2>
          <form>
            <input type="text" placeholder='Usuário' />
            <input type="password" placeholder='Senha' />
            <button onClick={handleLogin}>Login</button>
            <span>Você não tem uma conta?</span>
            <Link to="/register">
              <button className='btn-register'>Cadastrar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login