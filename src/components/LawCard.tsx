import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

interface LawCardProps {
  title: string;
  description: string;
  timePublished: string; // Include time published if needed
}

const LawCard: React.FC<LawCardProps> = ({ title, description, timePublished }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-gray-200 p-5 rounded-lg shadow-lg w-full mb-4 flex items-center justify-between">
      <div className='w-full'>
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <div><p className="text-sm text-gray-500 flex justify-end">Објавено пред {timePublished} минути</p></div>
      </div>
      <button onClick={toggleLike} className="text-2xl">
        <FaHeart className={isLiked ? "text-red-500" : "text-gray-400"} />
      </button>
    </div>
  );
};

export default LawCard;
