import React from 'react';
import { useRouter } from 'next/router';

const VideoThumbnail = ({ session, date, videoUrl, thumbnail }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/video-details',
      query: { session, date, videoUrl }
    });
  };

  return (
    <div className="p-4 bg-white">
      <div className="relative flex items-center rounded-3xl justify-center h-40 border-4 border-red-800">
        <img src={thumbnail} alt="Video Thumbnail" className="w-full h-full object-cover rounded-3xl" />
        <div className="absolute bg-red-800 rounded-full w-16 h-16 flex items-center justify-center">
          <button className="text-white text-4xl" onClick={handleClick}>&#9658;</button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">{`Седница за ${session}`}</p>
        <p className="text-gray-500">{`Датум: ${date}`}</p>
      </div>
    </div>
  );
};

export default VideoThumbnail;
