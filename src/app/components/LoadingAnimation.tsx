'use client';

import Lottie, { Options } from 'react-lottie';
import animationData from '@/assets/animations/loading.json';

export default function LoadingAnimation() {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <>
      <Lottie options={defaultOptions} height={600} width={600} />
      <p className=" text-primary text-xl relative bottom-24">Creating the page for you ...</p>
    </>

  );
}
