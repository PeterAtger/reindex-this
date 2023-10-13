export default async function FormContainer() {
  const renderTitle = (title: string) => (
    <h3 className="text-2xl font-semibold text-primary text-left">{title}</h3>
  );

  return (
    <form className="bg-white mt-8 bg-opacity-10 rounded-xl backdrop-blur-md border-2 border-solid border-white border-opacity-10 w-6/12 p-8">
      {renderTitle('1. Paste the JSON file contents here')}

      <div className="m-4 mb-1">
        <textarea
          className="block w-full p-4 bg-opacity-70 resize-none bg-white rounded-md text-gray-600 placeholder-gray-400 focus:ring focus:border-blue-300"
          rows={8}
          placeholder="JSON content here"
          name="pub"
          id="pub"
        />
      </div>

      <div className="mx-4 mb-4">
        <h4 className="text-primary text-sm">
          What JSON file ?
          <a
            href="https://developers.google.com/search/apis/indexing-api/v3/prereqs#create-service-account"
            className="text-secondary"
          >
            Read this
          </a>
        </h4>
      </div>

      {renderTitle('2. Paste the list of urls to reindex here ')}

      <div className="m-4 mb-4">
        <textarea
          className="block w-full p-4 bg-opacity-70 bg-white resize-none rounded-md text-gray-600 placeholder-gray-400 focus:ring focus:border-blue-300"
          rows={8}
          placeholder="List of urls here"
          name="pub"
          id="pub"
        />
      </div>

      {renderTitle('3. Reindex those bad boys')}

      <div className="m-4">
        <button type="submit" className="block w-full mt-6 bg-white text-secondary py-3 px-4 font-semibold rounded-md hover:bg-secondary hover:text-white">
          Log In
        </button>
      </div>
    </form>
  );
}
