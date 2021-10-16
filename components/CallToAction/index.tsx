import { Fetcher } from '@/lib/fetcher';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import useSWR from 'swr';
import SubscribeForm from './SubscribeForm';

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

export default function CallToAction() {
  const { data: subs, error } = useSWR('/api/subscribers', Fetcher);

  return (
    <div className="flex py-12 mx-auto max-w-6xl">
      <div className="mx-5 w-full rounded bg-navy-lighter">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-3 w-full">
            <h2 className="text-3xl font-black text-slate-light">
              Subscribe to the Newsletter
            </h2>
            <p className="text-sm text-slate">
              Sign up for the Newsletter to get notified of all the new articles
              that will be published by us.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-3 w-full">
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

            <span className="text-sm text-slate">
              {!subs ? '-' : subs} Subscribers.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
