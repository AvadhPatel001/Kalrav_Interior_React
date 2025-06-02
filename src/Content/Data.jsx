import { Mail, MapPin, Instagram } from "lucide-react";


export const NavLinks_Left = [
    { href: "#", title: "Home" },
    { href: "#", title: "Services" },
]

export const NavLinks_Rigth = [
    { href: "#", title: "About Us" },
    { href: "#", title: "Contact" },
];

export const imgSrc = [
    { src: "./src/assets/Images/Minimal/2.jpg", alt: "Minimal 2" },
    { src: "./src/assets/Images/Minimal/3.jpg", alt: "Minimal 3" },
    { src: "./src/assets/Images/Modern/2.jpg", alt: "Modern 2" },
    { src: "./src/assets/Images/Modern/3.jpg", alt: "Modern 3" },
    { src: "./src/assets/Images/Traditional/2.jpg", alt: "Traditional 2" },
    { src: "./src/assets/Images/Traditional/3.jpg", alt: "Traditional 3" }
];


export const services = [
    { icon: "./src/assets/Images/Traditional/traditional_icon.gif_.gif", title: "Traditioal Design", description: "Where tradition meets craftsmanship and celebrates heritage through rich textures and graceful lines." },
    { icon: "./src/assets/Images/Modern/modern_icon.gif_.gif", title: "Modern Design", description: "We transform spaces into stunning and personalized environments that inspire and delight." },
    { icon: "./src/assets/Images/Minimal/minimal_icon.gif_.gif", title: "Minimal Design", description: "Crafting spaces that inspire trust and evoke satisfaction - that's the hallmark of our interior design company." },
    { icon: "./src/assets/Images/3D/3d_icon.gif_.gif", title: "3D - Representation", description: "It's like the secret sauce that makes your design dreams come to life, all while keeping things practical and safe." }
];


export const displayImgs = [
    { src: "./src/assets/Images/Minimal/1.jpg", category: "Minimal" },
    { src: "./src/assets/Images/Minimal/2.jpg", category: "Minimal" },
    { src: "./src/assets/Images/Modern/1.jpg", category: "Modern" },
    { src: "./src/assets/Images/Modern/3.jpg", category: "Modern" },
    { src: "./src/assets/Images/Traditional/1.jpg", category: "Traditional" },
    { src: "./src/assets/Images/Traditional/2.jpg", category: "Traditional" },
    { src: "./src/assets/Images/3D/1.jpg", category: "3D" },
    { src: "./src/assets/Images/3D/3.jpg", category: "3D" },
];

export const vision = {
    src: "./src/assets/Images/Vision.jpg",
    alt: "Vision Of Kalrav Interior",
    title: "VISION:",
    subtitle: "FROM VISION TO REALITY!",
    description: "Our dream? To rock the interior design world by mixing practicality with pizzazz! We aim to build solid connections with clients, partners, and neighborhoods, creating a vibe of trust, creativity, and high-fives. Pledging to be eco-friendly and always upping our game, we see a future filled with spaces that are classic stunners, leaving a legacy of beauty and creativity behind."
};

export const mission = {
    src: "./src/assets/Images/Mission.jpg",
    alt: "Mission Of Kalrav Interior",
    title: "MISSION:",
    subtitle: "UNLEASH THE AWESOMENESS!",
    description: "To sprinkle a dash of magic and turn spaces into cozy havens that capture the spirit and dreams of our clients. With our love for all things creative, eye for details, and drive for perfection, our goal is to blow minds, crafting designs that jazz up lives and elevate moments to the next level."
};

export const carrierCollab = [
    { name: "AR", src: "./src/assets/Images/colaboration_icon/ALPHA_TECH.png" },
    { name: "Offline Capture", src: "./src/assets/Images/colaboration_icon/OFFLINE_CAPTURE_LOGO.png" },
];

export const testimonials = [
    { name: "Khushal Rangani", profileImg: "./src/assets/Images/Testimonials/profile1.png", address: "-Rajkot, Gujrat", review: "\"We hired KALRAV INTERIOR to redesign our house and were extremely impressed with the outcome. The team provided creative solutions.\"" },
    { name: "Yagnik Bhakhar", profileImg: "./src/assets/Images/Testimonials/profile1.png", address: "-Surat, Gujrat", review: "\"We were incredibly impressed with KALRAV INTERIOR's design expertise and professionalism throughout our home renovation project.\"" }
];


export const contactInformation = [
    { icon: <Mail className="w-10 h-10" />, title: "Email Us", contactInfo: "kalravinterior@gmail.com" },
    { icon: <MapPin className="w-10 h-10" />, title: "Address", contactInfo: "Ahmedabad, Gujrat" },
    { icon: <Instagram className="w-10 h-10" />, title: "Instagram", contactInfo: "@kalrav_interior" },
];




// WhatsApp Icon Click Function

export const redirectToWhatsApp = () => {
    const phoneNumber = "+919586641338";
    const message = encodeURIComponent("Hello! I'm interested to hire you as an Interior Designer...");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
};