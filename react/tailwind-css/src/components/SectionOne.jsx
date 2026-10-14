import ProductCard from "./ProductCard";
import { LuArchive } from "react-icons/lu";

export default function SectionOne() {
  return (
    <div className="w-full bg-gray-400 flex flex-col items-center ">
      <LuArchive className="text-4xl text-red-500 bg-amber-500 p-2 size-6"/>
      <input className="input" placeholder="Email Adress" />
      <input
        className="bg-white border p-3 my-5 w-[300px] placeholder:text-red-500 focus:bg-amber-300 focus:w-[400px] transition"
        placeholder="Password "
      />
      <input
        className="bg-white border p-3 my-5 w-[300px] placeholder:text-red-500 focus:bg-amber-300  focus:w-[400px] transition disabled:opacity-20"
        placeholder="Phone No"
        disabled={true}
      />
      <div className="container p-5 bg-red-500 grid grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <div className="collapse bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </div>
  );
}
