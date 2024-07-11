export const addForm = (formId: string) => {
  const scriptId = "honeybook";

  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.innerHTML =
      '(function(h,b,s,n,i,p,e,t) {\r\n    h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;\r\n    t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;\r\n    e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);\r\n})(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","' +
      formId +
      '")';
    document.body.appendChild(script);
  }
  return scriptId;
};
