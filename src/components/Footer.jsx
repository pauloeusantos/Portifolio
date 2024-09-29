import {
    Footer as FlowbiteFooter,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
  } from "flowbite-react";
  import {BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
  
  export default function FooterComponent() {
    return (
      <FlowbiteFooter container className="bg-gray-900 text-white">
        <div className="w-full max-w-screen-xl mx-auto px-6 py-8">
          <FooterDivider className="bg-gray-700 my-6" />
          <div className="flex justify-between items-center">
            <FooterCopyright href="#" by="Flowbite™" year={2024} className="text-sm text-gray-400" />
            <div className="flex space-x-6">
              <FooterIcon href="https://github.com/pauloeusantos" icon={BsGithub} className="transition-colors duration-300 hover:text-blue-500" />
              <FooterIcon href="https://www.linkedin.com/in/paulohenrique2006" icon={BsLinkedin} className="transition-colors duration-300 hover:text-blue-500" />
              <FooterIcon href="mailto:paulohenriquedeoliveira2006@gmail.com" icon={BsInstagram} className="transition-colors duration-300 hover:text-blue-500" />
        
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    );
  }
  