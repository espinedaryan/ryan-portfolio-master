'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { FaGithub as GitHub, FaEye as Eye } from "react-icons/fa";

const Portfolio = () => {
  interface Project {
    name: string
    imagePath: string
    type: string
    github: string
    website: string
    id: number
  }

  const Filters = [
    {
      name: 'All',
      action: () => setFilterFocus('All'),
      id: 1
    },
    {
      name: 'Web Development',
      action: () => setFilterFocus('Web Development'),
      id: 2
    },
    {
      name: 'Application',
      action: () => setFilterFocus('Application'),
      id: 3
    }
  ]

  const Projects = [
    {
      name: 'Coffee Shop',
      imagePath: '/projectImages/coffeeshop.jfif',
      type: 'Web Development',
      github: 'https://github.com/espinedaryan/Coffee-Themed-Website',
      website: '/',
      id: 1
    },
    {
      name: 'GPT-3',
      imagePath: '/projectImages/gpt-3.jfif',
      type: 'Web Development',
      github: 'https://github.com/espinedaryan/gpt-3',
      website: '/',
      id: 2
    },
    {
      name: 'Netflix',
      imagePath: '/projectImages/netflix.jfif',
      type: 'Application',
      github: 'https://github.com/espinedaryan/netflix-try-repo',
      website: '/',
      id: 3
    },
    {
      name: 'Amazon Clone',
      imagePath: '/projectImages/amazon.jfif',
      type: 'Web Development',
      github: 'https://github.com/espinedaryan/Amazon-Clone',
      website: '/',
      id: 4
    },
    {
      name: 'Facebook Clone',
      imagePath: '/projectImages/facebook.jfif',
      type: 'Web Development',
      github: 'https://github.com/espinedaryan/Facebook-Clone',
      website: '/',
      id: 5
    },
    {
      name: 'CodeCrawlers',
      imagePath: '/projectImages/codecrawlers.png',
      type: 'Application',
      github: '/',
      website: '/',
      id: 6
    },
    {
      name: 'Youtube Clone',
      imagePath: '/projectImages/youtube.jfif',
      type: 'Web Development',
      github: 'https://github.com/espinedaryan/YouTube-Clone',
      website: '/',
      id: 7
    }
  ]

  const [FilteredProjects, setFilteredProjects] = useState<Project[]>([])

  const [filterFocus, setFilterFocus] = useState<string>('All')

  // if filterFocus is set to 'All' then the whole Projects array is transferred into the filteredProjects, 
  // else, only the types with the same name as the filterFocus will be displayed.
  useEffect(() => {   
    if (filterFocus === 'All') {
      setFilteredProjects(Projects)
    } else {
      const newFilteredProjects = Projects.filter((project) => (
        project.type == filterFocus
      ))
  
      setFilteredProjects(newFilteredProjects)
    }
  }, [filterFocus])

  return (
    <div className='fade-in-animation flex flex-col gap-6 justify-between items-start w-full'>
      <div className="flex flex-col gap-3 justify-between items-start">
        <h1 className='text-2xl xl:text-3xl font-bold text-[var(--text-header)]'>
          Portfolio
        </h1>
        <div className='h-1.5 w-12 bg-yellow-200 rounded-3xl'></div>
      </div>
      <div className='flex gap-4'>
        { Filters.map((filter) => (
          <div key={ filter.id } className={`${filterFocus === filter.name && 'text-yellow-200'} text-[var(--text-main)] cursor-pointer hover:opacity-80`} onClick={ filter.action }>
            { filter.name }
          </div>
        )) }
      </div>
      {/* Projects Display */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 w-full">
        { FilteredProjects.map((project) => (
          <div key={ project.id } className="scale-up-animation group flex flex-col gap-4 cursor-pointer">
            <div className="relative w-full h-[10rem] overflow-hidden rounded-xl">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-6 flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-10">
                <Link href={ project.github } target="_blank" className="flex justify-center items-center h-12 w-12 bg-[#272727] rounded-md active:bg-[#3a3a3a] shadow-sm border border-[#303030]">
                  <GitHub className="text-xl text-yellow-200"/>
                </Link>
                <Link href={ project.website } target="_blank" className="flex justify-center items-center h-12 w-12 bg-[#272727] rounded-md active:bg-[#3a3a3a] shadow-sm border border-[#303030]">
                  <Eye className="text-xl text-yellow-200"/>
                </Link>
              </div>
              <Image
                src={ project.imagePath }
                alt={ project.name }
                width={700}
                height={500}
                className="w-full h-full bg-gray-500 object-cover group-hover:scale-[1.15] group-hover:opacity-40 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-1 pl-2">
              <div className="text-[#fafafa]">
                { project.name }
              </div>
              <div className="text-[#9e9e9e]">
                { project.type }
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Portfolio