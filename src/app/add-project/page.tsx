import onAddProject from '../api/form-actions/onAddProject';
import AddProjectFormItems from '../components/AddProjectFormItems/AddProjectFormItems';
import Form from '../components/Form';

export default async function AddPage() {
  return (
    <Form formAction={onAddProject} buttonText="ADD PROJECT">
      <AddProjectFormItems />
    </Form>
  );
}
