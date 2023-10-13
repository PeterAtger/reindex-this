import { Auth } from 'googleapis';
import key from '../../assets/recache-bro-c66b67e2ec4c.json';

export default () => {
  const jwtClient = new Auth.JWT(
    key.client_email,
    undefined,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    undefined,
  );

  jwtClient.authorize(async (err, tokens) => {
    if (err) {
      return;
    }

    const url = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
    const options = {
      method: 'POST',
      // Your options, which must include the Content-Type and auth headers
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens?.access_token}`,
      },
      auth: { bearer: tokens?.access_token ?? '' },
      // Define contents here. The structure of the content is described in the next step.
      body: JSON.stringify({
        url: 'https://recache-bro.pages.dev/',
        type: 'URL_UPDATED',
      }),
    };

    const response = await fetch(url, options);
    const body = await response.json();

    console.log(body);
  });
};
