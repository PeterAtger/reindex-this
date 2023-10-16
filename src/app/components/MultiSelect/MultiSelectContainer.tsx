import { getProjects } from '@/app/api/getProjects';
import MultiSelectComponent from './MultiSelectComponent';

export default async function MultiSelectContainer() {
  const projcets = await getProjects();
  const options = projcets.getAllProjects().map((projcet) => (projcet.projectName));

  return (
    <MultiSelectComponent options={options} />
  );
}
