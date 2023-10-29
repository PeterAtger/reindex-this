'use server';

import connectDB from '@/lib/connect-db';
import { ProjectsDBModel } from '@/model/Projects';
import { AuthJSONType } from '@/types/GoogleApiTypes';
import { isJsonString } from '@/utils/misc';

export default async (prevState: string, formData: FormData) => {
  await connectDB();
  const projectName = formData.get('projectName');
  const jsonData = formData.get('jsonData');

  if (!projectName) {
    return 'Please enter a Project Name';
  }

  if (!jsonData || !isJsonString(jsonData.toString())) {
    return 'Please make sure that the entered JSON key is correct ';
  }

  const jsonDataObject: AuthJSONType = JSON.parse(jsonData.toString());

  if (!jsonDataObject.client_email || !jsonDataObject.private_key) {
    return 'Please make sure that the entered JSON key is correct ';
  }

  try {
    await ProjectsDBModel.create({
      projectName,
      projectData: jsonDataObject,
    });
  } catch (e) {
    return 'Oops, Something went wrong';
  }

  return 'Project Added! Great Job 🎉';
};
