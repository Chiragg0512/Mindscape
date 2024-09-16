import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-blue-50">
      <div className="flex justify-between flex-col md:flex-row gap-6 w-11/12 max-w-7xl mx-auto  py-16    ">
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-x-2 ">
            <img className="w-10" src={logo} />
            <div className="text-3xl font-semibold flex items-center gap-x-0.5 tracking-wider">
              <span className="text-primary ">Mind</span>
              <span>Scape</span>
            </div>
          </div>
          <div className="py-6">
            Our mission is to empower individuals with the knowledge and tools
            they need to navigate life's challenges, foster resilience, and
            cultivate a balanced, fulfilling life.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full md:w-2/3 gap-4">
          <div className="flex flex-col items-center">
            <div className="hover:text-blue-600 cursor-pointer">Home</div>
            <div className="hover:text-blue-600 cursor-pointer">About Us</div>
            <div className="hover:text-blue-600 cursor-pointer">Services</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="hover:text-blue-600 cursor-pointer">Email</div>
            <div className="hover:text-blue-600 cursor-pointer">
              Phone Number
            </div>
            <div className="hover:text-blue-600 cursor-pointer">Whatsapp</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="hover:text-blue-600 cursor-pointer">Twitter</div>
            <div className="hover:text-blue-600 cursor-pointer">Instagram</div>
            <div className="hover:text-blue-600 cursor-pointer">Telegram</div>
            <div className="hover:text-blue-600 cursor-pointer">Facebook</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </div>
            <div className="hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
