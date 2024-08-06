import { useState } from 'react';

export function BackendChecker() {
  const [status, setStatus] = useState<null | 'ok' | 'error'>(null);

  async function checkBackendConnection() {
    const pulseUrl = `${import.meta.env.VITE_BACKEND_URL}/pulse`;
    try {
      const result = await fetch(pulseUrl);
      const content = await result.json();
      setStatus(content.msg === 'ok' ? 'ok' : 'error');
    } catch (e) {
      setStatus('error');
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={checkBackendConnection}>Check backend connection</button>
      {status ? <div>{status}</div> : null}
    </div>
  );
}
