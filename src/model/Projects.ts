import { PROJECTS, ProjectType } from '@/types/CollectionTypes';
import { createModel } from '@/lib/schemas';

export const ProjectsDBModel = createModel<ProjectType>(PROJECTS);

export class ProjectsClass {
  items: ProjectType[];

  constructor(items: ProjectType[]) {
    this.items = items;
  }

  getAllProjects() {
    return this.items;
  }

  getProjectByName(name: string) {
    return this.items.find((item) => (item.projectName === name));
  }
}
