import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component"; // For optimized image loading
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import line from "../../assets/images/line.png";
import {
  companyDetails,
  industriesCompanyServe,
  ourServices,
  services,
} from "../../data/constant";
import aboutImg from "../../assets/images/home-aboutus.webp";
import whoWeAre from "../../assets/images/who-we-are.webp";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";

// Lazy load components for better performance
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

// Schema markup for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SPHEREMIND",
  description:
    "SPHEREMIND is a globally recognized leader in delivering cutting-edge technology solutions including AI, Machine Learning, Blockchain, and Cloud Computing.",
  image: companyDetails.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "10-47 Ambedkar Nagar, Jawaharnagar",
    addressLocality: "Turumalagiri",
    addressRegion: "Telangana",
    postalCode: "500087",
    addressCountry: "India",
  },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          SPHEREMIND - Leading AI & Technology Solutions Provider | Custom
          Software Development
        </title>
        <meta
          name="description"
          content="SPHEREMIND offers cutting-edge AI, Machine Learning, and Blockchain solutions. Transform your business with our custom software development and technology consulting services."
        />
        <meta
          name="keywords"
          content="AI solutions, Machine Learning, Blockchain, Custom Software Development, Technology Consulting"
        />
        <link rel="canonical" href="https://www.aiwebx.com" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="SPHEREMIND - Leading AI & Technology Solutions Provider"
        />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions from SPHEREMIND."
        />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:url" content="https://www.aiwebx.in" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SPHEREMIND - Leading AI & Technology Solutions Provider"
        />
        <meta
          name="twitter:description"
          content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions."
        />
        <meta name="twitter:image" content={aboutImg} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="landing-bg">
        <Header />
        <Banner />

        <main>
          <section
            id="services"
            className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
            aria-label="Our Services"
          >
            <div className="blurred-blue left-[-10%] top-[-10%]"></div>
            <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary capitalize">
                  Our Services
                </h2>
              </div>
              <h1 data-aos="fade-up" className="heading text-center">
                We Provide the Best IT Solution Services
              </h1>
              <p data-aos="fade-up" className="text-center max-w-2xl">
                At SPHEREMIND, we offer a full range of advanced technology
                services designed to empower businesses with scalable,
                intelligent, and secure solutions.
              </p>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-auto max-w-6xl"
              >
                {ourServices.map((item) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section
            className="wrapper py-[2rem] flex flex-col gap-3"
            aria-label="Industries We Serve"
          >
            <div className="flex flex-col gap-3">
              <h2 data-aos="fade-up" className="heading text-center">
                Industries We Serve
              </h2>
              <p data-aos="fade-up" className="mt-2 text-center mb-3">
                We cater to a wide range of industries, delivering tailored AI
                and tech solutions to meet specific needs:
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
              {industriesCompanyServe.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
                >
                  <LazyLoadImage
                    width="200"
                    height="100"
                    src={item.img}
                    alt={`${item.title} industry solutions`}
                    className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/60 transition-all duration-300"></div>
                  <h3 className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <WorkFlow />

            <section
              className="wrapper pb-10 flex flex-col items-center gap-5 z-10"
              aria-label="About Company"
            >
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                />
                <h2 className="font-medium text-secondary">About Company</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
                <div className="relative" data-aos="fade-right">
                  <LazyLoadImage
                    src={whoWeAre}
                    width="500"
                    height="400"
                    alt="SPHEREMIND company overview"
                    className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
                  />
                  <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute md:-bottom-[5rem] bottom-0 left-0 bg-primary/70 sm:bg-primary p-5 rounded-lg">
                    <h3 className="text-5xl font-bold text-white">2+</h3>
                    <p className="font-medium mt-3 text-white">
                      Years of Experience
                    </p>
                    <p className="pl-5 border-l-2 border-white text-md mt-3 text-white">
                      The trusted choice for your software development solutions
                    </p>
                  </div>
                </div>
                <div data-aos="fade-right" className="flex flex-col gap-5">
                  <h2 className="heading-2">
                    Driving Innovation and Empowering Growth with Advanced
                    Technology
                  </h2>
                  <p>
                    SphereMind Technologies aims to deliver innovative solutions
                    in web development, app development, AI, data science, IoT ,
                    and cybersecurity, empowering businesses to achieve growth
                    and efficiency. Our vision is to become a global leader in
                    advanced technology, revolutionizing industries, fostering
                    sustainable innovation, and creating a smarter, more
                    connected future
                  </p>
                  <Link to="/about-us" className="primary-btn mt-7 w-fit">
                    Know More About Us
                  </Link>
                </div>
              </div>
            </section>
          </section>

          <Experience />
          <Testimonials />
          <LeadForm />
          <AssociatedWith />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
