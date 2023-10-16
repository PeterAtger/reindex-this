'use server';

import { cleanUrls } from '@/utils/urls';
import reindex from '../reindex';
import { getProjects } from '../getProjects';

export default async (prevState: string, formData: FormData) => {
  const selectedProject = formData.get('projects');
  const rawUrls = formData.get('URLS');

  if (!selectedProject || selectedProject === 'choose') {
    return 'Please select a Project';
  }

  if (!rawUrls) {
    return 'Please enter correct Urls';
  }

  try {
    const urls = cleanUrls(rawUrls.toString()).split('\n');
    const project = (await getProjects()).getProjectByName(selectedProject.toString());

    if (!project) {
      return 'Please ask Peter to update DB, tell the website said so';
    }
    const message = await reindex({ authJSON: project.projectData, urls });

    return message.join('\n');
  } catch {
    return 'Something went wrong, not sure what';
  }
};
