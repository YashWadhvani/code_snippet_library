// About Me & Sarjak with a Contact Us Form
import React from "react";
import { Container } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";

export default function About() {
  return (
    <div>
      <h1 className="text-white">About Us</h1>
      <Container className="bg-dark heroToast">
        <ProfileCard
          className="m-0"
          imgURL="img/Profile/Yash.jpg"
          name="Yash Wadhvani"
          title="Web Developer"
          mail="20220702110@karnavatiuniversity.edu.in"
          phone="9904366478"
          university="Karnavati University"
          programme="B Tech CSE (Specialisation in AI/ML)"
          school="Delhi Public School"
          board="CBSE"
          instagramLink="https://www.instagram.com/yashwadhvani75"
          gitHubLink="https://github.com/YashWadhvani"
          linkedinLink="https://www.linkedin.com/in/yash-wadhvani"
        />
        <ProfileCard
          imgURL="img/Profile/Sarjak.jpg"
          name="Sarjak Patel"
          title="Web Developer"
          mail="20220702069@karnavatiuniversity.edu.in"
          phone="9429084259"
          university="Karnavati University"
          programme="B Tech CSE (Specialisation in AI/ML)"
          school="Nirma VidhyaVihar"
          board="CBSE"
          instagramLink="https://www.instagram.com/sarjak_2004"
          gitHubLink="https://github.com/Sarjak0308"
          linkedinLink="https://www.linkedin.com/in/sarjakpatel03"
        />
      </Container>
      <Container className="bg-dark heroToast">
        <ProfileCard
          className="m-0"
          imgURL="img/Profile/chinmay.jpg"
          name="Chinmay Khanzode"
          title="Web Developer"
          mail="20220702094@karnavatiuniversity.edu.in"
          phone="8128176740"
          university="Karnavati University"
          programme="B Tech CSE (Specialisation in AI/ML)"
          school="The Aditya Birla Public School"
          board="CBSE"
          instagramLink="https://www.instagram.com/the_ckkk)"
          gitHubLink="https://github.com/ChinmayKhanzode"
          linkedinLink="https://www.linkedin.com/in/chinmaykhanzode"
        />
        <ProfileCard
          imgURL="img/Profile/aalay.jpg"
          name="Aalay Kabariya"
          title="Web Developer"
          mail="20220702096@karnavatiuniversity.edu.in"
          phone="8780539523"
          university="Karnavati University"
          programme="B Tech CSE (Specialisation in AI/ML)"
          school="Deepak Higher Secondary School"
          board="CBSE"
          instagramLink="https://www.https://www.instagram.com/?hl=en.com/the_ckkk"
          gitHubLink="https://github.com/https://github.com/Aalay-kabariya"
          linkedinLink="https://www.linkedin.com/in/aalay-kabariya-644023280/"
        />
      </Container>
    </div>
    
  );
}
