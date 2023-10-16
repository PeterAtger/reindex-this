'use client';

import {
  experimental_useFormState as useFormState,
} from 'react-dom';
import onReindex from '@/app/api/form-actions/onReindex';
import FormComponent from './FormComponent';

export default function FormContainer({ children }: { children: JSX.Element }) {
  const [state, formAction] = useFormState(onReindex, '');

  return (
    <FormComponent
      onSubmit={formAction}
      message={state}
    >
      {children}
    </FormComponent>
  );
}
