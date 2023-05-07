"use client";
import { footerVariants } from "../utils/motion";
import styles from "../styles";
import { motion } from "framer-motion";
import { socials } from "../constants";
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          type="button"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="object-contain w-[24px] h-[24px]"
          />
          <span className="font-normal text-[16px] text-white ">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="opacity-10 mb-[50px] h-[2px] bg-white" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Metaverse</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright @2023 - 2024 Metaverse. All rights reserved
          </p>
          <div className="flex gap-4">
            {socials.map((icons) => (
              <img
                key={icons.name}
                src={icons.url}
                alt="icons"
                className="w-[24px] h-[24px] object-contain cursor-pointer "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
