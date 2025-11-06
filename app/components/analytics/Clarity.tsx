'use client';

import Script from 'next/script';

type ClarityProps = {
  projectId: string;
  enabled?: boolean;
};

export default function Clarity({ projectId, enabled = true }: ClarityProps) {
  if (!enabled || !projectId) {
    return null;
  }

  return (
    <Script
      id="clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
}


