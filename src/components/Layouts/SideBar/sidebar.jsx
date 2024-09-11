import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../assets/icons";
function SideBar() {
  return (
    <div className="sticky top-20 h-[45vh] left-0 w-[100px] items-center flex-col gap-2 hidden sm:flex ">
      <Link
        to="/"
        className="font-Quicksand flex items-center flex-col gap-1 py-2 px-1 w-[70px] bg-[#4D4D4D] rounded-[13px] cursor-pointer"
      >
        <img src={icons.home} alt="" />
        <span className="text-white text-xs font-medium">Trang chủ</span>
      </Link>
      <Link
        to="/"
        className="font-Quicksand flex items-center flex-col gap-1 py-2 px-1 w-[70px] hover:bg-[#4D4D4D] rounded-[13px] cursor-pointer"
      >
        <img src={icons.refesh} alt="" />
        <span className="text-white text-xs font-medium">Mới nhất</span>
      </Link>
      <Link
        to="/"
        className="font-Quicksand flex items-center flex-col gap-1 py-2 px-1 w-[70px] hover:bg-[#4D4D4D] rounded-[13px] cursor-pointer"
      >
        <img src={icons.bookmark} alt="" />
        <span className="text-white text-xs font-medium">Kho lưu trữ</span>
      </Link>
      <Link
        to="/"
        className="font-Quicksand flex items-center flex-col gap-1 py-2 px-1 w-[70px] hover:bg-[#4D4D4D] rounded-[13px] cursor-pointer"
      >
        <img src={icons.cloud} alt="" />
        <span className="text-white text-xs font-medium">Lịch sử</span>
      </Link>
      <Link
        to="/"
        className="font-Quicksand flex items-center flex-col gap-1 py-2 px-1 w-[70px] hover:bg-[#4D4D4D] rounded-[13px] cursor-pointer"
      >
        <img src={icons.caterogy} alt="" />
        <span className="text-white text-xs font-medium">Thể loại</span>
      </Link>
    </div>
  );
}

export default SideBar;
