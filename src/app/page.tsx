import Blobs from './components/Blobs';
import Leaves from './components/Leaves';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import MultiSelect from './components/MultiSelect';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-200 to-slate-400 relative overflow-hidden">
      <Header />

      <Blobs />
      <Leaves />

      <div className="form-container flex-1 w-full flex flex-col items-center">
        <Form>
          <MultiSelect />
        </Form>
      </div>

      <Footer />
    </main>
  );
}

export const dynamic = 'force-dynamic';
