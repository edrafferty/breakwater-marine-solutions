import Image from 'next/image';
import heroImg from '@/public/images/boarding-agent-hero.jpg';

export const metadata = {
  title: 'Boarding Agent | Breakwater Marine Solutions',
  description: 'Join our team as a Boarding Agent and ensure smooth vessel operations at Breakwater Marine Solutions.',
};

export default function BoardingAgentPage() {
  return (
    <div>
      <section className="relative w-full h-535px">
        <Image
          src={heroImg}
          alt="Boarding Agent at Breakwater Marine Solutions"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl font-bold">Boarding Agent</h1>
          <p className="mt-2 text-xl">Ensure smooth vessel operations with Breakwater Marine Solutions.</p>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-semibold">Position Overview</h2>
        <p className="mt-4">
          As a Boarding Agent at Breakwater Marine Solutions, you will be the first point of contact for vessels arriving
          at port, coordinating with ship crews, port authorities, and various stakeholders to facilitate efficient and
          compliant port operations.
        </p>

        <h3 className="mt-6 text-2xl font-semibold">Key Responsibilities</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Board incoming vessels upon arrival at port.</li>
          <li>Verify documentation and ensure compliance with port regulations.</li>
          <li>Coordinate with port authorities and other stakeholders.</li>
          <li>Facilitate crew changes and oversee cargo operations.</li>
          <li>Respond promptly to any issues or last-minute requests from ship operators.</li>
        </ul>

        <h3 className="mt-6 text-2xl font-semibold">Qualifications</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>High school diploma or equivalent; maritime-related certifications preferred.</li>
          <li>Previous experience in a similar role is advantageous.</li>
          <li>Strong communication and interpersonal skills.</li>
          <li>Ability to work irregular hours and handle unforeseen events.</li>
          <li>Proficiency in maritime documentation and port operations.</li>
        </ul>

        <h3 className="mt-6 text-2xl font-semibold">How to Apply</h3>
        <p className="mt-2">
          Interested candidates are invited to send their resume and cover letter to{' '}
          <a href="mailto:careers@breakwatermarine.ca" className="text-blue-600">
            careers@breakwatermarine.ca
          </a>.
        </p>
      </section>
    </div>
  );
}
