const Contact = () => {
    return (
 <section className="py-20 px-6 w-full flex flex-col items-center text-white">
  <h2 className="text-4xl font-bold text-center mb-10 tracking-tight">
    Contact Me
  </h2>

  <div className="flex flex-col md:flex-row gap-10 text-center md:text-left text-lg">
    <p>
      Email:{" "}
      <a
        href="mailto:cyrilmelmacapugas@gmail.com"
        className="underline hover:text-red-500 transition"
      >
        cyrilmelmacapugas@gmail.com
      </a>
    </p>
    <p>Contact: +63 912 345 6789</p>
    <p>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/cyril-mel-macapugas-6b249a33b/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-red-500 transition"
      >
        linkedin.com/in/cyril-mel-macapugas
      </a>
    </p>
  </div>
</section>
    );
}

export default Contact; 