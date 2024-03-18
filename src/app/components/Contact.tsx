import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-black to-black py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-4">Feel free to reach out to me via email or LinkedIn:</p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0 md:mr-8">
            <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300" aria-label="Email">
              <FaEnvelope className="text-4xl" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300" aria-label="LinkedIn">
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
