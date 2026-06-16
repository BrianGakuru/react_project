import { useEffect } from "react";
import { GraduationCap, Briefcase, Award, ArrowLeft, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated datasets containing paths to your transition images
  const education = [
    {
      degree: "B.Sc. in Mathematics / Data Science Focus",
      institution: "Your University Name",
      period: "2022 - 2026",
      image: "/images/about/Grad.jpeg", // Update with your actual image path
      description: "Specialized in advanced statistics, linear algebra, and computational mathematics. Developed foundational skills in machine learning algorithms and predictive modeling."
    }
  ];

  const career = [
    {
      role: "MLOps Engineer / Data Scientist",
      company: "Company/Organization Name",
      period: "2025 - Present",
      image: "/images/about/mlops_work.jpg", // Update with your actual image path
      description: "Building automated machine learning pipelines, deploying models into production environments, and creating data dashboards using Python and Streamlit."
    },
    {
      role: "Data Analyst Intern",
      company: "Previous Company",
      period: "2024",
      image: "/images/about/data_analytics.jpg", // Update with your actual image path
      description: "Cleaned and processed complex datasets, ran statistical analyses, and delivered actionable insights to stakeholder teams."
    }
  ];

  const leadership = [
    {
      title: "Lead Organizer / Club Chair",
      organization: "Data Science & Tech Club",
      period: "2025",
      image: "/images/about/leadership_club.jpg", // Update with your actual image path
      description: "Mentored 50+ students in Python programming, organized community hackathons, and facilitated weekly workshops on machine learning deployment."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-20 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Layout Actions */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded shadow-sm hover:shadow transition"
          >
            <HomeIcon size={16} />
            Home
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-500">Brian</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I bridge the gap between rigorous mathematical concepts and scalable engineering systems. Here is a look at my evolutionary path through academia, engineering, and community leadership.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* --- EDUCATION JOURNEY --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-500 w-7 h-7" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Education Journey</h2>
            </div>
            {/* Expanded padding-left to make room for larger circular images */}
            <div className="border-l-2 border-blue-500 ml-8 pl-12 space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Circular Pictorial Evidence on Timeline */}
                  <div className="absolute -left-[75px] top-0 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 shadow-md overflow-hidden bg-gray-200 transform group-hover:scale-110 transition duration-300">
                    <img 
                      src={edu.image} 
                      alt={`${edu.institution} evidence`} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">{edu.period}</span>
                    <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CAREER JOURNEY --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Career Journey</h2>
            </div>
            <div className="border-l-2 border-blue-500 ml-8 pl-12 space-y-12">
              {career.map((job, idx) => (
                <div key={idx} className="relative group flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Circular Pictorial Evidence on Timeline */}
                  <div className="absolute -left-[75px] top-0 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 shadow-md overflow-hidden bg-gray-200 transform group-hover:scale-110 transition duration-300">
                    <img 
                      src={job.image} 
                      alt={`${job.company} evidence`} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">{job.period}</span>
                    <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">{job.role}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">{job.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- LEADERSHIP JOURNEY --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-blue-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Leadership & Community</h2>
            </div>
            <div className="border-l-2 border-blue-500 ml-8 pl-12 space-y-12">
              {leadership.map((lead, idx) => (
                <div key={idx} className="relative group flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Circular Pictorial Evidence on Timeline */}
                  <div className="absolute -left-[75px] top-0 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 shadow-md overflow-hidden bg-gray-200 transform group-hover:scale-110 transition duration-300">
                    <img 
                      src={lead.image} 
                      alt={`${lead.organization} evidence`} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">{lead.period}</span>
                    <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">{lead.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">{lead.organization}</p>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{lead.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Return Button */}
          <div className="pt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white font-medium transition shadow-sm"
            >
              <ArrowLeft size={16} />
              Return to Main Portfolio
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;