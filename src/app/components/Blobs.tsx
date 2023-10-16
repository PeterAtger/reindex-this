import '../../assets/css/blobz.min.css';

export default async function Blobs() {
  const blobSize = 'md:w-[600px] md:h-[600px] w-0 h-0';
  return (
    <>
      <div
        className={`tk-blob absolute -bottom-36 -left-36 ${blobSize}`}
        style={{ fill: '#cc6743', position: 'absolute' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.4 374.7">
          <path d="M309.9 70.6c37.8 52.7 39.8 128.7 15.4 184.1-24.3 55.4-75 90.1-125.4 107.4-50.4 17.4-100.4 17.4-136.2-3.3-35.7-20.7-57.2-62-62.4-102.1-5.2-40.2 5.8-79 29.1-128.3C53.6 79.1 89.1 19.3 143.7 4.1 198.3-11.2 272 18 309.9 70.6z" />
        </svg>
      </div>

      <div
        className={`tk-blob blob-animated p-2 p-md-6 absolute -bottom-36 -left-36 ${blobSize}`}
        style={{ strokeWidth: '4px', position: 'absolute' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 927 926.1">
          <path
            d="M898.7 157.1c56.3 102 16.6 249.3-26.1 379.8-42.8 130.5-88.3 244-184.8 314.3-96.5 70.4-243.5 97.6-380.4 51.7C170.5 856.7 43.9 737.5 10.2 595.3c-34-142.2 25-307.4 128.1-420C241.6 62.6 389.5 2.5 539.6.5 690-1.2 842.4 55.3 898.7 157.1z"
            fill="none"
            stroke="#fff"
            strokeWidth="8"
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      <div
        className={`tk-blob absolute -top-36 -right-36 ${blobSize}`}
        style={{ fill: '#214761', position: 'absolute' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.4 374.7">
          <path d="M309.9 70.6c37.8 52.7 39.8 128.7 15.4 184.1-24.3 55.4-75 90.1-125.4 107.4-50.4 17.4-100.4 17.4-136.2-3.3-35.7-20.7-57.2-62-62.4-102.1-5.2-40.2 5.8-79 29.1-128.3C53.6 79.1 89.1 19.3 143.7 4.1 198.3-11.2 272 18 309.9 70.6z" />
        </svg>
      </div>

      <div
        className={`tk-blob blob-animated p-2 p-md-6 absolute -top-36 -right-36 ${blobSize}`}
        style={{ strokeWidth: '4px', position: 'absolute' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 927 926.1">
          <path
            d="M898.7 157.1c56.3 102 16.6 249.3-26.1 379.8-42.8 130.5-88.3 244-184.8 314.3-96.5 70.4-243.5 97.6-380.4 51.7C170.5 856.7 43.9 737.5 10.2 595.3c-34-142.2 25-307.4 128.1-420C241.6 62.6 389.5 2.5 539.6.5 690-1.2 842.4 55.3 898.7 157.1z"
            fill="none"
            stroke="#fff"
            strokeWidth="8"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </>
  );
}
