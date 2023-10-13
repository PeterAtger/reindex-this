import Blobs from './components/Blobs';
import Leaves from './components/Leaves';
import FormContainer from './components/FormContainer';
import Header from './components/Header';
import Footer from './components/Footer';

export default async function Home() {
  // await authorize();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-200 to-slate-400 relative overflow-hidden">
      <Header />

      <Blobs />
      <Leaves />

      <div className="flex-1 w-full flex flex-col items-center">
        <FormContainer />
      </div>

      <Footer />
    </main>
  );
}
