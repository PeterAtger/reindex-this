'use server';

import { cleanUrls } from '@/utils/urls';
import reindex from '../reindex';

export default async (prevState: string, formData: FormData) => {
  const rawAuthJSON = formData.get('JSON');
  const rawUrls = formData.get('URLS');

  if (!rawAuthJSON) {
    return 'Please enter a correct JSON file object';
  }

  if (!rawUrls) {
    return 'Please enter correct Urls';
  }

  try {
    const authJSON = JSON.parse(rawAuthJSON.toString());
    const urls = cleanUrls(rawUrls.toString()).split('\n');

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // await reindex({ authJSON, urls });

    return 'Something went right';
  } catch {
    return 'Something went wrong';
  }
};
