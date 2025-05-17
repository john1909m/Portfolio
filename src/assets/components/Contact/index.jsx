import React, { useContext } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { ThemeContext } from '../../../ThemeContext';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPaperPlane, FaUser, FaCheck } from 'react-icons/fa';

export const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [state, handleSubmit] = useForm("xblgeyog");

  const contactLinks = [
    {
      id: 'email',
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'johnemil21@yahoo.com',
      link: 'mailto:johnemil21@yahoo.com',
      linkText: 'Send an email'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin className="text-2xl" />,
      title: 'LinkedIn',
      value: 'John Emil',
      link: 'https://www.linkedin.com/in/john-emil-0134a3239/',
      linkText: 'View profile'
    },
    {
      id: 'whatsapp',
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      value: '+201200158852',
      link: 'https://wa.me/201200158852',
      linkText: 'Send a message'
    }
  ];

  if (state.succeeded) {
    return (
      <section className={`contact-section py-10 sm:py-12 md:py-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="container mx-auto px-4 sm:px-5">
          <div className="contact-header text-center mb-8 sm:mb-10 md:mb-12">
            <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-2 sm:mb-3 rounded-full mx-auto"></div>
            <h2 className='font-bold text-2xl sm:text-3xl mb-2 sm:mb-3'>Contact Me</h2>
            <p className={`text-xs sm:text-sm max-w-xs sm:max-w-md md:max-w-lg mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'd love to hear from you! Feel free to reach out through any of these channels.
            </p>
                </div>

                    <div className="success-message max-w-md mx-auto text-center p-6 sm:p-8 md:p-10 rounded-xl border-2 border-green-500 bg-green-50/10 backdrop-blur-sm">            <div className="success-icon mb-4 sm:mb-6">              <div className="rounded-full bg-green-500 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto animate-bounce">                <FaCheck className="text-white text-xl sm:text-2xl md:text-3xl" />                </div>            </div>            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-green-500">Message Sent!</h3>            <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>              Thanks for reaching out! I'll get back to you as soon as possible.            </p>            <button               onClick={() => window.location.reload()}              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">              Send Another Message            </button>            </div>
        </div>
      </section>
      );
  }

  return (
    <section className={`contact-section py-10 sm:py-12 md:py-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="container mx-auto px-4 sm:px-5">
        <div className="contact-header text-center mb-8 sm:mb-10 md:mb-12">
          <div className="about-fx w-16 sm:w-20 h-[12px] sm:h-[15px] bg-orange-500 mb-2 sm:mb-3 rounded-full mx-auto"></div>
          <h2 className='font-bold text-2xl sm:text-3xl mb-2 sm:mb-3'>Contact Me</h2>
          <p className={`text-xs sm:text-sm max-w-xs sm:max-w-md md:max-w-lg mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'd love to hear from you! Feel free to reach out through any of these channels.
          </p>
                    </div>
        
                <div className="contact-wrapper flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">          <div className="contact-info w-full lg:w-1/3">            <div className="contact-links grid grid-cols-1 gap-4">              {contactLinks.map((item) => (                <div                   key={item.id}                  className={`contact-card p-4 sm:p-5 md:p-6 rounded-xl ${isDarkMode                     ? 'bg-blue-900/30 border border-blue-800/50'                     : 'bg-white/80 border border-gray-200/80'}                     backdrop-blur-sm shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-orange-500`}                >                  <div className="flex items-start">                    <div className={`icon-circle w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${isDarkMode                       ? 'bg-orange-500/20'                       : 'bg-orange-100'} mr-3 sm:mr-4`}>                      {item.icon}                    </div>                    <div className="contact-content">                      <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>                      <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.value}</p>                      <a                         href={item.link}                         target="_blank"                         rel="noopener noreferrer"                        className={`inline-flex items-center text-xs sm:text-sm ${isDarkMode                           ? 'text-orange-400 hover:text-orange-300'                           : 'text-orange-500 hover:text-orange-600'}`}                      >                        {item.linkText}                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>                        </svg>                      </a>                    </div>                  </div>                </div>              ))}
                </div>
            
                        <div className={`availability-card mt-4 sm:mt-6 p-4 sm:p-5 md:p-6 rounded-xl ${isDarkMode               ? 'bg-blue-900/30 border border-blue-800/50'               : 'bg-white/80 border border-gray-200/80'} backdrop-blur-sm`}            >              <h3 className="text-base sm:text-lg font-semibold mb-2">My Availability</h3>              <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>                I am currently available for freelance work and full-time positions.              </p>              <div className="availability-status flex items-center">                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>                <span className="text-xs sm:text-sm font-medium">Available for work</span>              </div>            </div>          </div>                    <div className="contact-form w-full lg:w-2/3">            <form               onSubmit={handleSubmit}               className={`p-5 sm:p-6 md:p-8 rounded-xl ${isDarkMode                 ? 'bg-blue-900/30 border border-blue-800/50'                 : 'bg-white/80 border border-gray-200/80'} backdrop-blur-sm shadow-lg`}            >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">                <div className="form-group">                  <label                     htmlFor="name"                     className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}                  >                    Your Name                  </label>                  <div className="relative">                    <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">                      <FaUser className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />                    </div>                    <input                       id="name"                       name="name"                       type="text"                       required                      placeholder="John Doe"                       className={`w-full text-xs sm:text-sm pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg ${isDarkMode                         ? 'bg-blue-800/50 border border-blue-700 focus:border-orange-500 text-white'                         : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-gray-800'}                         placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300`}                     />                    </div>                </div>                                <div className="form-group">                  <label                     htmlFor="email"                     className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}                  >                    Your Email                  </label>                  <div className="relative">                    <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">                      <FaEnvelope className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />                    </div>                    <input                       id="email"                       name="email"                       type="email"                       required                      placeholder="you@example.com"                       className={`w-full text-xs sm:text-sm pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg ${isDarkMode                         ? 'bg-blue-800/50 border border-blue-700 focus:border-orange-500 text-white'                         : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-gray-800'}                         placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300`}                     />                  </div>                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs sm:text-sm mt-1" />                </div>              </div>
              
                            <div className="form-group mb-4 sm:mb-6">                <label                   htmlFor="message"                   className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}                >                  Your Message                </label>                <textarea                   id="message"                   name="message"                   rows="5"                   required                  placeholder="How can I help you?"                   className={`w-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${isDarkMode                     ? 'bg-blue-800/50 border border-blue-700 focus:border-orange-500 text-white'                     : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-gray-800'}                     placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300`}                ></textarea>                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs sm:text-sm mt-1" />              </div>                            <button                 type="submit"                 disabled={state.submitting}                 className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg flex items-center justify-center ${state.submitting                   ? 'bg-gray-400 cursor-not-allowed'                   : 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700'} text-white text-sm sm:text-base font-semibold transition-all duration-300 transform hover:-translate-y-1`}              >                {state.submitting ? (                  <span className="inline-flex items-center">                    <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>                    </svg>                    <span className="text-xs sm:text-sm">Sending...</span>                  </span>                ) : (                  <span className="inline-flex items-center">                    <FaPaperPlane className="text-xs sm:text-sm mr-1 sm:mr-2" />                     <span className="text-xs sm:text-sm">Send Message</span>                  </span>                )}              </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}
