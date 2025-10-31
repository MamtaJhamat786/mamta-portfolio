"use client";

import NavBar from "./components/NavBar";
import Section from "./components/Section";

export default function Page() {
  return (
    <>
      <NavBar />
      <Section id="home" title="Home Section" color="#E3F2FD" />
      <Section id="about" title="About Section" color="#FCE4EC" />
      <Section id="contact" title="Contact Section" color="#E0F7FA" />
    </>
  );
}
