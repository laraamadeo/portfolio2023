import githubLogo from '/github-logo.svg'
import linkedinLogo from '/linkedin-logo.svg'
import './App.css'

function App() {
  return (
    <>

      <h1 className='title'>🛠️ </h1>
      <h1 className='title'>Portfolio under construction </h1>
      <div className="card">
        <div>
          <a href="https://github.com/laraamadeo" target="_blank" rel='noreferrer'>
            <img src={githubLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://www.linkedin.com/in/laraamadeotarantino/" target="_blank" rel='noreferrer'>
            <img src={linkedinLogo} className="logo" alt="React logo" />
          </a>

        </div>
      </div>

    </>
  )
}

export default App
