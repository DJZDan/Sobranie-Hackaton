import { useRouter } from "next/router";

const LawDetail = () => {
  const router = useRouter();
  const { title, description, timePublished } = router.query;

  const navigateToPage = (page) => {
    router.push({
      pathname: `/law-detail/${page}`,
      query: { title, description, timePublished },
    });
  };

  return (
    <div className="p-32">
      <div className="bg-red-800 w-full text-white p-6 rounded-lg">
        <h1 className="text-3xl font-semibold mb-6">{title}</h1>
        <p className="text-lg">
          Дознај повеќе за овој закон преку овие три опции
        </p>
      </div>

      <div className="flex gap-4 mt-6 justify-around">
        <div className="bg-gray-300 min-h-[400px] py-6 rounded-lg min-w-[150px] max-w-[450px] flex flex-col">
          <div className="h-1/3 px-6 flex items-center justify-center">
            <img src="/images/option1.png"></img>
          </div>
          <div className="bg-red-800 px-6 flex gap-4 py-3">
            <img src="/images/icon.png"></img>
            <p className="text-white text-2xl">Вештачка интелегенција</p>
          </div>
          <div className="px-6 text-gray-800 mt-6 mb-6">
            <h1 className="font-semibold mb-4">
              Откриј го светот со новиот AI summary
            </h1>
            <p className="text-gray-600">
              Така што ќе имате можност да го запознаете и нашиот AI асистент
            </p>
          </div>
          <div className="px-6">
            <button
              onClick={() => navigateToPage("aichat")}
              className="bg-red-800 text-white py-3 px-6 rounded-full hover:bg-red-700"
            >
              Пронајди клучен момент
            </button>
          </div>
        </div>
        <div className="bg-gray-300 min-h-[400px] py-6 rounded-lg min-w-[150px] max-w-[450px] flex flex-col">
          <div className="h-1/3 px-6 flex items-center justify-center">
            <img src="/images/option2.png"></img>
          </div>
          <div className="bg-red-800 px-6 flex gap-4 py-3">
            <img src="/images/icon.png"></img>
            <p className="text-white text-2xl">Моќна видео алатка</p>
          </div>
          <div className="px-6 text-gray-800 mt-6 mb-6">
            <h1 className="font-semibold mb-4">Само тоа што ти треба</h1>
            <p className="text-gray-600">
              Пронајди го секој клучен момент со нашата нова видео алатка.
            </p>
          </div>
          <div className="px-6">
            <button
              onClick={() => navigateToPage("showTranscript")}
              className="bg-red-800 text-white py-3 px-6 rounded-full hover:bg-red-700"
            >
              Пронајди клучен момент
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawDetail;
