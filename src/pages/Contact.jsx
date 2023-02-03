import React from "react";
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full min-h-screen pt-28 px-20 pb-10">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0661648518444!2d72.78960170000002!3d21.189530400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d045a65504f%3A0x5715d1d45ec8e423!2sPRAYOSHA%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1674387343936!5m2!1sen!2sin"
          // width="600" height="450"
          className="lg:w-[600px] lg:h-[450px] h-[350px] w-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className="w-full bg-black h-fit  py-4 px-4 rounded-md 
        [&_input]:border-2 
        [&_input]:border-comp-theme
        [&_input]:px-2
        [&_input]:py-2
        [&_input]:w-full
        [&_input]:rounded-md 
        [&_input]:outline-none
        [&_input]:my-2
        [&_input]:bg-white
        [&_textarea]:border-2 
        [&_textarea]:border-comp-theme
        [&_textarea]:px-2
        [&_textarea]:py-2
        [&_textarea]:w-full
        [&_textarea]:rounded-md 
        [&_textarea]:outline-none
        [&_textarea]:my-2
        [&_textarea]:bg-white
        "
      >
        <h2 className="font-normal text-2xl text-comp-theme pb-2">Contact Us</h2>
        <input
          type="text"
          placeholder="Name"
          className="focus:bg-slate-200"
        />
        <input
          type="email"
          placeholder="Email"
          className="focus:bg-slate-200 "
        />
        <input
          type="number"
          placeholder="Number"
          className="focus:bg-slate-200 "
        />
        <textarea placeholder="Message" name="" id="" cols="30" rows="4" className="focus:bg-slate-200 "></textarea>
        <button className="flex items-center gap-1 text-xl hover:bg-main-theme px-6 py-2 rounded-full text-white border-2 border-white mx-auto transition-all duration-300 ease-in-out">Send<MdOutlineMail size={25}/></button>
      </div>
    </div>
  );
};

export default Contact;
