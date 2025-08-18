import Network from '../assets/Certificate/Network_Security.png';
import Intro from '../assets/Certificate/Intro.png';
import Switching from '../assets/Certificate/Switching.png';
import Cyber from '../assets/Certificate/CyberEssentials.png';
import Enterprise from '../assets/Certificate/Enterprise.png';
import Research from '../assets/Certificate/Research.jpg';


const certificateData = [
  {
    title: 'Introduction to Networks',
    issuer: 'Cisco',
    image: Intro,
  },
  {
    title: 'Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    image: Switching,
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    image: Cyber,
  },
  {
    title: 'Enterprise Networking, Security, and Automation',
    issuer: 'Cisco',
    image: Enterprise,
  },
  {
    title: 'Network Security',
    issuer: 'Cisco',
    image: Network,
  },
  {
    title: 'Best Research in BSIT, 2nd Place Best Podium Presenter',
    issuer: 'PCC',
    image: Research,
  },
];

const Certificates = () => {
  return (
<section className="py-20 px-6 w-full flex flex-col items-center bg-black">
  <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
    Certificates
    <span className="block w-24 h-1 bg-primary-600 mx-auto mt-3 rounded-full"></span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
    {certificateData.map((cert, i) => (
      <div
        key={i}
        className="flex flex-col border border-white navbar-bg rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-48 object-contain p-4 bg-white bg-opacity-10"
        />
        {/* flex-col so issuer stays at bottom */}
        <div className="flex flex-col flex-1 p-4 text-white">
          <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
          <p className="text-sm text-gray-300 mt-auto">{cert.issuer}</p>
        </div>
      </div>
    ))}
  </div>
</section>
);
};

export default Certificates;
