import { FaRegMessage } from "react-icons/fa6";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="min-h-screen ">
      {/* CONTACT HERO */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/assets/images/bg-contact.jpg"
          alt="Modern building"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary">
            <FaRegMessage className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg text-primary font-semibold">We're here to help and answer any questions you might have</p>
          </div>
        </div>
      </div >
      <div className=" mx-auto px-4 py-16">
        <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <form className=" p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input type="text"
                id="name"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-secondary bg-primary border-0 border-b-4 border-secondary/50 appearance-none focus:outline-none focus:ring-0 font-semibold placeholder:text-secondary/65 peer"
                placeholder="John Doe"
                required
              />


            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-secondary bg-primary border-0 border-b-4 border-secondary/50 appearance-none focus:outline-none focus:ring-0 font-semibold placeholder:text-secondary/65 peer"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-secondary bg-primary border-0 border-b-4 border-secondary/50 appearance-none focus:outline-none focus:ring-0 font-semibold placeholder:text-secondary/65 peer"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className=" focus:outline-none rounded-md bg-primary p-2 placeholder:text-secondary/65 placeholder:font-semibold text-sm w-full "
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
            >
              <IoIosSend className="w-6 h-6" />
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="bg-secondary/95 px-5 py-7 ml-2 shadow-md text-primary/95 shadow-secondary/40  border-2 border-white/85 text-primary p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-10">Other Ways to Connect</h2>
            <div className="space-y-7 mt-5">
              <div className="flex items-start gap-4">
                <RiMapPin2Fill className="w-6 h-6  text-primay flex-shrink-0" />
                <div>
                  <h3 className=" text-lg font-semibold">Visit Us</h3>
                  <p className="text-primary/90">123 StaySwift Street</p>
                  <p className="text-primary/90">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className=" text-lg font-semibold">Call Us</h3>
                  <p className="text-primary/90">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IoMdMail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className=" text-lg font-semibold">Email Us</h3>
                  <p className="text-primary/90">support@airbnbclone.com</p>
                </div>
              </div>

              <div className="flex items-start gap-y-4">
                <FaClock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className=" text-lg font-semibold">Business Hours</h3>
                  <p className="text-primary/90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-primary/90">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>



  )
}

export default Contact