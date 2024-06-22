import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <div className="wrapper">
          <nav className="font-body flex justify-between items-center h-20 py-4">
            <div className="w-2/5 md:w-fit">
              <img src="/logo-1.svg" alt="logo" />
            </div>
            <ul className="hidden md:flex md:w-1/3 justify-around">
              <li>
                <a href="#home" className="hover:text-green hover:font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green hover:font-medium">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green hover:font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="text-white flex gap-3">
              <button className="button bg-green">
                <Link to="/register">Register</Link>
              </button>
              <button className="button text-green bg-transparent border-2 border-green hidden md:block">
                <Link to="/register">Log In</Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="font-body">
        <section className="py-12">
          <div className="wrapper flex flex-col items-center gap-4">
            <h1 className="font-semibold text-3xl md:text-4xl max-w-xl text-center leading-snug">
              Your Partner In Creating A
              <span className="text-green"> Cleaner,</span>
              <span className="text-green">Greener</span> Future
            </h1>
            <p className="font-medium max-w-96 text-center">
              Be Part Of The Solution, Join Ecotrack And Help Create A
              Sustainable Future For Our Communities
            </p>
            <button className="button bg-green text-white">Get Started</button>
            <div className="mt-5">
              <img src="truck.png" alt="" />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="flex flex-col items-center py-12 w-full bg-snow"
        >
          <div className="wrapper flex flex-col md:flex-row md:justify-between items-center">
            <div className="md:w-[49%] mb-8 md:mb-0">
              <h2 className="font-semibold text-3xl text-black mb-4">
                About Us
              </h2>
              <p className="font-normal text-lg text-black leading-relaxed">
                At EcoTrack, we are dedicated to revolutionizing waste
                management through innovative technology and sustainable
                practices. Our Smart Waste Management System empowers
                households, waste collection services, and administrators to
                efficiently manage waste collection schedules, track recycling
                efforts, and view impactful environmental metrics. Our mission
                is to foster a cleaner, greener future for communities
                everywhere by making waste management smarter, more efficient,
                and more environmentally friendly.
              </p>
            </div>
            <div className="md:w-[49%]">
              <div className=" w-full h-[324px]">
                <img
                  src="/recycle.png"
                  alt="About Image"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-start py-12 w-full wrapper"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 40C6.2 40 5.5 39.7 4.9 39.1C4.3 38.5 4 37.8 4 37V11C4 10.2 4.3 9.5 4.9 8.9C5.5 8.3 6.2 8 7 8H41C41.8 8 42.5 8.3 43.1 8.9C43.7 9.5 44 10.2 44 11V37C44 37.8 43.7 38.5 43.1 39.1C42.5 39.7 41.8 40 41 40H7ZM24 24.9L7 13.75V37H41V13.75L24 24.9ZM24 21.9L40.8 11H7.25L24 21.9ZM7 13.75V11V37V13.75Z"
                  fill="#004D00"
                />
              </svg>

              <p className="text-lg">EcoTrack@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 37C42 39.762 39.762 42 37 42H11C8.239 42 6 39.762 6 37V11C6 8.238 8.239 6 11 6H37C39.762 6 42 8.238 42 11V37Z"
                  fill="#004D00"
                />
                <path
                  d="M12 19H17V36H12V19ZM14.485 17H14.457C12.965 17 12 15.888 12 14.499C12 13.08 12.995 12 14.514 12C16.035 12 16.972 13.08 17 14.499C17 15.887 16.035 17 14.485 17ZM36 36H31V26.901C31 24.703 29.775 23.203 27.808 23.203C26.307 23.203 25.495 24.215 25.101 25.193C24.957 25.543 25 26.511 25 27V36H20V19H25V21.616C25.721 20.5 26.85 19 29.738 19C33.316 19 35.999 21.25 35.999 26.274L36 36Z"
                  fill="white"
                />
              </svg>

              <p className="text-lg">EcoTrack</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1136 0C6.36648 0 0 6.35795 0 14.1136V33.8864C0 41.6335 6.35795 48 14.1136 48H33.8864C41.6335 48 48 41.6421 48 33.8864V14.1136C48 6.36648 41.6421 0 33.8864 0H14.1136ZM14.1136 4.36364H33.8864C39.2813 4.36364 43.6364 8.71874 43.6364 14.1136V33.8864C43.6364 39.2813 39.2813 43.6364 33.8864 43.6364H14.1136C8.71874 43.6364 4.36364 39.2813 4.36364 33.8864V14.1136C4.36364 8.71874 8.71874 4.36364 14.1136 4.36364ZM36.8864 9.13636C35.7869 9.13636 34.9091 10.0142 34.9091 11.1136C34.9091 12.2131 35.7869 13.0909 36.8864 13.0909C37.9858 13.0909 38.8636 12.2131 38.8636 11.1136C38.8636 10.0142 37.9858 9.13636 36.8864 9.13636ZM24 10.9091C16.7983 10.9091 10.9091 16.7983 10.9091 24C10.9091 31.2017 16.7983 37.0909 24 37.0909C31.2017 37.0909 37.0909 31.2017 37.0909 24C37.0909 16.7983 31.2017 10.9091 24 10.9091ZM24 15.2727C28.8494 15.2727 32.7273 19.1506 32.7273 24C32.7273 28.8494 28.8494 32.7273 24 32.7273C19.1506 32.7273 15.2727 28.8494 15.2727 24C15.2727 19.1506 19.1506 15.2727 24 15.2727Z"
                  fill="#004D00"
                />
              </svg>

              <p className="text-lg">EcoTrack</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
