import myImage from '../assets/me.jpg';
import githubLogo from '../assets/github-mark-white.png';
import linkedinLogo from '../assets/linkedin-logo.png'; // adjust path if needed


const techBadges = [
  "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
  "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  "https://img.shields.io/badge/render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
  "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
  "https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
  "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
  "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white",
  "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
];

const Landing = () => {
  return (
    <>
      {/* Main Section */}
      <section className="px-5 lg:pt-40 lg:pb-30 w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I’m <span className="hl">Cyril</span><br />
            <span className="text-white">Aspiring QA Engineer</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
              Passionate about ensuring software quality and reliability through careful testing and analysis. 
              Experienced in frontend development and RESTful APIs, with skills in JavaScript, Vue, Laravel, MongoDB, and MySQL. 
              Detail-oriented, eager to grow in QA and development, and committed to delivering efficient and user-friendly solutions.
            </p>
          {/* Social Links - vertically aligned */}
          <div className="flex flex-row items-start justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://github.com/CyrilMel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="w-8 h-8 hover:opacity-70 transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cyril-mel-macapugas-6b249a33b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-70 transition"
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-96 md:h-96 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-white">
          <img
            src={myImage}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="pb-20 w-full flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-6 text-white">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-3 px-6 max-w-6xl">
          {techBadges.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Badge ${i}`}
              className="h-9 hover:scale-[1.22] transition duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </>
  );
};


export default Landing;
