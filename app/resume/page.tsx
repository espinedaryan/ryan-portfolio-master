import { GoBook as Book } from "react-icons/go";

const Resume = () => {
  const RelevantExp = [
    {
      title: 'Frontend Web Developer - Intern',
      company: 'Codebility', 
      duration: 'January 2024 - April 2024',
      technologies: 'Tech Stacks Used: NextJS, TailwindCSS, TypeScript, Git, GitHub',
      description: 'Developed responsive components to ensure seamless user experiences by collaborating closely with design and development teams and translating mockups into functional web interfaces while maintaining consistency across devices and browsers.',
      id: 1
    },
    {
      title: 'Game Developer',
      company: 'Westmead International School (Thesis)', 
      duration: 'October 2023 - April 20244',
      technologies: 'Tech Stacks Used: HTML, CSS, JavaScript, Adobe Photoshop, Git, GitHub',
      description: 'Contributed to the overall game design of a JavaScript learning tool by coding the game logic, developing unique characters, and integrating coding tasks within the tower defense mechanics. Focused on creating an engaging and educational experience, balanced difficulty, and ensured a bug-free game through extensive debugging and testing, while collaborating closely with the team.',
      id: 2
    },
    {
      title: 'Web Developer - Intern',
      company: 'Innovatto IT Consultancy', 
      duration: 'September 2023 - December 2023',
      technologies: 'Tech Stacks Used: NextJS, CSS, TypeScript, Supabase, Git, GitHub',
      description: 'Implemented user-friendly and visually appealing frontend designs focused on usability and user experience, and collaborated with team members to integrate frontend and backend components for a cohesive and efficient system.',
      id: 3
    }
  ]

  const Education = [
    {
      school: 'Westmead International School',
      address: 'Alangilan, Batangas City, Batangas',
      schoolYear: '2020 - 2024',
      id: 1
    },
    {
      school: 'Dr. Juan A. Pastor Memorial National High School',
      address: 'Talaibon, Ibaan, Batangas',
      schoolYear: '2014 - 2020',
      id: 2
    },
    {
      school: 'Ibaan Central School',
      address: 'Poblacion, Ibaan, Batangas',
      schoolYear: '2013 - 2014',
      id: 3
    },
    {
      school: 'Our Lady of Grace Formation School',
      address: 'Poblacion, Ibaan, Batangas',
      schoolYear: '2008 - 2013',
      id: 4
    }
  ]

  return (
    <div className='fade-in-animation flex flex-col gap-6 justify-between items-start w-full'>
      <div className="flex flex-col gap-3 justify-between items-start">
        <h1 className='text-2xl xl:text-3xl font-bold'>
          Resume
        </h1>
        <div className='h-1.5 w-12 bg-yellow-200 rounded-3xl'></div>
      </div>
      {/* Relevant Experience */}
      <div className='ml-[45px] flex flex-col gap-8'>
        <div className="relative right-14 top-1.5 shadow-sm flex justify-start items-center gap-3">
          <div className="p-4 rounded-xl bg-[#272727]">
            <Book className="text-2xl"/>
          </div>
          <div className="text-xl xl:text-2xl font-bold">
            Relevant Experience
          </div>
        </div>
        { RelevantExp.map((exp) => (
          <div key={ exp.id } className='relative timeline-item'>
            <h2 className='font-semibold text-[#f2f2f2]'>
              { exp.title }
            </h2>
            <div className='text-[#afafaf] text-sm xl:text-base'>
              { exp.company }
            </div>
            <span className='text-yellow-200 text-xs xl:text-sm'>
              { exp.duration }
            </span>
            <div className="text-[#afafaf] italic mt-1 text-sm xl:text-base">
              { exp.technologies }
            </div>
            <div className="text-[#e6e6e6]  lg:w-2/3 text-sm mt-1 text-justify">
              { exp.description }
            </div>
          </div>
        )) }
      </div>
      {/* Education */}
      <div className='ml-[45px] flex flex-col gap-8'>
        <div className="relative right-14 top-1.5 shadow-sm flex justify-start items-center gap-3">
          <div className="p-4 rounded-xl bg-[#272727]">
            <Book className="text-2xl"/>
          </div>
          <div className="text-xl xl:text-2xl font-bold">
            Education
          </div>
        </div>
        { Education.map((educ) => (
          <div key={ educ.id } className='relative timeline-item'>
            <h2 className='font-semibold text-[#f2f2f2] text-sm xl:text-base'>
              { educ.school }
            </h2>
            <div className='text-[#afafaf] text-sm xl:text-base'>
              { educ.address }
            </div>
            <span className='text-yellow-200 text-xs xl:text-sm'>
              { educ.schoolYear }
            </span>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Resume