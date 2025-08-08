"use client";
import Image from "next/image";
import Me2 from "../../assets/me/me2.jpeg";
import "./about.css";
import Button from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

function Apresentation() {
  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-gray-200 dark:bg-black">
      <div className="w-full h-3/4 bg-slate-200 dark:bg-black flex flex-col md:flex-row md:justify-around md:items-center gap-20">
        <div className="image-container relative inline-block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={Me2}
              alt="Matheus Rafael"
              width={286}
              height={286}
              className="rounded-full mx-auto shadow-lg"
            />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <motion.h1
            className="text-4xl text-center font-bold dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Matheus Rafael
          </motion.h1>
          <p className="text-center text-lg mt-2 dark:text-gray-200">
            Desenvolvedor Full-Stack
          </p>
          <Link href="/sobre">
            <Button>Sobre mim</Button>
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Apresentation;
