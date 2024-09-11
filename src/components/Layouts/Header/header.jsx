import React from "react";
import { Link } from "react-router-dom";
import { img } from "../../../assets/img";
import { icons } from "../../../assets/icons";
function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-3  border-b border-[#696969b4] sticky top-0 bg-[#282828] z-50">
      <div className="w-4 h-4 bg-white block lg:hidden"></div>
      <Link to="/" className="flex items-center gap-2">
        <img
          className="w-[40px] h-[40px] object-cover rounded hidden lg:block"
          src={img.logo}
          alt=""
        />
        <span className="font-Quicksand font-bold text-[#4EB981] text-[25px]">
          NoazManga
        </span>
      </Link>
      <div className="w-[420px] h-[40px] border-2 border-solid border-[#808080] rounded-[8px]  items-center hidden lg:flex">
        <input
          className="w-full h-full outline-none bg-transparent text-white p-3 font-Quicksand"
          type="text"
          placeholder="Tìm kiếm truyện..."
        />
        <a className="p-1" href="#">
          <img className="w-[32px] h-[24px]  " src={icons.search} alt="" />
        </a>
      </div>

      <div className="flex items-center gap-2 ">
        <div className="w-4 h-4 bg-black rounded-full hidden lg:block"></div>

        <button
          className="bg-[#4EB981] lg:px-[12px] lg:py-1 rounded-[7px] px-2 py-1 text-[14px] text-white font-semibold"
          type="button"
        >
          Đăng nhập
        </button>
      </div>
    </header>
  );
}

export default Header;
