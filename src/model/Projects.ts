import { PROJECTS, ProjectSchema, ProjectType } from '@/types/CollectionTypes';
import { Schema, model, models } from 'mongoose';

const schema = new Schema<ProjectType>(ProjectSchema, { collection: PROJECTS, _id: true });

export const ProjectsDBModel = models[PROJECTS] || model(PROJECTS, schema, PROJECTS);

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
