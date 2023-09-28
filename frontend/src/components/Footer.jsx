export default function Footer() {
  return (
    <div className="px-8 py-7 md:px-16 lg:px-28">
      <div className="flex items-center gap-4 ">
        <div className="triangle"></div>
        <div>
          <a className="text-3xl font-bold">Contact</a>
        </div>
      </div>
      <div className="text-lg font-extrabold px-10 leading-10 pt-4">
        <ul className="md:inline-flex gap-16">
          <li className="hover:text-gray-500 cursor-pointer" href="#">
            <a href="https://github.com/tanveerchana">Github</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer" href="#">
            <a href="mailto:tanveer0736@gmail.com">Email</a>
          </li>
          <li className="hover:text-gray-500 cursor-pointer" href="#">
            Resume
          </li>
          <li className="hover:text-gray-500 cursor-pointer" href="#">
            <a href="https://www.linkedin.com/in/tanveer-singh007/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
