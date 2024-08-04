'use client'

import { useState } from "react"

import Image from "next/image"

import { MdEmail as Email, MdPhoneIphone as Phone, MdCalendarMonth as Calendar, MdLocationOn as Location } from "react-icons/md";
import { FaAngleDown as ArrowDown } from "react-icons/fa";

const Profile = () => {
  const [toggleContacts, setToggleContacts] = useState<boolean>(false)

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const otherInfo = [
    {
      icon: <Email className='text-yellow-200 h-[1.5rem] w-[1.5rem] text-xl 2xl:text-xl xl:text-sm' />,
      label: 'EMAIL',
      value: 'espineda.ryanmiguel.c200571@gmail.com',
      id: 1
    },
    {
      icon: <Phone className='text-yellow-200 h-[1.5rem] w-[1.5rem] text-xl 2xl:text-xl xl:text-sm' />,
      label: 'PHONE',
      value: '+639760887623',
      id: 2
    },
    {
      icon: <Calendar className='text-yellow-200 h-[1.5rem] w-[1.5rem] text-xl 2xl:text-xl xl:text-sm' />,
      label: 'BIRTHDAY',
      value: 'January 31, 2002',
      id: 3
    },
    {
      icon: <Location className='text-yellow-200 h-[1.5rem] w-[1.5rem] text-xl 2xl:text-xl xl:text-sm' />,
      label: 'ADDRESS',
      value: 'Tulay na Patpat, Ibaan, Batangas',
      id: 4
    }
  ]
  return (
    <div className="relative flex flex-col justify-between items-center gap-8 2xl:gap-8 xl:gap-6 xl:sticky top-0 shadow-md border border-[#2a2a2a] rounded-3xl w-full xl:w-[20%] bg-[#1e1e1e] p-4 sm:p-8 2xl:p-[2rem] xl:p-[1rem]">
      <div className="xl:hidden absolute top-0 right-0 bg-[#2b2b2b] p-3 text-yellow-200 rounded-bl-3xl rounded-tr-3xl cursor-pointer hover:bg-[#353535] transition-all duration-150 ease-in-out select-none" onClick={() => setToggleContacts(!toggleContacts)}>
        <p className="hidden sm:block">Show Contacts</p>
        <ArrowDown className="sm:hidden" />
      </div>
      <div className="flex xl:flex-col xl:justify-between items-center gap-6 xl:gap-2 xl:h-[50%] w-full">
        {/* Personal Info */}
        <Image
          src='/img/grad_pic.jpg'
          alt="applicant-photo"
          width={500}
          height={500}
          className="h-[15vmin] w-[15vmin] xl:h-[60%] xl:w-[80%] rounded-3xl object-cover object-top shadow-md"
        />
        <div className="flex flex-col xl:items-center gap-4 xl:gap-2">
          <div className="2xl:text-2xl text-center font-semibold xl:font-extrabold text-[#e0e0e0] text-lg sm:text-2xl xl:text-xl">
            Ryan Miguel M. Espineda {/* Name of the applicant */}
          </div>
          <div className="w-fit xl:text-center px-4 bg-[#2b2b2b] py-[.5rem] rounded-md 2xl:text-sm text-xs">
            Frontend Web Developer
          </div>
        </div>
      </div>
      <div className={`${!toggleContacts && '!hidden'} h-[2px] w-full xl:!flex items-center bg-[#393939]`}>
        {/* horizontal line */}
      </div>
      <div className={`${!toggleContacts && '!hidden'} flex md:grid grid-cols-2 xl:!flex flex-col items-center 2xl:gap-4 w-full 2xl:p-2 gap-4 xl:gap-0 xl:p-0`} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>
        {otherInfo.map((info) => (
          <div key={ info.id } className="flex justify-between gap-2 2xl:h-[20%] xl:h-[30%] w-full p-2">
            <div className="flex justify-center items-center p-2 bg-[#272727] border border-[#2a2a2a] shadow-md rounded-lg">
              {info.icon}
            </div>
            <div className="flex flex-col w-[80%] justify-between p-[2px]">
              <div className="2xl:text-xs text-[#b2b2b2] text-xs xl:text-[.5rem]">
                {info.label}
              </div>
              <div className={`relative overflow-ellipsis ${isHovered ? '' : 'overflow-hidden'} text-xs 2xl:text-xs xl:text-[.5rem]`}>
                {info.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile