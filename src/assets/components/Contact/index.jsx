import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
export const Contact = () => {


  const [state, handleSubmit] = useForm("xblgeyog");
  if (state.succeeded) {
      return(
        <>
        <h2 className='text-center text-2xl font-bold underline'>Contact Me</h2>
        <div className='h-[5vh]'></div>
        <div className='Contact-wraper flex justify-center'>
            <div className="contact-container flex md:w-[80%] gap-5 sm:justify-center lg:flex-row md:flex-row sm:flex-col sm:w-[90%] ">
                <div className="contact-links flex flex-col gap-5 lg:w-[30%] md:w-[40%] sm:w-[100%]">
                    <div className="email flex flex-col hover:bg-orange-500 hover:text-white transition-all justify-around place-items-center h-[20vh]  border-2 rounded-lg border-orange-500">
                      <img className='w-[30px] h-[30px]' src="/images/email-1573-svgrepo-com.svg" alt="" />
                      <p>johnemil21@yahoo.com</p>
                      <a href="" className='text-blue-700'>send a messege</a>
                    </div>
                    <div className="linkedin flex flex-col justify-around place-items-center h-[20vh] hover:bg-orange-500 hover:text-white transition-all border-2 rounded-lg border-orange-500">
                      <img className='w-[30px] h-[30px]' src="/images/linkedin-round-svgrepo-com.svg" alt="" />
                      <p>John Emil</p>
                      <a href=""  className='text-blue-700'>send a messege</a>
                    </div>
                    <div className="whatsapp flex flex-col justify-around place-items-center h-[20vh] hover:bg-orange-500 hover:text-white transition-all border-2 rounded-lg border-orange-500">
                      <img className='w-[30px] h-[30px]' src="/images/whatsapp-svgrepo-com.svg" alt="" />
                      <p>+201200158852</p>
                      <a href="" className='text-blue-700'>send a messege</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col h-[60vh] md:w-[50%] sm:w-[100%] justify-between'>
                    <input id='name' name='name' type="text" placeholder='Your Name' className='h-[10vh]  border-2 rounded-lg border-orange-500 p-4' />
                    <input type="email" id='email' name='email' placeholder='Your Email' className='h-[12vh]  border-2 rounded-lg border-orange-500 p-4'/>

                    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />


                    <input id='message' name='message' type="textarea" placeholder='Your Messege' className='h-[20vh]  border-2 rounded-lg border-orange-500 p-4'/>


                    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />



                    <button type='submit' disabled={state.submitting} className='bg-orange-500 text-black p-5 rounded-xl font-bold text-[18px] hover:bg-transparent hover:border-[1px] hover:text-orange-500 hover:border-orange-500 transition-all   hover:scale-105'>Submit</button>
                    <p className='text-lg text-center text-orange-700 font-semibold'>Thanks for your Message!!</p>
                </form>
            </div>
        </div>
    </>


      );
  }

  return (
    <>
        <h2 className='text-center text-2xl font-bold underline'>Contact Me</h2>
        <div className='h-[5vh]'></div>
        <div className='Contact-wraper flex justify-center'>
            <div className="contact-container flex md:w-[80%] gap-5 sm:justify-center lg:flex-row md:flex-row sm:flex-col sm:w-[90%] ">
                <div className="contact-links flex flex-col gap-5 lg:w-[30%] md:w-[40%] sm:w-[100%]">
                    <div className="email flex flex-col hover:bg-orange-500 hover:text-white transition-all justify-around place-items-center h-[20vh]  border-2 rounded-lg border-orange-500">
                      <img className='w-[30px] h-[30px]' src="/images/email-1573-svgrepo-com.svg" alt="" />
                      <p>johnemil21@yahoo.com</p>
                      <a href="" className='text-blue-700'>send a messege</a>
                    </div>
                    <div className="linkedin flex flex-col justify-around place-items-center h-[20vh] hover:bg-orange-500 hover:text-white transition-all border-2 rounded-lg border-orange-500">
                      <img className='w-[30px] h-[30px]' src="/images/linkedin-round-svgrepo-com.svg" alt="" />
                      <p>John Emil</p>
                      <a href="https://www.linkedin.com/in/john-emil-0134a3239/" target='blank'  className='text-blue-700'>send a messege</a>
                    </div>
                    <div className="whatsapp flex flex-col justify-around place-items-center h-[20vh] hover:bg-orange-500 hover:text-white transition-all border-2 rounded-lg border-orange-500">
                      <img className='w-[30px] h-[30px]' src="/images/whatsapp-svgrepo-com.svg" alt="" />
                      <p>+201200158852</p>
                      <a href="wa.me/201200158852" target='_blank' className='text-blue-700'>send a messege</a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col h-[60vh] md:w-[50%] sm:w-[100%] justify-between'>
                    <input id='name' name='name' type="text" placeholder='Your Name' className='h-[10vh] bg-transparent border-2 rounded-lg border-orange-500 p-4' />
                    <input type="email" id='email' name='email' placeholder='Your Email' className='h-[12vh]  border-2 rounded-lg border-orange-500 bg-transparent p-4'/>

                    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />


                    <input id='message'  name='message' type="textarea" placeholder='Your Messege' className='h-[20vh]  border-2 rounded-lg border-orange-500 bg-transparent p-4'/>


                    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />



                    <button type='submit' disabled={state.submitting} className='bg-orange-500 text-black p-5 rounded-xl font-bold text-[18px] hover:bg-transparent hover:border-[1px] hover:text-orange-500 hover:border-orange-500 transition-all   hover:scale-105'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}
