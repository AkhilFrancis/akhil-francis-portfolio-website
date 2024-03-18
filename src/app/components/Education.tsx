import { FaGraduationCap } from 'react-icons/fa';

// components/EducationSection.tsx
const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-gradient-to-br from-purple-900 to-purple-600 py-20 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education 👨🏻‍🎓</h2>
        <div className="bg-white rounded-lg shadow-md p-8 flex items-center">
          <FaGraduationCap className="text-purple-900 text-4xl mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">College of Engineering Trivandrum</h3>
            <p className="text-lg text-gray-800 mb-2">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-lg text-gray-800 mb-2">Year of Graduation: 2021</p>
            <p className="text-lg text-gray-800 mb-2">CGPA: 8.35</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
