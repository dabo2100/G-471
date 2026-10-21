import logo from "../assets/Logo.svg";
import { IoMenu } from "react-icons/io5";
let linkStyle = "hover:text-violet transition cursor-pointer";

export default function Header() {
  return (
    <header className="w-full border border-b-[#E2E8F0] flex justify-center">
      <div className="container py-4  px-4 lg:px-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={logo} />
          <h1 className="font-bold text-[20px]">
            SkillUp <b className="text-violet">Academy</b>
          </h1>
        </div>

        <nav className="gap-7 text-[14px] font-semibold hidden lg:flex">
          <a className={linkStyle}>Home</a>
          <a className={linkStyle}>Courses</a>
          <a className={linkStyle}>Instructors</a>
          <a className={linkStyle}>About</a>
          <a className={linkStyle}>Contact</a>
        </nav>

        <button className="mybtn hidden lg:flex">
          Explore Courses
        </button>

        <IoMenu className="flex lg:hidden" />
      </div>
    </header>
  );
}
