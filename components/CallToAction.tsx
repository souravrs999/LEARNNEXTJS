import MailchimpSubscribe from 'react-mailchimp-subscribe';
import SubscribeForm from './SubscribeForm';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

export default function Cta() {
  return (
    <div className="mx-auto px-5 py-12">
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-bold dark:text-gray-100">
          Subscribe to newsletter
        </h2>

        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={(FormData) => subscribe(FormData)}
            />
          )}
        />
      </div>
    </div>
  );
}
