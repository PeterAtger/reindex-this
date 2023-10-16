import mongoose from 'mongoose';

export function createModel<T>(collectionName: string) {
  const schema = new mongoose.Schema<T>({}, { collection: collectionName, _id: false });
  return mongoose.models[collectionName] || mongoose.model(collectionName, schema, collectionName);
}
