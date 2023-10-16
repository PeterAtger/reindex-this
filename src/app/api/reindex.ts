import { AuthJSONType } from '@/types/GoogleApiTypes';
import { Auth } from 'googleapis';

type ReindexPropsType = {
  authJSON: AuthJSONType,
  urls: string[]
};

export default async ({ authJSON, urls }: ReindexPropsType) => {
  const returnedMessages: string[] = [];
  let errors = 0;

  const jwtClient = new Auth.JWT(
    authJSON.client_email,
    undefined,
    authJSON.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    undefined,
  );

  await new Promise<void>((resolve, reject) => {
    jwtClient.authorize(async (err, tokens) => {
      if (err) {
        reject(err);
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

      const responseJson = await Promise.all(
        response.map((responseItem) => responseItem.json()),
      );

      const errorMessages = responseJson.map((responseItem, idx) => {
        if (responseItem.error) {
          errors += 1;

          return `${urls[idx]}: ${responseItem.error?.message}`;
        }

        return `${urls[idx]}: Done`;
      });

      if (!errors) {
        returnedMessages.push('All beautifully done. Google should reindex these pages soon');
        resolve();
        return;
      }

      returnedMessages.push(...errorMessages);
      resolve();
    });
  });

  return returnedMessages;
};
