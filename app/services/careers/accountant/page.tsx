import Image from 'next/image';
import heroImg from '@/public/images/accountant-hero.jpg';

export const metadata = {
  title: 'Accountant | Breakwater Marine Solutions',
    description: 'Join our team as an Accountant and contribute to the financial success of Breakwater Marine Solutions.',
};

export default function AccountantPage() {
  return (
    <div>
      <section className="relative w-full h-535px">
        <Image
          src={heroImg}
          alt="Accountant at Breakwater Marine Solutions"
          layout="fill"
          objectFit="contain"
          objectPosition="top"  // anchors the image to the top so more of the top part shows
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl font-bold">Accountant</h1>
          <p className="mt-2 text-xl">Join our team and make an impact in the maritime industry.</p>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-semibold">Position Overview</h2>
        <p className="mt-4">
          As an Accountant at Breakwater Marine Solutions, you will play a crucial role in managing financial records,
          preparing reports, and ensuring compliance with industry regulations.
        </p>

        <h3 className="mt-6 text-2xl font-semibold">Key Responsibilities</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Maintain accurate financial records and ledgers.</li>
          <li>Prepare monthly, quarterly, and annual financial statements.</li>
          <li>Ensure compliance with accounting standards and regulations.</li>
          <li>Assist in budgeting and forecasting processes.</li>
          <li>Collaborate with other departments to support financial decision-making.</li>
        </ul>

        <h3 className="mt-6 text-2xl font-semibold">Qualifications</h3>
        <ul className="list-disc pl-6 mt-2">
          <li>Bachelor&apos;s degree in Accounting or related field.</li>
          <li>Minimum of 3 years of accounting experience, preferably in the maritime industry.</li>
          <li>Strong knowledge of accounting software and Microsoft Excel.</li>
          <li>Excellent attention to detail and organizational skills.</li>
          <li>Ability to work independently and as part of a team.</li>
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
