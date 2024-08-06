import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  async function checkBackendConnection() {
    const pulseUrl = `${import.meta.env.VITE_BACKEND_URL}/pulse`;
    try {
      const result = await fetch(pulseUrl);
      const content = await result.json();
      alert(content.msg);
    } catch (e) {
      alert('Backend not found.');
      console.error(e);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={checkBackendConnection}>
          Check backend connection
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
