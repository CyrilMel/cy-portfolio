import momecophImage from '../assets/momecoph.jpg';
import aquaImage from '../assets/aqua.jpg';

const projectData = [
  {
    title: 'ONLINE BEAUTY & ECO SHOPPING SYSTEM',
    description:
      'Developed an e-commerce platform with product suggestions and customizable packages. Built admin tools for stock monitoring and transaction tracking. Integrated sentiment analysis to classify customer feedback.',
    techStack: ['Vue', 'Laravel', 'MySQL'],
    image: momecophImage,
    link: 'https://momecoph.onrender.com/',
  },
  {
    title: 'ShopAqua',
    description:
      'ShopAqua is a full-featured e-commerce platform built using the MEVN stack with a responsive Bootstrap UI. It includes a robust RESTful API for managing users, products, cart, and orders, comprehensive error handling on both frontend and backend, an admin dashboard for inventory and order management, and is fully ready for deployment.',
    techStack: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js'],
    image: aquaImage,
    link: 'https://shopaqua.onrender.com',
  },
    {
    title: 'ITSQR',
    description:
      'ITSQR (Information Technology Society QR) is a smart attendance system designed specifically for BSIT students at PCC. By leveraging QR code technology, ITSQR streamlines the attendance process, reducing manual work and minimizing errors.',
    techStack: ['PHP'],
    image: momecophImage,
  },
];

const Project = () => {
  return (
    <section className="py-20 w-full flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
        Projects
        <span className="block w-24 h-1 bg-primary-600 mx-auto mt-3 rounded-full"></span>
      </h2>
      <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-black text-xs px-2 py-1 rounded bg-primary-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;