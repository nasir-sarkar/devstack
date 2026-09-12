import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-text.png";




const linkGroups = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];



const Footer = () => {
  const year = new Date().getFullYear();




  return (
    <footer className="border-t border-base-200">
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>

          <img src={Logo} alt="logo" className="h-8 w-auto" />

          <p className="mt-4 text-sm text-base-content/60 max-w-xs">
            Curated tools and technologies for developers building modern
            software.
          </p>

          <div className="mt-4 flex gap-4 text-lg text-base-content/60">
            <a href="https://www.github.com/">
              <FaGithub />
            </a>

            <a href="https://www.x.com/">
              <FaTwitter />
            </a>

            <a href="https://www.linkedin.com/">
              <FaLinkedin />
            </a>

          </div>
        </div>


        {linkGroups.map((group, ind) => (
          <div key={ind}>
            <h4 className="text-sm font-semibold uppercase text-base-content/40">
              {group.title}
            </h4>

            <ul className="mt-4 flex flex-col gap-2 text-sm text-base-content/60">
              {group.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary">
                    {link}
                  </a>

                </li>

              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-base-200">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-base-content/50">
          <p>© {year} Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

        </div>
      </div>
    </footer>
  );
};





export default Footer;