const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-purple text-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience 💼</h2>

        {/* Software Engineer */}
        <div className="mb-16 border-l-4 border-light-purple pl-4 bg-gradient-to-b from-deep-purple-800 to-deep-purple-900 rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Software Engineer</h3>
          <p className="text-lg text-gray-300 mb-6">Keyvalue Software Systems</p>
          <p className="text-lg text-gray-300 mb-6">08/2023 - Present</p>
          <ul className="list-disc ml-8">
            <li className="mb-4">Developed and launched an Employee Engagement Platform, recognized as Product of the Day on Product Hunt.</li>
            <li className="mb-4">Engineered robust leaderboard feature using Postgres Materialized Views and Redis for client data processing.</li>
            <li className="mb-4">Built comprehensive rewards system allowing employees to redeem gifts with tokens earned through organizational activities.</li>
            <li className="mb-4">Orchestrated notifications integration, including push notifications, email, and in-app notifications.</li>
            <li>Integrated Microsoft Account Logins for seamless user authentication.</li>
          </ul>
        </div>

        {/* Associate Software Engineer */}
        <div className="mb-16 border-l-4 border-light-purple pl-4 bg-gradient-to-b from-deep-purple-800 to-deep-purple-900 rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Associate Software Engineer</h3>
          <p className="text-lg text-gray-300 mb-6">Keyvalue Software Systems</p>
          <p className="text-lg text-gray-300 mb-6">7/2021 - 07/2023</p>
          <ul className="list-disc ml-8">
            <li className="mb-4">Designed and implemented alert system integrated with Slack to monitor microservice errors.</li>
            <li className="mb-4">Developed cron job using AWS EventBridge and Lambda to automate daily product publication to SFTP server.</li>
            <li className="mb-4">Implemented secure OTP system with rate limiting for enhanced security.</li>
            <li className="mb-4">Skilled in third-party payment integrations and setting up webhook infrastructure.</li>
            <li className="mb-4">Utilized Terraform for infrastructure provisioning, working with various AWS services.</li>
            <li className="mb-4">Provided front-end support by occasionally working with ReactJS.</li>
            <li>Wrote Unit Tests using Jest, Mocha, Chai.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
