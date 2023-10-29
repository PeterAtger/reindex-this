import MultiSelect from '@/app/components/MultiSelect';
import Link from 'next/link';

export default function ReindexFormItems() {
  const renderTitle = (title: string) => (
    <h3 className="text-2xl font-semibold text-gray-600 text-left">{title}</h3>
  );

  return (
    <>
      {renderTitle('1. Select a project')}

      <div className="m-4">
        <MultiSelect />
        <p className="text-xs font-bold my-4 text-gray-600">
          {'Can\'t find your favourite project ? '}
          <Link
            className="text-primary"
            href="/add-project"
          >
            Add it here
          </Link>
        </p>
      </div>

      {renderTitle('2. Paste the list of urls to reindex here ')}

      <div className="m-4 mb-4">
        <textarea
          className="block w-full p-4 bg-opacity-70 bg-white resize-none rounded-md text-gray-600 placeholder-gray-400 focus:ring"
          rows={16}
          placeholder="List of urls here"
          name="URLS"
          id="URLS"
        />
      </div>

      {renderTitle('3. Reindex those bad boys')}
    </>
  );
}
