const ContactHero = () => {
  return (
    <section
      className="relative h-[480px] md:h-[520px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/ab.png')", // your image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Purple diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/80 clip-diagonal"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-16 text-white animate-fadeSlide">
  {/* Left text */}
  <h1 className="text-3xl md:text-5xl font-bold">
    Contact Us
  </h1>

  {/* Right breadcrumb */}
  <div className="text-sm md:text-base">
  <a href="/" className="opacity-80 hover:underline">
    Home
  </a>
  <span className="mx-2">|</span>
  <span className="font-semibold">Contact</span>
</div>

</div>

    </section>
  );
};

export default ContactHero;