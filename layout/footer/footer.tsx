const Footer = async () => {
  return (
    <footer className="footer footer-center bg-gray-700 p-4">
      <p className="footer-title text-white font-extralight flex m-0">
        Copyright &copy; {new Date().getFullYear()} - All rights reserved by
        Danial Khakbaz
      </p>
    </footer>
  );
};

export default Footer;
