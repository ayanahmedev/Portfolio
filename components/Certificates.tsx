import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Certificates = () => {
  const certificates = [
    // --- WSClub Tech Certificates ---
    {
      title: "WSClub Tech – Python",
      des: "Learned basic Python programming and practiced simple projects.",
      link: "https://www.wscubetech.com/verify-certificate/MSTGHWS2025M2016617564",
      color: "bg-emerald-900",
      colors: [
        [110, 231, 183],
        [52, 211, 153],
      ],
      order: "WS 1",
    },
    {
      title: "WSClub Tech – AI SEO ",
      des: "Learned the basics of AI-powered SEO and how to improve website rankings.",
      link: "https://www.wscubetech.com/verify-certificate/OBYZ3WS2025M2106789846",
      color: "bg-indigo-900",
      colors: [
        [165, 180, 252],
        [199, 210, 254],
      ],
      order: "WS 2",
    },

    // --- Udemy Certificates ---
    {
      title: "Udemy – Ethical hacking ",
      des: "Beginner pen-testing: learned to find and report common vulnerabilities",
      link: "https://www.udemy.com/certificate/UC-70838ef0-fc6d-4f3a-aa05-10df616d79ad",
      color: "bg-pink-900",
      colors: [
        [255, 200, 221],
        [244, 114, 182],
      ],
      order: "U 1",
    },
    {
      title: "Udemy – Ethical hacking part 2 ",
      des: "Network basics & security: traffic, basics of defence and monitoring.",
      link: "https://www.udemy.com/certificate/UC-8dbe1a26-36b1-41cd-a614-297b1b99c65f",
      color: "bg-yellow-700",
      colors: [
        [253, 224, 71],
        [250, 204, 21],
      ],
      order: "U 2",
    },
    {
      title: "Udemy – Ethical hacking 3",
      des: "Intro to ethical hacking: lab-based practice on safe test environments..",
      link: "https://www.udemy.com/certificate/UC-b2cda55f-0796-441b-92e6-a40237c60db7",
      color: "bg-sky-700",
      colors: [
        [125, 211, 252],
        [59, 130, 246],
      ],
      order: "U 3",
    },
    {
      title: "Udemy – Ethical hacking 4 ",
      des: "Web app security fundamentals: common bugs and secure fixes",
      link: "https://www.udemy.com/certificate/UC-b2cda55f-0796-441b-92e6-a40237c60db7",
      color: "bg-gray-800",
      colors: [
        [209, 213, 219],
        [107, 114, 128],
      ],
      order: "U 4",
    },
    {
      title: "Udemy – Ethical hacking 5",
      des: "Hands-on with security tools and learning the security mindset",
      link: "https://www.udemy.com/certificate/UC-95bddfbf-e08c-4bd4-94e2-3eb148361de2",
      color: "bg-purple-900",
      colors: [
        [216, 180, 254],
        [192, 132, 252],
      ],
      order: "U 5",
    },
  ];

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row flex-wrap items-center justify-center w-full gap-6">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <Card
              title={cert.title}
              icon={<AceternityIcon order={cert.order} />}
              des={cert.des}
            >
              <CanvasRevealEffect
                animationSpeed={4}
                containerClassName={`${cert.color} rounded-3xl overflow-hidden`}
                colors={cert.colors}
              />
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

// --- Card Component ---
const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%]
          translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200
          min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>

        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>

        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

// --- Icon Components ---
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
