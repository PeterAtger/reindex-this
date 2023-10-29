'use client';

import SubmitButton from '../SubmitButton';

type FormProps = {
  onSubmit: (payload: any) => void,
  message: string,
  buttonText: string,
  children: JSX.Element
};

export default function FormComponent({
  onSubmit, message, children, buttonText,
}: FormProps) {
  return (
    <form action={onSubmit} className="bg-white mt-8 bg-opacity-10 rounded-xl backdrop-blur-md border-2 border-solid border-white border-opacity-10 md:w-6/12 w-11/12 p-8">

      {children}

      <SubmitButton text={buttonText} />

      <div className="flex justify-center items-center">
        <p className=" text-justify whitespace-pre-wrap font-semibold text-primary">
          {message}
        </p>
      </div>

    </form>
  );
}
