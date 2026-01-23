import { useState } from "react";
import { Link } from "react-router-dom";
import farmImage from "../assets/images/Background/vegi.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Contact info without the map-marker-alt (address) as we split it manually
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      details: ["rebeccaoverseascompany@gmail.com"],
    },
    {
      icon: "fas fa-phone",
      details: ["Customer Care No", "+91 78 74 77 66 88"],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* MainHeader Section */}
      <section className="relative h-[150px] sm:h-[180px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed sm:bg-fixed"
          style={{ backgroundImage: `url(${farmImage})` }}
        ></div>
        <div className="absolute inset-0 bg-[#5a5a5a]/45"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wider">
                Contact
              </h1>
              <nav className="text-white text-sm sm:text-base">
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
                <span className="mx-2">•</span>
                <span className="text-gray-300">Contact</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-8 sm:pt-12 pb-0" id="contact">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semi-bold mb-4 sm:mb-6 font-montserrat">
              Get In Touch
            </h2>
            <p className="text-gray-800 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed px-4">
              Reach out to us for assistance and information. Our team works
              closely with farmers to provide reliable support and agricultural
              solutions.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Row 1 - Group of Company */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 py-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary flex items-center justify-center shrink-0 mx-auto lg:mx-0">
                <i className="fas fa-map-marker-alt text-white text-lg sm:text-xl lg:text-2xl"></i>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                <div className="text-gray-700 text-xs sm:text-sm leading-relaxed space-y-1 text-center lg:text-left">
                  <p className="font-medium text-gray-900">Group of Company:</p>
                  <p>REBECCA OVERSEAS INC.</p>
                  <p>11 Lewis Pl, Piscataway 08854. NJ. USA</p>
                  <p>Rebecca Research Unit,</p>
                  <p>S No. 44, Bannerghatta Main Road,</p>
                  <p>Gulakamale Village, Bangalore – 560082,</p>
                  <p>Karnataka (India).</p>
                </div>
                <div className="text-gray-700 text-xs sm:text-sm leading-relaxed space-y-1 text-center lg:text-left">
                  <p className="font-medium text-gray-900">
                    {/* Produced, Imported, Packed & Marketed by: */}
                  </p>
                  <p>REBECCA OVERSEAS COMPANY</p>
                  <p>Block B-605, Shilp Corporate Park,</p>
                  <p>B/s Aaron Spectra, Opp. Rajpath Club,</p>
                  <p>Bodakdev, Ahmedabad-380054 Gujarat (India)</p>
                </div>
              </div>
            </div>
            {/* Other Contact Info Rows */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 py-4 bg-gray-50 rounded-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <i
                    className={`${info.icon} text-white text-lg sm:text-xl lg:text-2xl`}
                  ></i>
                </div>

                <div className="text-gray-700 text-xs sm:text-sm leading-relaxed space-y-1 text-center sm:text-left">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>
                      {info.icon === "fas fa-envelope" ? (
                        <a
                          href={`mailto:${detail}`}
                          className="hover:text-primary"
                        >
                          {detail}
                        </a>
                      ) : info.icon === "fas fa-phone" ? (
                        <a
                          href={`tel:${detail.replace(/[^\d+]/g, "")}`}
                          className="hover:text-primary"
                        >
                          {detail}
                        </a>
                      ) : (
                        <span>{detail}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Map and Form Section */}
        <div className="bg-gray-50 mt-8 sm:mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem]">
          <div className="container-fluid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
              {/* Map Section - 7 columns */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5!2d-74.465!3d40.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c6b8b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2s11%20Lewis%20Pl%2C%20Piscataway%2C%20NJ%2008854%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus&q=11+Lewis+Pl,+Piscataway,+NJ+08854"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rebecca Seed Company Location - 11 Lewis Pl, Piscataway 08854. NJ. USA"
                  ></iframe>
                </div>
              </div>

              {/* Form Section - 5 columns */}
              <div className="lg:col-span-5 bg-white order-1 lg:order-2">
                <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-montserrat">
                    Send Message
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
                    Send us a message and our dedicated team will respond
                    quickly. We ensure clear guidance and helpful solutions for
                    all your farming requirements.
                  </p>

                  {submitStatus === "success" && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-sm">
                      Your email sent Successfully, Thank you.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-sm">
                      Error occurred while sending email. Please try again
                      later.
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical text-sm"
                        placeholder="Message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full font-semibold font-montserrat transition-all duration-300 text-xs sm:text-sm uppercase ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed text-white"
                          : "bg-primary hover:bg-green-600 text-white"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </span>
                      ) : (
                        "Send"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
