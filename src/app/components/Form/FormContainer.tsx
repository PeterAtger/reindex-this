'use client';

import {
  useFormState,
} from 'react-dom';
import FormComponent from './FormComponent';

type FormContainerProps = {
  children: JSX.Element,
  buttonText: string,
  formAction: (prevState: string, formData: FormData)=> Promise<string>
};

export default function FormContainer({ children, formAction, buttonText }: FormContainerProps) {
  const [state, onSubmit] = useFormState(formAction, '');

  return (
    <FormComponent
      onSubmit={onSubmit}
      message={state}
      buttonText={buttonText}
    >
      {children}
    </FormComponent>
  );
}
