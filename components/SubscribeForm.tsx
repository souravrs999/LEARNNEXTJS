import { useState } from 'react';
import { decode } from 'html-entities';

export default function SubscribeForm({ status, message, onValidated }) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  function clearFields() {
    setError('');
    setEmail('');
  }

  function Sanitize(txt: string) {
    let _txt = parseMessage(message);
    _txt.toLowerCase().includes('already subscribed')
      ? (_txt = 'You are already subscribed.')
      : (_txt = 'Oops some error occured.');

    return _txt;
  }

  function handleSubmit() {
    setError(null);
    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }
    const isFormValidated = onValidated({ EMAIL: email });
    clearFields();
    return email && email.indexOf('@') > -1 && isFormValidated;
  }

  function parseMessage(message: string) {
    if (!message) {
      return null;
    }
    const result: string[] = message?.split('-') ?? null;
    if ('0' !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  }

  return (
    <>
      <div className="flex items-center px-3 space-x-2 w-full rounded bg-navy-light">
        <input
          className="p-5 w-2/3 rounded bg-navy-light focus:outline-none text-slate"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e: any) => setEmail(e?.target?.value ?? 'null')}
        />
        <button
          className="p-2 w-1/3 font-bold rounded text-navy-lighter bg-navy-green"
          onClick={handleSubmit}
        >
          SUBSCRIBE
        </button>
      </div>
      {status === 'success' && status !== 'error' && !error && (
        <div className="mt-2 font-mono text-sm text-navy-green">
          {decode(message)} ehljsdoifuiosd
        </div>
      )}
      {status === 'error' || error ? (
        <div className="mt-2 font-mono text-sm text-red-500">
          {error || Sanitize(message)}
        </div>
      ) : null}
    </>
  );
}
