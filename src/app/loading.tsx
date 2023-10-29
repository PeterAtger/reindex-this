import LoadingAnimation from './components/LoadingAnimation';

export default function Loading() {
  return (
    <div className="bg-white flex flex-col justify-center items-center mt-8 bg-opacity-10 rounded-xl backdrop-blur-md border-2 border-solid border-white border-opacity-10 md:w-6/12 w-11/12 p-8">
      <LoadingAnimation />
    </div>
  );
}
