import Depression from "../../src/assets/projects/Depression.png";
import CompanyCam from "../../src/assets/projects/CompanyCam.png";
import ZmSolutions from "../../src/assets/projects/ZmSolutions.png";
import Nexacoin from "../../src/assets/projects/Nexacoin.png";
import Chat from "../../src/assets/projects/Chat.png";
import LiveTrack from "../../src/assets/projects/LiveTrack.png";
import Matcher from "../../src/assets/projects/matcher.png";
import Matcher2 from "../../src/assets/projects/matcher2.png";
import Farmer from "../../src/assets/projects/farmer.png";
import Finance from "../../src/assets/projects/Finance.png";
import Carwash from "../../src/assets/projects/Carwash.png";
import Hematoscan from "../../src/assets/projects/Hematoscan.png";
import Freelancing from "../../src/assets/projects/Freelancing.png";
import PickDrop from "../../src/assets/projects/PickDrop.png";
import Payfox from "../../src/assets/projects/payfox.png";
import Squidcoin from "../../src/assets/projects/SquidCoin.png";
import SmartLive from "../../src/assets/projects/SmartLive.png";
import Fluxbeam from "../../src/assets/projects/Fluxbeam.png";
import Sports from "../../src/assets/projects/Sports.png";
import Ghost from "../../src/assets/projects/Ghost.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Defeat Depression",
    projectDesc:
      "A premium mental wellness app designed to empower users on their journey to overcome depression. Utilizing interactive tools, real-time tracking, and a calming user interface, this app offers personalized care at your fingertips. Powered by Firebase for secure data management.",
    tags: ["React Native", "Firebase", "Mental Health", "Interactive UI"],
    color: "#172752", // Aquamarine Green
    fontColor: "#ffffff", // White
    image: Depression,
  },
  {
    id: 2,
    projectName: "CompanyCam",
    projectDesc:
      "An elite communication and project management tool tailored for top-tier corporations.User can come and after creating account deal with friends and projects add and delete. This app ensures seamless collaboration with real-time syncing, Firebase integration, and a high-end, modern UI that enhances productivity.",
    tags: ["React Native", "Firebase", "Enterprise", "Collaboration"],
    color: "#0069D1", // Coral Red
    fontColor: "#ffffff", // White
    image: CompanyCam,
  },
  {
    id: 3,
    projectName: "ZM Solutions",
    projectDesc:
      "An advanced API platform offering cutting-edge real-time live tracking for businesses. With a sleek UI, dynamic map integration, and Firebase support, ZM Solutions ensures that users experience the future of tracking technology with flawless precision.Its all based on tracking cars and their live location.This app clone from Live Track app.",
    tags: [
      "React Native",
      "API Integration",
      "Map Integration",
      "Firebase",
      "Live Tracking",
      "Premium UI",
    ],
    color: "#00203f", // Bright Orange
    fontColor: "#ffffff", // White
    image: ZmSolutions,
  },
  {
    id: 4,
    projectName: "Nexa Coin",
    projectDesc:
      "The ultimate cryptocurrency trading app, featuring elegant UI and top-tier functionality for traders. Nexa Coin revolutionizes crypto trading with smooth animations, custom designs, and intuitive user experiences—all built from scratch without Figma.",
    tags: ["React Native", "Cryptocurrency", "Custom Design", "Animations"],
    color: "#FF8C00", // Vibrant Purple
    fontColor: "#ffffff", // White
    image: Nexacoin,
  },
  {
    id: 5,
    projectName: "Social App",
    projectDesc:
      "A luxury social networking app crafted for connecting users around the world with advanced real-time chat, AWS-backend services, and an interactive map-based friend locator. Designed for scalability, reliability, and high-performance.i will just design make it and integrate apis in frontend",
    tags: [
      "React Native",
      "Social Networking",
      "Map Integration",
      "Real-time Chat",
      "AWS",
      "Redis",
      "Premium Features",
    ],
    color: "#FF8C00", // Electric Purple
    fontColor: "#ffffff", // White
    image: Matcher2,
  },
  {
    id: 6,
    projectName: "Farmer",
    projectDesc:
      "A cutting-edge agriculture management app that empowers farmers with real-time crop map and select area and AI-based chatbot support. Featuring advanced map integration and API services, Farmer is the ultimate solution for modern agriculture.",
    tags: [
      "React Native",
      "Agriculture",
      "AI Integration",
      "Map Integration",
      "API Services use Swagger",
    ],
    color: "#00796B", // Green
    fontColor: "#ffffff", // White
    image: Farmer,
  },
  {
    id: 7,
    projectName: "Matcher",
    projectDesc:
      "A sophisticated social networking platform designed to match users based on shared interests. Equipped with Firebase authentication, real-time chat, and stunning custom animations,and notifications, Matcher elevates social interaction to an entirely new level.",
    tags: [
      "React Native",
      "Social Networking",
      "Real-time Chat",
      "Custom Animations",
      "Firebase",
      "Deep Linking",
    ],
    color: "#FF8E00", // Dark Blue
    fontColor: "#ffffff", // White
    image: Matcher,
  },
  {
    id: 8,
    projectName: "Car Tracking App",
    projectDesc:
      "An advanced car tracking app available on the Play Store, offering precise real-time tracking with the ability to toggle live updates on and off. Experience smooth animated markers on an integrated map, powered by Firebase for seamless performance. Designed for top-tier data visualization, this app ensures high-quality user experience with cutting-edge animations and responsive controls.",
    tags: [
      "React Native",
      "Car Tracking",
      "Map Integration",
      "Live Tracking On/Off",
      "Firebase",
      "Premium Animations",
      "PHP Backend",
    ],
    color: "#00C9A7", // Aqua Green
    fontColor: "#ffffff", // White
    image: LiveTrack,
  },
  {
    id: 9,
    projectName: "Finance",
    projectDesc:
      "A sophisticated finance management app designed for high-level professionals. With intuitive graphs, accounting tools, and real-time data entry, Finance offers seamless user experiences supported by Firebase’s robust backend system.",
    tags: [
      "React Native",
      "Finance Management",
      "Graphs",
      "Firebase",
      "Real-time Calculations",
    ],
    color: "#4CAF50aa", // Teal
    fontColor: "#ffffff", // White
    image: Finance,
  },
  {
    id: 10,
    projectName: "Chat AIs",
    projectDesc:
      "An innovative social app where users interact with AI-generated personalities in real-time. Backed by Firebase and crafted with engaging animations, Chat AIs provides a personalized, futuristic chat experience like no other.",
    tags: ["React Native", "AI Integration", "Real-time Chat", "Firebase"],
    color: "#FF655B", // Sunflower Yellow
    fontColor: "#ffffff", // White
    image: Chat,
  },
  {
    id: 11,
    projectName: "Hematoscan",
    projectDesc:
      "A next-gen medical app for generating blood test reports, designed with advanced scanning tools and a user-friendly interface for efficient diagnostics. Hematoscan is your go-to solution for high-quality medical report generation.I will just make TextRecognition system and implement on it",
    tags: [
      "React Native",
      "Medical Technology",
      "Scanning Tools",
      "Report Generation",
    ],
    color: "#005D7Baa", // Red
    fontColor: "#ffffff", // White
    image: Hematoscan,
  },
  {
    id: 12,
    projectName: "Car Wash",
    projectDesc:
      "A premium car wash booking app featuring visually stunning Lottie animations and a user-friendly interface. Car Wash offers a smooth and modern experience for users to book services effortlessly.",
    tags: ["React Native", "Lottie Animations", "Booking System", "Modern UI"],
    color: "#226827", // Light Blue
    fontColor: "#ffffff", // White
    image: Carwash,
  },
  {
    id: 13,
    projectName: "Freelancing",
    projectDesc:
      "An exclusive freelancing platform with a sophisticated design, job listings, user profiles, and engaging Lottie animations. Built on Firebase, Freelancing offers a seamless user experience for professionals.",
    tags: ["React Native", "Freelancing", "Custom UI", "Lottie Animations"],
    color: "#4BAAC8", // Orange
    fontColor: "#ffffff", // White
    image: Freelancing,
  },
  {
    id: 14,
    projectName: "Pick Drop",
    projectDesc:
      "A luxury app for booking pick-up and drop-off services, integrated with real-time map tracking and vibrant Lottie animations for a high-end user experience. Designed to provide efficiency and style.",
    tags: ["React Native", "Real-time Maps", "Custom UI implementation"],
    color: "#CB676B", // Deep Purple
    fontColor: "#ffffff", // White
    image: PickDrop,
  },
  {
    id: 15,
    projectName: "Squid Coin",
    projectDesc:
      "A premium cryptocurrency app, designed with stunning UI and Tailwind CSS for a seamless trading experience.i will make this design both Reactjs & React Native. Squid Coin offers real-time data and a user-friendly interface for cryptocurrency enthusiasts.",
    tags: [
      "React Native",
      "React JS",
      "Cryptocurrency",
      "Tailwind CSS",
      "Real-time Data",
    ],
    color: "#2C3649", // Indigo
    fontColor: "#ffffff", // White
    image: Squidcoin,
  },
  {
    id: 16,
    projectName: "Payfox",
    projectDesc:
      "A simple yet powerful payment gateway app that offers secure transactions with an elegant, streamlined UI. Payfox delivers top-tier performance and user satisfaction, ensuring effortless payments.",
    tags: ["React Native", "UI Design"],
    color: "#512AA1", // Amber
    fontColor: "#ffffff", // White
    image: Payfox,
  },
  {
    id: 17,
    projectName: "Smart Live",
    projectDesc:
      "A high-tech live streaming platform designed for real-time updates and dynamic content delivery. With Firebase integration and custom animations, Smart Live offers a flawless, immersive live experience.",
    tags: ["React Native", "Custom Animations", "UI Design"],
    color: "#FFF1D7", // Pink
    fontColor: "#000", // White
    image: SmartLive,
  },
  {
    id: 18,
    projectName: "Fluxbeam",
    projectDesc:
      "Fluxbeam premium cryptocurrency app,Fluxbeam offers Firebase authentication, data storage, and beautifully designed graphs, making it the go-to solution for modern researchers.",
    tags: ["React JS", "UI Design"],
    color: "#000", // Cyan
    fontColor: "#ffffff", // White
    image: Fluxbeam,
  },
  {
    id: 19,
    projectName: "Sports Tracking",
    projectDesc:
      "A premium sports designed to deliver real-time performance audio video and live Video Streaming with smooth transitions. Built with Firebase for seamless data integration and an elegant user experience.",
    tags: ["React Native", "UI Design"],
    color: "#3F72AF", // Teal
    fontColor: "#ffffff", // White
    image: Sports,
  },
  {
    id: 20,
    projectName: "Ghost Agency",
    projectDesc:
      "Ghost Agency is a multifaceted platform designed to deliver high-quality services across mobile and web. Leveraging React Native and WordPress, Ghost provides seamless integration of dynamic animations, custom UI design, and a powerful WebView experience. Whether for app development, web solutions, or premium design services, Ghost Agency stands out with its cutting-edge tech stack and innovative approach, offering top-tier solutions to clients.",
    tags: [
      "React Native",
      "UI Design",
      "WebView",
      "Word Press",
      "Custom Solutions",
    ],
    color: "#006400", // Dark Green
    fontColor: "#ffffff", // White
    image: Ghost,
  },
];
