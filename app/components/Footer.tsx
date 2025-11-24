const FooterPage = () => {
  return (
    <>
    <footer className=" text-gray-200 py-6 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} John Ashley Torio. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* Example social links */}
          <a href="https://github.com/jaTorio20" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/johntorio" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
      </>
  );
};

export default FooterPage;
