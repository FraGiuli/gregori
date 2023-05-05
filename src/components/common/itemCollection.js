import Link from "next/link";
import { useState } from "react";
import { Modal } from "@nextui-org/react";
import SliderNormal from "../common/SliderNormal";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMapPin } from "react-icons/hi2";

const ItemCollection = ({ text, img, images, ...otherProps }) => {
  const bgurl = `url('${img}')`;
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <button
        onClick={handler}
        {...otherProps}
        className="duration-200 hover:shadow-2xl flex items-end text-slate-900 text-center rounded-lg w-full md:w-[340px] h-[340px]  overflow-hidden cursor-pointer bg-cover  bg-center"
        style={{ backgroundImage: bgurl, border: "1px solid #F1F1F1" }}
      >
        <div className="flex items-center justify-center p-4 text-white bg-slate-900 bg-opacity-80 rounded-b relative w-full">
          <p className="text-xl uppercase">{text}</p>
        </div>
      </button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="100%"
        style={{ maxWidth: "900px", margin: "auto" }}
      >
        <Modal.Body>
          <div align="center" className="pt-[20px]">
            <SliderNormal images={images} />
          </div>
          <div className="flex flex-wrap justify-center md:gap-12 gap-8 text-4xl px-[8px]">
            <a href="tel:+39024817176">
              <AiFillPhone />
            </a>
            <a href="mailto:igregori.customer@gmail.com">
              <MdMail />
            </a>

            <a href="https://www.facebook.com/IGregoriMilano" target="_blank">
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/igregorimilano/?hl=it"
              target="_blank"
            >
              <RiInstagramFill />
            </a>
            <Link href="/#sedi" onClick={closeHandler}>
              <HiMapPin />
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ItemCollection;
