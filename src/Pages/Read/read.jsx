import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Read() {
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    try {
      const imageChapter = async () => {
        const res = await fetch(
          `https://sv1.otruyencdn.com/v1/api/chapter/${id}`
        );

        const resData = await res.json();

        setName(resData.data.item);
        setUrl(resData.data.item.chapter_path);
        setImage(resData.data.item.chapter_image);
      };

      imageChapter();
    } catch (error) {}
  }, [id]);
  console.log(name.chapter_name);
  return (
    <div className="w-full relative">
         <div className="w-full h-[200px] bg-[#4D4D4D] rounded-lg ">
        <h1 className="text-center text-[24px] text-white font-bold pt-3">
          {name.comic_name} - Chương {name.chapter_name}
        </h1>
        <p className="text-center text-white">
          Nếu truyện bị lỗi vui lòng liên hệ qua Telegram:@manganozuynh
        </p>

        <div className="flex items-center justify-center gap-2 mt-10">
          <button className="min-w-[100px] px-4 py-1 bg-[#4EB981] text-white rounded-lg">
            Chương trước
          </button>
          <button className="min-w-[100px] px-4 py-1 bg-[#4EB981] text-white rounded-lg">
            Chương sau
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-4">
        {image.map((image, index) => {
          return (
            <img
              key={index}
              src={`https://sv1.otruyencdn.com/${url}/${image.image_file}`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default Read;
