import React from 'react';
import './style.css'

function AboutSection() {
  
  return (
    <section id="about">
      <div id="about-header">
        <img
          id="profile-pic"
          src="./assets/images/dave.jpg"
          alt="David Knittel"
        />
        <h1 id="main-heading">
          David Knittel: An excited new member of the coding community with a
          hunger for knowledge.
        </h1>
      </div>
      <div id="about-basic">
        <h2 class="about">About Me</h2>
        <p class="about">
          <span class="placeholder">&nbsp;</span> I am a Full-Stack Developer
          with a passion for creating user-friendly, functional tools that
          address real-world problems. I am proficient at using HTML, CSS, and
          Javascript to create complete dynamic web-pages with complex
          functionality and precise positioning. I am detail-oriented and
          well organized. These qualities helped me to succeed in earning both
          a Bachelor of Science in Mathematics and a Bachelor of Arts in
          chemistry in my four years at the University of Kansas. It is my
          lifelong passion for mathematics that drew me towards computer
          programming. I believe that writing code and practicing mathematics
          require very similar skill sets. My experience writing mathematical
          proofs gave me an understanding of the same logical structures that
          are used in programming. I am able to succeed in fast paced,
          team-driven environments. I can follow directions well, or take
          initiative where appropriate.
        </p>
        <p class="about">
          I was born and raised in Manhattan KS. I moved to Lawrence to attend KU and have stayed there
          ever since. My interests include all things related to math, science, and music.
          I enjoy coding because it, like math, involves the manipulation of precisely
          defined objects and rules. I am currently working to
          establish and sharpen my skills as a web developer. As I continue to
          build my knowledge of web-based development, I hope to also continue
          to expand my knowledge to include other areas of software development.
        </p>
      </div>
      <button type="button" id="toggle-about-basic" state="closed">
        <span>Show More</span> <i class="fas fa-arrow-down"></i>
      </button>
    </section>
  );
}

export default AboutSection;