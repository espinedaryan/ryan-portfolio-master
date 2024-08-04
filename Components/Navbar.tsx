import Link from "next/link"

const Navbar = () => {
  return (
    <div className='z-10 fixed bottom-0 left-0 w-full justify-center gap-12 p-4 rounded-tl-3xl rounded-tr-3xl backdrop-blur-sm bg-opacity-50 border border-[#303030] shadow-md xl:absolute xl:top-0 xl:right-0 xl:left-[initial] xl:bottom-[initial] xl:border-0 flex xl:gap-4 xl:justify-between xl:text-sm items-center 2xl:h-[5rem] xl:h-[4rem] xl:w-[30%] 2xl:p-8 xl:p-4 2xl:text-base bg-[#272727] xl:rounded-tl-none xl:rounded-br-none xl:rounded-3xl'>
        <Link href="/about" className="hover:text-yellow-200 duration-300 font-semibold">
            About
        </Link>
        <Link href="/resume" className="hover:text-yellow-200 duration-300 font-semibold">
            Resume
        </Link>
        <Link href="/portfolio" className="hover:text-yellow-200 duration-300 font-semibold">
            Portfolio
        </Link>
        <Link href="/contact" className="hover:text-yellow-200 duration-300 font-semibold">
            Contact
        </Link>
    </div>
  )
}
 
export default Navbar