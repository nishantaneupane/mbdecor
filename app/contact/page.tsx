import { getContactInfo } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  // Fallback if no contact info
  if (!contactInfo) {
    return (
      <div className="py-16">
        <div className="container">
          <p className="text-center text-gray-600">
            Contact information is not available at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {contactInfo.pageTitle}
            </h1>
            {contactInfo.pageSubtitle && (
              <p className="text-gray-600 text-lg">
                {contactInfo.pageSubtitle}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {contactInfo.sectionTitle}
              </h2>
              {contactInfo.sectionDescription && (
                <p className="text-gray-700 mb-8">
                  {contactInfo.sectionDescription}
                </p>
              )}

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary">✉️</div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary">🕒</div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <div className="text-gray-700">
                      {contactInfo.businessHours.map((hours, index) => (
                        <p key={index}>{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {contactInfo.formTitle}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
