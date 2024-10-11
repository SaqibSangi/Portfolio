import mic from "../../src/assets/images/mic.jpg";
import hwc from "../../src/assets/images/hwc.jpg";

export const achievementData = {
  bio: "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler",
  achievements: [
    {
      id: 1,
      title: "React Native Course Completion",
      details:
        "Completed a comprehensive React Native course from Hello World Tech.",
      date: "Sep 15, 2023",
      field: "Mobile App Development",
      image: hwc, // Add your actual certificate link here
    },
    {
      id: 2,
      title: "MERN Stack Course Completion",
      details:
        "Completed the MERN stack course from Mercury Sols, mastering full-stack web development.",
      date: "Oct 10, 2023",
      field: "Full Stack Development",
      image: mic, // Add your actual certificate link here
    },
  ],
};
