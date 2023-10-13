import localFont from 'next/font/local';
import Link from 'next/link';

const arrowsFont = localFont({ src: '../../assets/fonts/arrows/Arrows.ttf' });

export default async function Header() {
  return (
    <div className="bg-slate-100 z-20 pt-12 px-4 pb-4 shadow-md rounded-bl-md rounded-br-md">
      <Link className={arrowsFont.className} href="/">
        <h1 className="text-gray-600 font-black text-6xl">
          (REINDEX--
          <span className="text-secondary">{'THIS!>'}</span>
        </h1>
      </Link>
    </div>
  );
}
