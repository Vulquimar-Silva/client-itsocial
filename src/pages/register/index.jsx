import { Link } from 'react-router-dom'

import './register.scss'

function Register() {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>IT.Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur repellendus possimus officia obcaecati placeat, magnam minima facere, at labore provident ex? Mollitia ea ad officiis aut esse recusandae excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur repellendus possimus officia obcaecati placeat, magnam minima facere, at labore provident ex? Mollitia ea ad officiis aut esse recusandae excepturi.
          </p>
        </div>
        <div className="right">
          <h2>Cadastre-se e esteja sempre atualizado no universo TI</h2>
          <form>
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Usuário' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Senha' />
            <button>Cadastrar</button>
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