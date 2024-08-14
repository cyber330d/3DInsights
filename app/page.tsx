import Image from "next/image";
import Hero from "./components/Hero";
import Featured from "./components/Featured"
import TopCategories from "./components/TopCategories";
import Testimonials from "./components/Testimonials";
import TeachOrLearn from "./components/TeachOrLearn";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero />
      <TopCategories />
      <Featured />
      <TeachOrLearn />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
