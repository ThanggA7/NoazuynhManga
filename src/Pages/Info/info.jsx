import React, { useEffect, useState } from "react";
import { icons } from "../../assets/icons";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
function Info() {
  const { slug } = useParams();
  const [info, getInfo] = useState([]);
  const [chap, setChap] = useState([]);
  useEffect(() => {
    const Info = async () => {
      try {
        const res = await fetch(
          `https://otruyenapi.com/v1/api/truyen-tranh/${slug}`
        );
        const resData = await res.json();

        getInfo(resData.data.item);
        setChap(resData.data.item.chapters[0].server_data);
      } catch (error) {}
    };

    Info();
  }, [slug]);

  console.log(info);

  const date = moment(info.updatedAt, "YYYY-MM-DDTHH:mm:ssZ").format(
    "DD MMM, YYYY"
  );
  return (
    <div className="w-full px-3">
      <div className="p-3 min-h-[350px] bg-[#4D4D4D] rounded-xl lg:flex flex-col lg:gap-[35px] lg:p-5 lg:flex-row">
        <img
          className="lg:w-[230px] lg:h-[300px] object-cover w-full rounded-lg"
          src={`https://otruyenapi.com/uploads/comics/${info.thumb_url}`}
          alt=""
        />

        <div>
          <h1 className="text-white font-Quicksand text-[25px] font-semibold">
            {info.name}
          </h1>

          <div className="flex items-center gap-2 mt-1">
            <Link
              className="flex items-center gap-1 py-1 px-3 bg-[#4EB981] hover:bg-[#4eb982bb] rounded-md "
              to="/"
            >
              <img src={icons.eyealt} alt="" />
              <span className="text-white font-Quicksand sm:text-[17px] text-[12px] font-medium">
                Đọc ngay
              </span>
            </Link>
            <Link
              className="flex items-center gap-1 py-1 px-3 bg-[white] hover:bg-[#ffffffba]  rounded-md  "
              to="/"
            >
              <img src={icons.info} alt="" />
              <span className="text-black font-Quicksand sm:text-[17px] text-[12px] font-medium">
                Chi tiết
              </span>
            </Link>
          </div>
          <div>
            <p className="text-[#4EB981] lg:text-[18px] text-[16px] font-medium mt-[5px]">
              Tác giả: <span className="text-white">{info.author}</span>
            </p>
            <p className="text-[#4EB981] lg:text-[18px] text-[16px] font-medium mt-[5px]">
              Ngày cập nhật:
              <span className="text-white"> {date}</span>
            </p>
            <p className="text-[#4EB981] lg:text-[18px] text-[16px] font-medium mt-[5px]">
              Thể loại:
            </p>
            <p className="text-[#4EB981] lg:text-[18px] text-[16px] font-medium mt-[5px]">
              Nội dung:
              <span
                className="text-white lg:text-[16px] text-[14px] font-Quicksand font-lightl"
                dangerouslySetInnerHTML={{ __html: info.content }}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <img src={icons.list} alt="" />
          <p className="text-[18px] text-white font-bold">Danh sách chương</p>
        </div>

        <div>
          <a className="flex text-[18px] text-white items-center" href="#!">
            Xem thêm
            <img src={icons.chevronright} alt="" />
          </a>
        </div>
      </div>

      <div className="w-full h-[40px]  mt-4 rounded-[8px] border  flex items-center ">
        <input
          type="number"
          placeholder="Nhập số chương cần tìm..."
          className="w-full h-full rounded-[8px] bg-transparent text-white font-Quicksand text-[18px] outline-none p-2 "
        />

        <button className="p-2">
          <img src={icons.search} alt="" />
        </button>
      </div>

      <div className="mt-3">
        <ul className="grid xl:grid-cols-12 lg:grid-cols-6 sm:grid-cols-5 grid-cols-3 gap-3 ">
          {chap.map((chap, index) => {
            return (
              <li
                key={index}
                className=" bg-[#11B981] rounded-[6px] flex items-center justify-center w-full "
              >
                <a
                  className="p-2  text-white font-Quicksand text-[14px] "
                  href={`/read/${info.slug}/${chap.chapter_api_data.slice(42)}`}
                >
                  Chương {chap.chapter_name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Info;
