import './Login.scss'
import logo from '../../assets/svg/d11/Vector.svg'
export const Login = () => {
  return (
    <div className='loginContainer min-h-screen flex w-full'>
      <div className='leftSide flex flex-col relative flex justify-center items-center pl-28 pr-52'>
        <div className="logo absolute left-20 top-10 flex gap-1 items-center">
          <img src={logo} alt="logo" />
          <span className='text-[#0f172a] text text-3xl font-bold'>Vertigo</span>
        </div>
        <div className="form flex flex-col gap-10">
          <div className="text flex flex-col gap-4 pr-8">
            <h1 className='text-[#1e293b] text-4xl font-bold'>Acesse a plataforma</h1>
            <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
          </div>
          <from>
            <div className="item">
              <label htmlFor="">E-mail</label>
              <input className='py-4 px-3 bg-[#ffffff] border-1 border-solid border-[#e2e8f0] rounded' type="text" placeholder='Digite seu e-mail' />
            </div>
            <div className="item">
              
            
              <label htmlFor="" className='flex'>
                <span className='flex-1'>Senha</span> 
                <a href="" className='text-[#7C3AED]'>Esqueceu a senha?</a>
              </label>
            <input className='py-4 px-3 bg-[#ffffff] border-[1_solid_#e2e8f0] rounded' type="text" placeholder='Digite sua senha'></input>
            </div>

            <button className='w-full bg-[#7C3AED] py-4 px-6 rounded my-8'>Entrar</button>
            <span>Ainda não tem uma conta?
              <a href="" className='text-[#7C3AED]'>Inscreva-se</a>
            </span>
          </from>
        </div>
      </div>
      <div className='waveImage'>
      </div>
    </div>
  )
}
