import connectDB from '@/lib/connect-db';
import { ProjectType } from '@/types/CollectionTypes';
import { ProjectsClass, ProjectsDBModel } from '@/model/Projects';

export async function getProjects() {
  try {
    await connectDB();
    const projects: ProjectType[] = await ProjectsDBModel.find({}, { _id: false });
    const cleanProjects = JSON.parse(JSON.stringify(projects));

    return new ProjectsClass(cleanProjects);
  } catch {
    console.error('Could not retrieve projects data');

    return new ProjectsClass([]);
  }
}
