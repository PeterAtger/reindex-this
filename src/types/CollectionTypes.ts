import { AuthJSONType } from './GoogleApiTypes';

export const PROJECTS = 'projects';

export type ProjectType = {
  projectName: string,
  projectData: AuthJSONType
};
