export default function AddProjectFormItems() {
  const renderTitle = (title: string) => (
    <h3 className="text-2xl font-semibold text-gray-600 text-left">{title}</h3>
  );

  return (
    <>
      {renderTitle('1. Add your project name here')}

      <div className="m-4">
        <input
          className="block w-full p-4 bg-opacity-70 bg-white resize-none rounded-md text-gray-600 placeholder-gray-400 focus:ring"
          placeholder="Project Name"
          name="projectName"
          id="projectName"
        />
      </div>

      {renderTitle('2. Paste the JSON key here ')}

      <div className="m-4">
        <p className="text-xs font-bold my-2 text-gray-600">
          What JSON file ?
          {' '}
          <a
            className="text-primary"
            href="https://developers.google.com/search/apis/indexing-api/v3/prereqs"
          >
            Follow this Guide
          </a>
        </p>

        <textarea
          className="block w-full p-4 bg-opacity-70 bg-white resize-none rounded-md text-gray-600 placeholder-gray-400 focus:ring"
          rows={16}
          placeholder="List of urls here"
          name="jsonData"
          id="jsonData"
        />
      </div>

      {renderTitle('3. Add the project to your list of items')}
    </>
  );
}
