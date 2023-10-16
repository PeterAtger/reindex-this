'use client';

import SubmitButton from '../SubmitButton';

type FormProps = {
  onSubmit: (payload: any) => void,
  message: string,
  children: JSX.Element
};

export default function FormComponent({ onSubmit, message, children }: FormProps) {
  const renderTitle = (title: string) => (
    <h3 className="text-2xl font-semibold text-gray-600 text-left">{title}</h3>
  );

  return (
    <form action={onSubmit} className="bg-white mt-8 bg-opacity-10 rounded-xl backdrop-blur-md border-2 border-solid border-white border-opacity-10 md:w-6/12 w-11/12 p-8">

      {renderTitle('1. Select a project')}

      <div className="m-4">
        {children}
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

      <SubmitButton text="REINDEX" />

      <div className="flex justify-center items-center">
        <p className=" text-justify whitespace-pre-wrap font-semibold text-primary">
          {message}
        </p>
      </div>
    </form>
  );
}
