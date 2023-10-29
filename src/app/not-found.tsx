import Image from 'next/image';
import Link from 'next/link';
import notFound from '@/assets/images/not-found.png';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Page Not Found | Reindex This',
  description: 'You seem to be lost! This page is not here',
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-auto justify-center items-center z-30 font-bold text-center">
      <Image
        src={notFound.src}
        quality={100}
        width={930}
        height={362}
        alt="Psychiatrist image"
        className=""
      />
      <div>
        <h1 className="text-2xl sm:text-2xl mt-8  text-primary flex items-center flex-col sm:flex-row">
          So tell me: How long have you been feeling lost for ?
        </h1>
      </div>
      <h1 className="text-2xl sm:text-2xl mt-2 text-secondary flex items-center flex-col sm:flex-row">
        <Link href="/" className="text-secondary">Go back to a non 404 page</Link>
      </h1>
    </div>
  );
}
