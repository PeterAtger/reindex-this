import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add a new project | Reindex This',
  description: 'Can\'t find your favourite prject ? You can add it here',
};

export default function AddLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
