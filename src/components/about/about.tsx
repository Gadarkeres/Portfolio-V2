'use client'
import Image from 'next/image';
import Me2 from '../../assets/me/me2.jpeg';
import './about.css'; 

function About() {
    return (
        <section className="flex justify-center items-center w-full min-h-screen bg-gray-200 dark:bg-black">
            <div className="w-full h-3/4 bg-slate-200 dark:bg-black flex flex-col md:flex-row md:justify-around md:items-center gap-20">
                <div className="image-container relative inline-block">
                    <Image
                        src={Me2}
                        alt="Matheus Rafael"
                        width={286}
                        height={286}
                        className="rounded-full mx-auto shadow-lg"
                    />
                </div>
                <div>
                    <h1 className="text-4xl text-center font-bold dark:text-gray-200">Matheus Rafael</h1>
                    <p className="text-center text-lg mt-2 dark:text-gray-200">Desenvolvedor Front-end</p>
                    
                </div>
            </div>
            <div>
            </div>
        </section>
    );
}

export default About;
