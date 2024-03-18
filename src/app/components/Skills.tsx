'use client'
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { SiTypescript, SiRedis, SiNestjs, SiReact, SiNextdotjs } from 'react-icons/si';
import { AiFillDatabase, AiFillAmazonCircle } from 'react-icons/ai';
import { IoLogoNodejs, IoLogoDocker, IoLogoReact } from 'react-icons/io5';

// Define the level of knowledge for each skill (out of 5)
const skillLevels: { [key: string]: number } = {
  'Node.js': 5,
  TypeScript: 5,
  PostgreSQL: 5,
  Redis: 5,
  'Nest.js': 5,
  AWS: 4,
  Docker: 3,
  React: 3,
  'Next.js': 3,
};

const SkillsSection: React.FC = () => {
  // Define a map of skill names to corresponding icon components
  const skillIcons: { [key: string]: IconType } = {
    'Node.js': IoLogoNodejs,
    TypeScript: SiTypescript,
    PostgreSQL: AiFillDatabase,
    Redis: SiRedis,
    'Nest.js': SiNestjs,
    AWS: AiFillAmazonCircle,
    Docker: IoLogoDocker,
    React: SiReact,
    'Next.js': SiNextdotjs,
  };

  return (
    <section id="skills" className="py-20 bg-deep-purple-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills 🛠️</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(skillIcons).map(([name, IconComponent], index) => (
            <SkillCard
              key={index}
              name={name}
              IconComponent={IconComponent}
              level={skillLevels[name]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  name: string;
  IconComponent: IconType;
  level: number; // Level of knowledge (out of 5)
}

const SkillCard: React.FC<SkillCardProps> = ({ name, IconComponent, level }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg cursor-pointer transition-transform transform-gpu duration-200 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-4xl mb-4 text-blue-500"><IconComponent /></div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{name}</h3>
      <div className="flex justify-center items-center mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${(level / 5) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="text-gray-600 text-sm">{level}/5</div>
    </motion.div>
  );
};

export default SkillsSection;




