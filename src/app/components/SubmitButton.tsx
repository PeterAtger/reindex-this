'use client';

import {
  useFormStatus,
} from 'react-dom';
import StatusSpinner from './StatusSpinner';

export default function SubmitButton({ text }: { text:string }) {
  const { pending } = useFormStatus();

  return (
    <div className="m-4">
      <button
        type="submit"
        disabled={pending}
        className="flex justify-center w-full mt-2 bg-secondary text-white py-3 px-4 font-semibold rounded-md hover:bg-white hover:text-secondary disabled:bg-slate-200 disabled:text-white"
      >
        {pending ? <StatusSpinner /> : text}
      </button>
    </div>
  );
}
