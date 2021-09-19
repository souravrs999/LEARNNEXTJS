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
      <div className="flex flex-wrap md:flex-nowrap items-center md:space-x-5 space-y-5 md:space-y-0">
        <input
          className="h-12 w-full md:w-4/6 rounded-lg bg-white dark:bg-dark-muted border border-gray-400 dark:border-dark-muted text-gray-500 dark:text-gray-400 px-5"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e: any) => setEmail(e?.target?.value ?? 'null')}
        />
        <button
          className="text-xs font-bold h-12 w-full md:w-2/6 rounded-full bg-yellow-600 hover:bg-white dark:hover:bg-dark-muted text-white hover:text-yellow-500 hover:shadow-md uppercase"
          onClick={handleSubmit}
        >
          SUBSCRIBE
        </button>
      </div>
      {status === 'success' && status !== 'error' && !error && (
        <div className="mt-2 text-green-500 font-bold">{decode(message)}</div>
      )}
      {status === 'error' || error ? (
        <div className="mt-2 text-red-500 font-bold">
          {error || Sanitize(message)}
        </div>
      ) : null}
    </>
  );
}
