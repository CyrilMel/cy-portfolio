import myImage from '../assets/me.jpg';

const Landing = () => {
    return (
    <main className="flex items-center justify-center text-white px-4 pt-10">
        <section className="py-60 w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I’m <span className="hl">Cyril</span><br />
            <span className="text-white">An aspiring Full Stack Developer</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
            Passionate about building scalable and user-friendly web applications with hands-on experience in frontend development and RESTful APIs. 
            Skilled in JavaScript, Vue, Laravel, MongoDB, and MySQL. 
            Eager to grow in collaborative environments and contribute to real-world projects.
            </p>
            <button className="mt-4 border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
            View My Work
            </button>
        </div>

        {/* Image Section */}
        <div className="w-96 h-96 rounded-lg overflow-hidden border border-white">
            <img
            src={myImage}
            alt="Your Portrait"
            className="w-full h-full object-cover"
            />
        </div>
        </section>
    </main>
    );
};

export default Landing;
