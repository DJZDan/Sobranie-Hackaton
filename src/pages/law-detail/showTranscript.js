import { useState } from "react";
import { useRouter } from "next/router";
import VideoThumbnail from "@/components/VideoThumbnail";
const showTranscript = () => {
  const router = useRouter();
  const { title, description, timePublished } = router.query;
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;
  const totalVideos = 18;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const renderVideos = () => {
    const videos = [
      {
        session: "Седница 1",
        date: "01/01/2023",
        videoUrl: "https://www.youtube.com/embed/example1",
        thumbnail: "/images/sobranieunatre.jpg",
      },
      {
        session: "Седница 2",
        date: "02/01/2023",
        videoUrl: "https://www.youtube.com/embed/example2",
        thumbnail: "/images/sobranieunatre.jpg",
      },
      {
        session: "Седница 3",
        date: "03/01/2023",
        videoUrl: "https://www.youtube.com/embed/example3",
        thumbnail: "/images/sobranieunatre.jpg",
      },
    ];
    return videos
      .slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage)
      .map((video, i) => <VideoThumbnail key={i} {...video} />);
  };
  return (
    <div className="p-12">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 bg-red-800 text-white py-4 px-6 rounded-xl">
          Законот за 'Ime na zakon' е актуелен во овие седници
        </h1>
        <div className="flex justify-end mb-4">
          <select className="p-2 rounded-md">
            <option>Сортирај според</option> {/* Add sorting options here */}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderVideos()}
        </div>
        <div className="pagination mt-6 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`p-2 rounded-md ${
                currentPage === i + 1 ? "bg-red-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default showTranscript;
