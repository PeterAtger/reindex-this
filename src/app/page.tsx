import Form from './components/Form';
import onReindex from './api/form-actions/onReindex';
import ReindexFormItems from './components/ReindexFormItems';

export default async function Home() {
  return (
    <Form formAction={onReindex} buttonText="REINDEX">
      <ReindexFormItems />
    </Form>
  );
}

export const dynamic = 'force-dynamic';
