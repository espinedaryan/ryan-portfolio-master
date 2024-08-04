'use client'

import { IoIosSend as SendIcon } from "react-icons/io";

const Contact = () => {
  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6e62d1e0-2f48-4f89-aa1f-3dec29cebc5b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        alert(result.message)
    }
  }

  return (
    <div className='fade-in-animation flex flex-col gap-6 justify-between items-start w-full'>
      <div className="flex flex-col gap-3 justify-between items-start w-full">
        <h1 className='text-2xl xl:text-3xl font-bold text-[var(--text-header)]'>
          Contact
        </h1>
        <div className='h-1.5 w-12 bg-yellow-200 rounded-3xl'></div>
        {/* Google Maps */}
        <div className='mt-6 w-full h-[25rem] rounded-3xl grayscale-[1] invert-[1]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61987.15527509881!2d121.1107483000694!3d13.827193849514096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1163f9a2d1e1%3A0xe79762f598d663f5!2sIbaan%2C%20Batangas!5e0!3m2!1sen!2sph!4v1722589651387!5m2!1sen!2sph" 
            width="600" 
            height="450" 
            style={{ border:"0" }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-full rounded-3xl'>
          </iframe>
        </div>
        <h2 className='text-lg xl:text-xl font-bold mt-4 text-[var(--text-header)]'>
          Contact Form
        </h2>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-8 w-full'>
              <input className="rounded-md w-full p-4 bg-[#2a2a2a] border border-[#393939] focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:invalid:ring-red-400" type="text" name="name" placeholder='Full Name' required />
              <input className="rounded-md w-full p-4 bg-[#2a2a2a] border border-[#393939] focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:invalid:ring-red-400" type="email" name="email" placeholder='Email' required />
            </div>
            <textarea className='rounded-md w-full p-4 bg-[#2a2a2a] border border-[#393939] focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:invalid:ring-red-400 resize-none' name="message" id="" placeholder='Your Message' required>
            </textarea>
            <button className="flex gap-2 flex-nowrap p-4 rounded-lg bg-[#2a2a2a] border border-[#393939] self-end hover:bg-[#3c3c3c] cursor-pointer transition-all duration-150 ease-in-out" type='submit'>
              <SendIcon className="text-2xl text-yellow-200" />
              <div className='text-yellow-200 text-nowrap'>Send Message</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact