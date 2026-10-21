import { FaStar } from "react-icons/fa";
import correct from "../assets/correct.svg";
import studentImg from "../assets/students.png";
export default function SectionOne() {
  return (
    <section className="w-full flex justify-center">
      <div className="container px-4 lg:px-0 py-[64px] lg:py-[96px] flex flex-wrap justify-between items-center">
        <div className="flex flex-col items-start w-136.25 max-w-full">
          <div className="flex items-center gap-2 mb-6 bg-[#EEF2FF] px-3 py-2  rounded-[3rem] broder-2 border-[#E0E7FF]">
            <FaStar className="text-violet" />
            <p className="text-violet font-bold">Trusted by 700+ students</p>
          </div>

          <h1 className="text-[#0F172B] tracking-[-1.3px] leading-[58.2px] mb-5 font-extrabold text-[clamp(40px,2vw,52px)]">
            Learn Skills That Move Your Career Forward
          </h1>

          <p className="text-[#62748E] text-[18px] mb-8 leading-[29.3px]">
            Practical technology and business courses delivered by experienced
            instructors and designed around real-world projects.
          </p>

          <div className="flex gap-3 mb-16.25 flex-col lg:flex-row">
            <button className="mybtn">Explore Courses</button>
            <button className="lightBtn">Meet Our Instructors</button>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <h3 className="font-extrabold text-2xl text-[#0F172B]">20+</h3>
              <p className="text-[#62748E]">Practical Courses</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-extrabold text-2xl text-[#0F172B]">10+</h3>
              <p className="text-[#62748E]">Expert Instructors</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-extrabold text-2xl text-[#0F172B]">700+</h3>
              <p className="text-[#62748E]">Students Enrolled</p>
            </div>
          </div>
        </div>

        <div className="w-136 relative mt-12 lg:mt-0">
          <img className="w-full rounded-2xl" src={studentImg} />
          <div className="-left-4 -bottom-4 absolute flex items-center gap-3 border border-[#F1F5F9] bg-white shadow-2xl p-4 rounded-2xl">
            <img src={correct} alt="" />
            <div className="flex flex-col">
              <h1 className="text-[#0F172B] font-bold">Project-Based Learning</h1>
              <p className="text-[12px] text-[#90A1B9]">Build real things from day one</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
