import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { socialLinks } from "util/socialLinks";
function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto  w-full px-18 text-center">
        {/* social icons list */}
        <div className="flex items-center justify-center text-center mb-12 w-full space-x-4">
          {socialLinks.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              key={item.social}
            >
              <span className="w-10 h-10 bg-gray-200 dark:bg-dark-muted dark:text-white dark:hover:bg-yellow-500 hover:bg-yellow-500 hover:text-white flex items-center justify-center rounded-2xl">
                {item.icon}
              </span>
            </a>
          ))}
        </div>
        {/* copyright text */}
        <div className="px-10 space-y-2">
          <p className="text-gray-400 text-sm">
            Copyright @ 2021 All rights reserved | This template is made with
            love by colorlib
          </p>
          <div className="flex justify-center text-gray-400 space-x-2">
            <a href="#" className="hover:underline hover:text-yellow-500">
              Terms & Conditions{" "}
            </a>
            <span>/</span>
            <a href="#" className="hover:underline hover:text-yellow-500">
              {" "}
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
