"use client";

import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import { motion } from "framer-motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      variants={staggerContainer}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] "
      >
        <div className="absolute w-full z-0 h-[300px]  hero-gradient rounded-tl-[140px] -top-[55px]">
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
