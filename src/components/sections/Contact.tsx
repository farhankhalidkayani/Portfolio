import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS configuration
      // To use this:
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create a service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables {{name}}, {{email}}, {{subject}}, {{message}}
      // 4. Get your public key from Account > API Keys
      // 5. Replace the placeholder values below with your actual EmailJS IDs
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Your message has been sent successfully. I will get back to you soon!",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "Failed to send your message. Please try again or contact me directly via email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-40"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto flex flex-col items-center">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Let's Talk
            </span>
            Get In Touch
            <span className="block w-20 h-1 bg-accent mt-4 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss backend development
            opportunities? Feel free to reach out through the form below or via
            my direct contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg relative overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/5 rounded-tr-full"></div>

            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white flex items-center">
              <FiSend aria-hidden="true" className="text-accent mr-3" />
              Send me a message
            </h3>

            {formStatus.submitted && (
              <motion.div
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-md ${
                  formStatus.success
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                }`}
              >
                <p className="flex items-center">
                  {formStatus.success ? (
                    <FiCheckCircle aria-hidden="true" className="mr-2" />
                  ) : (
                    <FiSend aria-hidden="true" className="mr-2" />
                  )}
                  {formStatus.message}
                </p>
              </motion.div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative z-10"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="I'd like to discuss a backend project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="w-full px-6 py-3 bg-accentSolid hover:bg-lightBlue text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accentSolid focus:ring-offset-2 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FiSend aria-hidden="true" className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg mb-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-accent/5 rounded-full"></div>

              <h3 className="text-2xl font-bold mb-6 text-primary dark:text-white flex items-center">
                <FiMapPin aria-hidden="true" className="text-accent mr-3" />
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                <ContactInfo
                  icon={<FiMail />}
                  title="Email"
                  content="rj.farhan4232@gmail.com"
                  link="mailto:rj.farhan4232@gmail.com"
                />

                <ContactInfo
                  icon={<FiPhone />}
                  title="Phone"
                  content="03030554015"
                  link="tel:03030554015"
                />

                <ContactInfo
                  icon={<FiLinkedin />}
                  title="LinkedIn"
                  content="farhankhalidkayani"
                  link="https://www.linkedin.com/in/farhankhalidkayani/"
                />

                <ContactInfo
                  icon={<FiGithub />}
                  title="GitHub"
                  content="farhankhalidkayani"
                  link="https://github.com/farhankhalidkayani"
                />
              </div>
            </div>

            {/* Availability Banner */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-accentSolid to-amber-800 text-white p-6 rounded-xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-8 -ml-8"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">
                  Open to Opportunities
                </h4>
                <p className="mb-4">
                  I'm currently available for backend development projects,
                  freelance work, or discussing new opportunities.
                </p>
                <a
                  href="mailto:rj.farhan4232@gmail.com?subject=Job%20Opportunity"
                  className="inline-flex items-center px-4 py-2 bg-white text-accentSolid rounded-md hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
                >
                  <FiMail aria-hidden="true" className="mr-2" />
                  Get in touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  content,
  link,
}) => {
  const isExternal = link.startsWith("http");

  return (
    <motion.a
      href={link}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-start group p-3 rounded-lg hover:bg-accent/5 transition-all duration-300"
      whileHover={{ x: 5 }}
    >
      <div
        aria-hidden="true"
        className="text-accent text-xl mt-1 mr-4 transition-colors bg-accent/10 p-2 rounded-full"
      >
        {icon}
      </div>
      <div>
        <h4 className="text-primary dark:text-white font-medium">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors">
          {content}
        </p>
      </div>
    </motion.a>
  );
};

export default Contact;
