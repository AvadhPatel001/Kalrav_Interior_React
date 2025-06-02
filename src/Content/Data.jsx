import { Mail, MapPin, Instagram } from "lucide-react";

import minimal_1 from "../assets/Images/Minimal/1.jpg"
import minimal_2 from "../assets/Images/Minimal/2.jpg"
import minimal_3 from "../assets/Images/Minimal/3.jpg"

import modern_1 from "../assets/Images/Modern/1.jpg"
import modern_2 from "../assets/Images/Modern/2.jpg"
import modern_3 from "../assets/Images/Modern/3.jpg"

import traditional_1 from "../assets/Images/Traditional/1.jpg"
import traditional_2 from "../assets/Images/Traditional/2.jpg"
import traditional_3 from "../assets/Images/Traditional/3.jpg"

import three_d_1 from "../assets/Images/3D/1.jpg"
import three_d_3 from "../assets/Images/3D/3.jpg"

import three_d_icon from "../assets/Images/3D/3d_icon.gif_.gif"
import traditional_icon from "../assets/Images/Traditional/traditional_icon.gif_.gif"
import modern_icon from "../assets/Images/Modern/modern_icon.gif_.gif"
import minimal_icon from "../assets/Images/Minimal/minimal_icon.gif_.gif"

import vision_img from "../assets/Images/Vision.jpg"
import mission_img from "../assets/Images/Mission.jpg"

import ALPHA_TECH from "../assets/Images/colaboration_icon/ALPHA_TECH.png"
import OFFLINE_CAPTURE from "../assets/Images/colaboration_icon/OFFLINE_CAPTURE_LOGO.png"

import profile_img from "../assets/Images/Testimonials/profile1.png"


export const NavLinks_Left = [
    { href: "#home", title: "Home" },
    { href: "#services", title: "Services" },
]

export const NavLinks_Rigth = [
    { href: "#about_us", title: "About Us" },
    { href: "#contact", title: "Contact" },
];

export const imgSrc = [
    { src: minimal_2, alt: "Minimal 2" },
    { src: minimal_3, alt: "Minimal 3" },
    { src: modern_2, alt: "Modern 2" },
    { src: modern_3, alt: "Modern 3" },
    { src: traditional_2, alt: "Traditional 2" },
    { src: traditional_3, alt: "Traditional 3" }
];


export const services = [
    { icon: traditional_icon, title: "Traditioal Design", description: "Where tradition meets craftsmanship and celebrates heritage through rich textures and graceful lines." },
    { icon: modern_icon, title: "Modern Design", description: "We transform spaces into stunning and personalized environments that inspire and delight." },
    { icon: minimal_icon, title: "Minimal Design", description: "Crafting spaces that inspire trust and evoke satisfaction - that's the hallmark of our interior design company." },
    { icon: three_d_icon, title: "3D - Representation", description: "It's like the secret sauce that makes your design dreams come to life, all while keeping things practical and safe." }
];


export const displayImgs = [
    { src: minimal_1, category: "Minimal" },
    { src: minimal_2, category: "Minimal" },
    { src: modern_1, category: "Modern" },
    { src: modern_3, category: "Modern" },
    { src: traditional_1, category: "Traditional" },
    { src: traditional_2, category: "Traditional" },
    { src: three_d_1, category: "3D" },
    { src: three_d_3, category: "3D" },
];

export const vision = {
    src: vision_img,
    alt: "Vision Of Kalrav Interior",
    title: "VISION:",
    subtitle: "FROM VISION TO REALITY!",
    description: "Our dream? To rock the interior design world by mixing practicality with pizzazz! We aim to build solid connections with clients, partners, and neighborhoods, creating a vibe of trust, creativity, and high-fives. Pledging to be eco-friendly and always upping our game, we see a future filled with spaces that are classic stunners, leaving a legacy of beauty and creativity behind."
};

export const mission = {
    src: mission_img,
    alt: "Mission Of Kalrav Interior",
    title: "MISSION:",
    subtitle: "UNLEASH THE AWESOMENESS!",
    description: "To sprinkle a dash of magic and turn spaces into cozy havens that capture the spirit and dreams of our clients. With our love for all things creative, eye for details, and drive for perfection, our goal is to blow minds, crafting designs that jazz up lives and elevate moments to the next level."
};

export const carrierCollab = [
    { name: "AR", src: ALPHA_TECH },
    { name: "Offline Capture", src: OFFLINE_CAPTURE },
];

export const testimonials = [
    { name: "Khushal Rangani", profileImg: profile_img, address: "-Rajkot, Gujrat", review: "\"We hired KALRAV INTERIOR to redesign our house and were extremely impressed with the outcome. The team provided creative solutions.\"" },
    { name: "Yagnik Bhakhar", profileImg: profile_img, address: "-Surat, Gujrat", review: "\"We were incredibly impressed with KALRAV INTERIOR's design expertise and professionalism throughout our home renovation project.\"" }
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