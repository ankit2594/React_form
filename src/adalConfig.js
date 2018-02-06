import { AuthenticationContext, adalFetch } from 'react-adal';

export const adalConfig = {
  tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
  clientId: '51626bfd-9454-4a2f-ba03-f3efe2ac3800',
  endpoints: {
    api: 'a153cbd9-a03e-449e-b222-6cb9286c29f1',
  },
  postLogoutRedirectUri : "http://localhost:3000/",
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);