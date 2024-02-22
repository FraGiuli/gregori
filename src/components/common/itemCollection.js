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
        className="duration-200 hover:shadow-2xl flextext-slate-900 text-center rounded-lg w-full md:w-[340px]  overflow-hidden cursor-pointer bg-cover  bg-center"
        // style={{ backgroundImage: bgurl, border: "1px solid #D9D3D3" }}
      >
        <img
          className="rounded-t"
          style={{
            objectFit: "cover",
            width: "100%",
            maxHeight: "550px",
          }}
          alt="Slide Image"
          src={img}
        />
        <div className="flex items-center justify-center p-4 text-white bg-slate-900 rounded-b relative w-full">
          <p className="text-2xl title-font ">{text}</p>
        </div>
      </button>
      <Modal
        preventClose
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="100%"
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "#D9D3D3",
        }}
      >
        <Modal.Body>
          <div align="center" className="pt-[20px]">
            <SliderNormal images={images} />
          </div>
          <div className="flex flex-wrap justify-center md:gap-12 gap-8 px-[8px]">
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
