(function(window) {
  window.__env = window.__env || {};
  window.__env.mode = "Development";
  window.__env.APP_API_URL = "https://api.reveal-dev.net";
  window.__env.API_MOCK_ENABLED = false;
    window.__env.NEW_RELIC_APP_ID = "248012143";
  window.__env.appsMapping = {
    "idp-client": "http://d20t5e04tyby2o.cloudfront.net",
    pe: "http://d361zwzzreo73b.cloudfront.net/",
    pp: "http://d361zwzzreo73b.cloudfront.net",
    smp: "http://localhost:3000"
  };
  // Dev client config
  window.__env.OAUTH_CODE_FLOW_SETTINGS = {
    authority: "https://idp.reveal-dev.net",
    client_id: "MTM-link-client-dev2",
    redirect_uri: "http://localhost:3000/#/redirect",
    silent_redirect_uri: "http://localhost:3000/assets/silent-callback.html",
    post_logout_redirect_uri: "http://localhost:3000",
    response_type: "code",
    scope: "openid profile id.custom api.api1 api.usermanagement",
    loadUserInfo: true,
    automaticSilentRenew: true
  };
  window.__env.GOOGLE_API_KEY = 'AIzaSyDWRHGHLquUDQZJrxYlEFmpifUXcjfhdHI'
})(this);
