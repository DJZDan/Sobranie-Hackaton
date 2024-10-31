import { useRouter } from "next/router";

const VideoDetails = () => {
  const router = useRouter();
  const { session, date, videoUrl } = router.query;

  return (
    <div className="p-12">
      <div className="flex gap-10">
        <div className="border-4 border-red-800 w-[70%] rounded-lg">
        <iframe
        width="100%"
          height="480"
          src={videoUrl}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
        <div className="rounded-lg w-[30%]">
          <div className="bg-red-800 rounded-t-lg">
            <h1 className="text-white">Ова видео содржи</h1>
          </div>
          <div className="bg-gray-300">
            <div className="flex gap-5">
              <button className="text-white bg-red-800"></button>
              <button className="text-white bg-red-800"></button>
              <button className="text-red-800 bg-white"></button>
            </div>
            <div className="w-full m-auto border-[1px] border-black my-8"></div>
          </div>
          <div className="h-72">
             
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-red-800 mt-14 rounded-xl text-white text-3xl">{session}</div>
    </div>
  );
};

export default VideoDetails;
