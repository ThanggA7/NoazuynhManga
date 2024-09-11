import React from "react";
import { img } from "../../../assets/img";
import { icons } from "../../../assets/icons";
function Footer() {
  return (
    <div className="bg-[#3F3F3F] py-5 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 grid gap-7  px-3">
        <div>
          <p className="text-white text-[23px] font-Quicksand font-semibold">
            Ủng hộ tôi nhé ^^
          </p>
          <img
            className="lg:w-[296px] lg:h-[296px] object-cover mt-3 rounded-2xl"
            src={img.qr}
            alt=""
          />
        </div>
        <div>
          <p className="text-white text-[23px] font-Quicksand font-semibold">
            Nguồn truyện tranh <a className="text-[#4EB981]" href="otruyen.cc">otruyen.cc</a>
          </p>
          <p className="text-white text-[14px] font-Quicksand  mt-3">
            Tất cả truyện tranh đều được tổng hợp từ nhiều nguồn uy tín và đáng
            tin cậy nhằm mang đến cho bạn kho nội dung phong phú và chất lượng
            nhất. Chúng tôi luôn tôn trọng quyền sở hữu trí tuệ và cố gắng đảm
            bảo rằng tất cả các tác phẩm đều tuân thủ quy định về bản quyền. Nếu
            bạn là tác giả hoặc đại diện pháp lý và nhận thấy nội dung nào trên
            trang web vi phạm bản quyền, xin vui lòng liên hệ với chúng tôi.
            Chúng tôi cam kết sẽ xem xét và giải quyết vấn đề một cách nhanh
            chóng và hợp lý, đảm bảo quyền lợi chính đáng của tất cả các bên
            liên quan.
          </p>
        </div>
        <div>
          <p className="text-white text-[23px] font-Quicksand font-semibold">
            Liên hệ với tôi
          </p>
          <a
            className="flex items-center text-white hover:text-[#4EB981] text-medium gap-2"
            href="#"
          >
            <img src={icons.facebook} alt="facebook" />
            Facebook
          </a>

          <a
            className="flex items-center text-white hover:text-[#4EB981] text-medium gap-2 mt-2"
            href="#"
          >
            <img src={icons.instagram} alt="facebook" />
            Instagram
          </a>
        </div>
      </div>
      <p className="text-center text-white font-Quicksand font-semibold sm:mt-0 mt-3">
        Tôi cung cấp web đọc truyện miễn phí, nên các bạn hãy tôn trọng công sức
        và công sức của tôi. Xin cảm ơn!
      </p>
      <a
        className="text-center block text-[#4EB981] text-[18px] font-Inter font-semibold"
        href="#!"
      >
        Bản quyền thuộc noazuynh
      </a>
    </div>
  );
}

export default Footer;
