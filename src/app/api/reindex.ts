import { AuthJSONType } from '@/types/GoogleApiTypes';
import { Auth } from 'googleapis';

type ReindexPropsType = {
  authJSON: AuthJSONType,
  urls: string[]
};

export default ({ authJSON, urls }: ReindexPropsType) => {
  const jwtClient = new Auth.JWT(
    authJSON.client_email,
    undefined,
    authJSON.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    undefined,
  );

  jwtClient.authorize(async (err, tokens) => {
    if (err) {
      return;
    }

    const endPoint = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

    const options = (url: string) => ({
      method: 'POST',
      // Your options, which must include the Content-Type and auth headers
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens?.access_token}`,
      },
      auth: { bearer: tokens?.access_token ?? '' },
      // Define contents here. The structure of the content is described in the next step.
      body: JSON.stringify({
        url,
        type: 'URL_UPDATED',
      }),
    });

    const response = await Promise.all(
      urls.map((url) => fetch(endPoint, options(url))),

    );

    await response.map(async (responseItem) => console.log(await responseItem.json()));
  });
};
