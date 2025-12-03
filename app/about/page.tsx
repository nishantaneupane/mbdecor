export const metadata = {
  title: "About Us - MB Decor",
  description: "Learn more about MB Decor and our decoration services",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About MB Decor
            </h1>
            <p className="text-gray-600 text-lg">
              Your trusted partner in creating memorable moments
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Who We Are */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                MB Decor is a premier decoration service provider specializing
                in transforming ordinary spaces into extraordinary experiences.
                With years of expertise in the industry, we have become the
                go-to choice for weddings, corporate events, birthday parties,
                and special celebrations.
              </p>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to bring your vision to life through creative,
                elegant, and personalized decoration solutions. We believe that
                every event is unique and deserves special attention to detail,
                ensuring that your celebration leaves a lasting impression on
                you and your guests.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">
                    Wedding Decorations
                  </h3>
                  <p className="text-gray-700">
                    Create the wedding of your dreams with our elegant and
                    romantic decoration setups.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">
                    Corporate Events
                  </h3>
                  <p className="text-gray-700">
                    Professional and sophisticated decorations for business
                    events and conferences.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">
                    Birthday Parties
                  </h3>
                  <p className="text-gray-700">
                    Fun, colorful, and themed decorations to make birthdays
                    extra special.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-gray-700">
                    Tailored decoration packages designed specifically for your
                    unique needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Experienced team of professional decorators
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    High-quality materials and decorations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Customizable packages to fit your budget
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    On-time setup and professional service
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Attention to detail and customer satisfaction
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
