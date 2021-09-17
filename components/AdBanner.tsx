import AdSense from "react-ssr-adsense";

interface Window {
  adsbygoogle: any;
}

export default function AdBanner() {
  return (
    <AdSense
      className="adsbygoogle adbanner-customize"
      data-ad-client="ca-pub-5775610330008624"
      data-ad-slot="7806394673"
    />
  );
}
