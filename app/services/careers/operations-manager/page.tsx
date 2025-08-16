import Image from 'next/image';
import heroImg from '@/public/images/operations-manager-hero.jpg';

export const metadata = {
  title: 'Operations Manager | Breakwater Marine Solutions',
  description: 'Join our team as an Operations Manager and play a key leadership role in ensuring smooth, efficient, and compliant port call operations for our clients.',
};

export default function OperationsManagerPage() {
  return (
    <div>
      <section className="relative w-full h-96">
        <Image
          src={heroImg}
          alt="Operations Manager at Breakwater Marine Solutions"
          layout="fill"
          objectFit="contain"
          objectPosition="top"  // anchors the image to the top so more of the top part shows
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl font-bold">Operations Manager</h1>
          <p className="mt-2 text-xl">Play a key leadership role in ensuring smooth, efficient, and compliant port call operations for our clients.</p>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-semibold">Position Overview</h2>
        <p className="mt-4">
          As a Marine Agency Operations Manager at Breakwater Marine Solutions, you will play a key leadership role 
          in ensuring smooth, efficient, and compliant port call operations for our clients. You will oversee vessel 
          agency services from arrival to departure, coordinate with port authorities and stakeholders, and manage a 
          dedicated operations team to deliver reliable, customer-focused solutions..
        </p>

        <h3 className="mt-6 text-2xl font-semibold">Key Responsibilities</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Lead and oversee day-to-day vessel agency operations across assigned ports.</li>
          <li>Coordinate vessel arrivals and departures, ensuring timely communication with pilots, terminals, stevedores, and government authorities.</li>
          <li>Supervise documentation processes including port clearance, customs, immigration, and cargo reporting.</li>
          <li>Develop and maintain strong relationships with clients, regulatory bodies, and service providers.</li>
          <li>Mentor, support, and evaluate agency operations staff to ensure high service standards.</li>
          <li>Monitor compliance with international maritime regulations, Transport Canada requirements, and company policies.</li>
          <li>Contribute to business development by identifying opportunities to improve efficiency and expand services.</li>
        </ul>

        <h3 className="mt-6 text-2xl font-semibold">Qualifications</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Minimum 5+ years of experience in ship agency, port operations, or marine logistics.</li>
          <li>Strong knowledge of Canadian port procedures, customs, and immigration regulations.</li>
          <li>Proven leadership and team management skills.</li>
          <li>Excellent communication and problem-solving abilities.</li>
          <li>Ability to manage multiple vessel calls and priorities under tight deadlines.</li>
          <li>Proficiency with MS Office and operational software; familiarity with port/community systems an asset.</li>
          <li>Diploma/degree in Marine Studies, Logistics, or related field preferred (or equivalent industry experience).</li>
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
