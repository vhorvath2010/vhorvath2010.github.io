function Hero() {
  return (
    <section
      id="home"
      className="text-center min-h-screen justify-center flex-col flex items-center align-middle bg-yellow-50 dark:bg-slate-950"
    >
      <h2 className="mx-4 mb-3 text-xl md:text-3xl text-slate-950 dark:text-yellow-50">
        Hi, I'm
      </h2>
      <h1 className="mx-4 mb-3 text-4xl md:text-6xl bg-slate-950 rounded-full text-yellow-50 p-6 dark:bg-yellow-50 dark:text-slate-950">
        Vincent Horvath
      </h1>
      <h2 className="mx-4 text-xl md:text-3xl text-slate-950 dark:text-yellow-50">
        Welcome to my portfolio website!
      </h2>
    </section>
  );
}

export default Hero;
