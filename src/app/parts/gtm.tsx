export const GTM = () => {
  const script = import.meta.env.PROD ? (
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-VY20Y5X6E9"
    ></script>
  ) : (
    <script></script>
  );

  if (import.meta.env.PROD) {
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(..._params: unknown[]) {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-VY20Y5X6E9");
      gtag('config', 'AW-10885308101');
    };
  }

  return <>{script}</>;
};
