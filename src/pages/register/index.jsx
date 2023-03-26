import axios from 'axios'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import './register.scss'

function Register() {

  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3333/api/auth/register", inputs);
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  console.log(errors)

  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>IT.Social</h1>
          <p>
            A tecnologia é maravilhosa! Ela nos permite fazer coisas que antes eram impossíveis. Desde a criação de novos medicamentos até a exploração do espaço, a tecnologia tem um papel fundamental em nossas vidas.
          </p>
          <p>
            Ela nos ajuda a nos conectar com outras pessoas, a aprender coisas novas e a nos divertir. A tecnologia também pode ser usada para resolver problemas globais, como mudanças climáticas e pobreza. É incrível pensar em todas as coisas que podemos fazer graças à tecnologia!
          </p>
          <p>by Bing</p>
        </div>
        <div className="right">
          <h2>Cadastre-se e esteja sempre atualizado no universo TI</h2>
          <form>
            <input type="text" placeholder='Nome' name="name" onChange={handleChange} />
            <input type="text" placeholder='Usuário' name="username" onChange={handleChange} />
            <input type="email" placeholder='Email' name="email" onChange={handleChange} />
            <input type="password" placeholder='Senha' name="password" onChange={handleChange} />
            {errors && errors}
            <button onClick={handleClick}>Cadastrar</button>
            <span>Você já possui uma conta?</span>
            <Link to="/login">
              <button className='btn-register'>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register