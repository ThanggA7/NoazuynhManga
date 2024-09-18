import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { icons } from "../../../assets/icons";
import useFetch from "../../../hooks/useFetch";
import "swiper/css";
function Content() {
  const data = useFetch(
    "https://otruyenapi.com/v1/api/danh-sach/truyen-moi?page=2"
  );
  const data2 = useFetch(
    "https://otruyenapi.com/v1/api/danh-sach/dang-phat-hanh?page=11"
  );
  const data3 = useFetch(
    "https://otruyenapi.com/v1/api/danh-sach/hoan-thanh?page=1"
  );
  const [commic, setCommic] = useState([]);
  useEffect(() => {
    const ContentAPI = async () => {
      try {
        const res = await fetch("https://otruyenapi.com/v1/api/home");
        const resData = await res.json();
        setCommic(resData.data.items);
      } catch (error) {}
    };
    ContentAPI();
  }, []);

  return (
    <div className="w-full h-full overflow-auto px-[15px]">
      <div>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[320px]"
        >
          {commic.map((data, index) => {
            return (
              <SwiperSlide
                key={index}
                className="rounded-[12px] bg-[#c4c0dc2e] p-7"
              >
                <div className="flex items-center gap-5">
                  <div className="w-[180px] h-[250px]">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://otruyenapi.com/uploads/comics/${data.thumb_url}`}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white text-[35px] font-Quicksand font-semibold">
                      Chương {data.chaptersLatest[0].chapter_name}
                    </span>
                    <div className="whitespace-nowrap overflow-hidden w-[215px] sm:w-full text-ellipsis">
                      <span className="text-[#4EB981] text-[30px] font-Quicksand font-medium white  ">
                        {data.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 flex-wrap">
                      {data.category.map((category, index) => {
                        return (
                          <Link
                            key={index}
                            className="py-[2px] px-2 border-2 border-white hover:border-[#4BE981] text-white hover:text-[#4BE981] font-bold font-Quicksand rounded-lg"
                            to="/"
                          >
                            {category.name}
                          </Link>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <Link
                        className="flex items-center gap-1 py-1 px-3 bg-[#4EB981] hover:bg-[#4eb982bb] rounded-md "
                        to={`/read/${data.slug}`}
                      >
                        <img src={icons.eyealt} alt="" />
                        <span className="text-white font-Quicksand sm:text-[17px] text-[12px] font-medium">
                          Đọc ngay
                        </span>
                      </Link>
                      <Link
                        className="flex items-center gap-1 py-1 px-3 bg-[white] hover:bg-[#ffffffba]  rounded-md  "
                        to={`/info/${data.slug}`}
                      >
                        <img src={icons.info} alt="" />
                        <span className="text-black font-Quicksand sm:text-[17px] text-[12px] font-medium">
                          Chi tiết
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div>
        <div className="bg-[#4D4D4D] mt-4 rounded-lg">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <img src={icons.list} alt="" />
              <span className="text-white font-semibold text-[16px] font-Quicksand">
                Truyện Mới
              </span>
            </div>

            <Link
              className="flex items-center text-white font-semibold text-[16px] font-Quicksand"
              to="/"
            >
              Xem thêm
              <img src={icons.chevronright} alt="" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-6">
          {data.map((commics, index) => {
            return (
              <Link to={`/info/${commics.slug}`} key={index}>
                <img
                  className="object-cover w-full h-[258px] rounded-lg border border-white"
                  src={`https://otruyenapi.com/uploads/comics/${commics.thumb_url}`}
                  alt=""
                />
                <p className="text-white text-[18px] font-medium font-Quicksand whitespace-nowrap overflow-hidden text-ellipsis">
                  {commics.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <div className="bg-[#4D4D4D] mt-4 rounded-lg">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <img src={icons.list} alt="" />
              <span className="text-white font-semibold text-[16px] font-Quicksand">
                Truyện tranh đang phát hành
              </span>
            </div>

            <Link
              className="flex items-center text-white font-semibold text-[16px] font-Quicksand"
              to="/"
            >
              Xem thêm
              <img src={icons.chevronright} alt="" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-6">
          {data2.map((commics, index) => {
            return (
              <Link to={`/info/${commics.slug}`} key={index}>
                <img
                  className="object-cover w-full h-[258px] rounded-lg border border-white"
                  src={`https://otruyenapi.com/uploads/comics/${commics.thumb_url}`}
                  alt=""
                />
                <p className="text-white text-[18px] font-medium font-Quicksand whitespace-nowrap overflow-hidden text-ellipsis">
                  {commics.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <div className="bg-[#4D4D4D] mt-4 rounded-lg">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <img src={icons.list} alt="" />
              <span className="text-white font-semibold text-[16px] font-Quicksand">
                Truyện tranh hoàn thành
              </span>
            </div>

            <Link
              className="flex items-center text-white font-semibold text-[16px] font-Quicksand"
              to="/"
            >
              Xem thêm
              <img src={icons.chevronright} alt="" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-6">
          {data3.map((commics, index) => {
            return (
              <Link to={`/info/${commics.slug}`} key={index}>
                <img
                  className="object-cover w-full h-[258px] rounded-lg border border-white"
                  src={`https://otruyenapi.com/uploads/comics/${commics.thumb_url}`}
                  alt=""
                />
                <p className="text-white text-[18px] font-medium font-Quicksand whitespace-nowrap overflow-hidden text-ellipsis">
                  {commics.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
