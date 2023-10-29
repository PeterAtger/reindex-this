import { SchemaDefinition } from 'mongoose';
import { AuthJSONType } from './GoogleApiTypes';

export const PROJECTS = 'projects';

export type ProjectType = {
  projectName: string,
  projectData: AuthJSONType
};

export const ProjectSchema: SchemaDefinition<ProjectType> = {
  projectName: { type: String, required: true },
  projectData: {
    type: { type: String },
    project_id: { type: String },
    private_key_id: { type: String },
    private_key: { type: String },
    client_email: { type: String },
    client_id: { type: String },
    auth_uri: { type: String },
    token_uri: { type: String },
    auth_provider_x509_cert_url: { type: String },
    client_x509_cert_url: { type: String },
    universe_domain: { type: String },
  },
};
