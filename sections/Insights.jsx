"use client";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { motion } from "framer-motion";
import { insights } from "../constants";
import { TypingText, ExploreCard, TitleText, InsightCard } from "../components";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px] ">
        {insights.map((sight, index) => (
          <InsightCard key={`insight-${index}`} {...sight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
