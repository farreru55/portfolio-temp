import Image from "next/image";

export default function Project() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with secure payment integration and a responsive design.",
      image: "/images/projects/1.jpg",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "An intuitive task management application with real-time collaboration features.",
      image: "/images/projects/2.jpg",
      link: "#",
    },
    {
      title: "Personal Portfolio Site",
      description:
        "A responsive and modern personal portfolio website showcasing my design and development skills.",
      image: "/images/projects/3.jpg",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-white mb-12 text-center font-poppins">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card 1 */}
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                    {project.title}
                </h3>
                <p className="text-gray-300 mb-4 font-open-sans">
                    {project.description}
                </p>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-semibold font-poppins"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
