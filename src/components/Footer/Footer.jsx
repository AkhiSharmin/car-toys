const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mx-auto justify-center items-center">
        <div className="ml-14">
          <img
            className="h-16 w-24 mt-3 -ml-8"
            src="https://i.ibb.co/T8R1Hn4/Car-Toys-Logo-Emblem-Badge-Stock-Illustration-Illustration-of-star-logo-114543251-removebg-preview.png"
            alt=""
          />
          <p className="font-bold">carToys</p>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
