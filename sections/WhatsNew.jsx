"use client";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";
import { newFeatures, startingFeatures } from "../constants";
import { motion } from "framer-motion";
import { TypingText, TitleText, NewFeatures } from "../components";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| How Metaversus Works"} />
        <TitleText title={<>Get started with just few clicks</>} />
        <div className="mt-[48px] flex flex-wrap gap-[24px] justify-between">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="whats-new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
