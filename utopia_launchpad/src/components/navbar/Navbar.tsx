import { useState, useEffect, useRef } from "react";
import CloseButton from "../buttons/CloseButton";
import PrimaryButton from "../buttons/PrimaryButton";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav>
      <div className="w-full flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and Brand Name */}
        <a href="#" className="flex items-center ">
          <img
            src="/images/ulogo.png"
            className="w-[80px] h-[80px]"
            alt="Utopia Logo"
          />
          <span className="text-white text-2xl font-bold">Utopia</span>
        </a>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex justify-between space-x-4 items-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-white text-center text-sm font-normal leading-tight"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-center text-sm font-normal leading-tight"
              >
                Roadmap
              </a>
            </li>
          </ul>

          {/* Connect Wallet Button */}
          <button
            type="button"
            className="w-[133px] h-10 px-4 py-2.5 bg-red-500 rounded justify-start items-center gap-2 inline-flex"
          >
            <span className="text-white text-sm font-normal leading-tight">
              Connect Wallet
            </span>
          </button>
        </div>

        {/* Button to toggle the modal for Mobile */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="text-white text-sm font-normal leading-tight"
            onClick={toggleNavbar}
          >
            <img
              src="/images/navmenuicon.svg"
              className="w-[50px] h-[50px]"
              alt="modalmenuicon"
            />
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-neutral-800 text-white px-[70px] py-[60px] rounded-md relative"
            ref={modalRef}
          >
            {/* Close Button */}
            <CloseButton onClick={toggleNavbar} />
            {/* Modal Content */}
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#"
                  className="text-center text-sm font-normal leading-tight"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-center text-sm font-normal leading-tight"
                >
                  Roadmap
                </a>
              </li>
              <li>
                {/* Button to connect wallet */}
                <PrimaryButton buttonText="Connect Wallet" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
