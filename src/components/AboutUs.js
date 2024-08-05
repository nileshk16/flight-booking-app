import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-4 text-gray-700">
            Arjuna Airways was founded with a vision to redefine air travel by offering unparalleled service, comfort, and convenience. Established in 2023, we have rapidly grown to become one of the leading airlines in the region, known for our commitment to excellence and customer satisfaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            Our mission is to connect people and places with the highest level of safety, reliability, and comfort. We strive to provide a seamless travel experience from the moment you book your ticket to the time you arrive at your destination. We believe in making air travel accessible and enjoyable for everyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li><strong>Customer First:</strong> We prioritize our customers' needs and work tirelessly to ensure their satisfaction.</li>
            <li><strong>Safety:</strong> Safety is at the core of everything we do, ensuring our passengers and crew are always protected.</li>
            <li><strong>Innovation:</strong> We embrace innovation to enhance our services and improve the travel experience.</li>
            <li><strong>Integrity:</strong> We conduct our business with the highest standards of ethics and transparency.</li>
            <li><strong>Teamwork:</strong> We believe in the power of teamwork and collaboration to achieve our goals.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Our Fleet</h2>
          <p className="mt-4 text-gray-700">
            Arjuna Airways operates a modern fleet of aircraft, equipped with the latest technology to ensure a comfortable and safe journey. Our fleet includes a mix of narrow-body and wide-body aircraft to serve both domestic and international routes efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="mt-4 text-gray-700">
            Our team is composed of highly skilled professionals who are passionate about aviation and dedicated to providing exceptional service. From our pilots and cabin crew to our ground staff and customer service representatives, every member of the Arjuna Airways family is committed to making your journey pleasant and memorable.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
