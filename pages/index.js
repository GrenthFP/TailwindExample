export default function IndexPage() {
  return (
    <div className=" bg-twitter h-screen w-screen lg:flex">
      <div className="hidden lg:block lg:h-screen lg:w-12"></div>

      <div className=" absolute bottom-0 w-full mb-4 lg:relative lg:w-1/4 lg:flex lg:flex-row">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full h-16 w-16 flex items-center justify-center ml-75 lg:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Quill_and_ink.svg"
            className="h-10 w-10"
          ></img>
        </button>

        <div className="h-0.25 w-full bg-gray-600 my-4 lg:h-screen lg:w-0.25 lg:hidden"></div>
        <div className="flex lg:flex-col lg:w-full lg:ml-8">
          <img
            src="https://i.pinimg.com/originals/88/69/9b/88699b2ec3b3164abaf20a23e20ed935.png"
            className="hidden lg:block mt-4 h-10 w-10 "
          ></img>
          <button className=" w-1/4 flex justify-center lg:justify-start lg:my-8">
            <img
              src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"
              className="h-10 w-10 "
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Home
            </span>
          </button>
          <button className=" w-1/4 flex justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
              className="h-10 w-10 lg:hidden"
            ></img>
            <img src="tag.png" className="h-10 w-10 hidden lg:block"></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Explore
            </span>
          </button>
          <button className="w-1/4 flex justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bell_font_awesome.svg/512px-Bell_font_awesome.svg.png"
              className="h-10 w-10"
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Notifications
            </span>
          </button>
          <button className=" w-1/4 flex justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
              className="h-10 w-10"
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Messages
            </span>
          </button>
          <button className="hidden lg:flex w-1/4  justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
              className="h-10 w-10"
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Bookmarks
            </span>
          </button>
          <button className="hidden lg:flex w-1/4  justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
              className="h-10 w-10"
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Lists
            </span>
          </button>
          <button className="hidden lg:flex w-1/4  justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
              className="h-10 w-10"
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              Profile
            </span>
          </button>
          <button className="hidden lg:flex w-1/4  justify-center lg:justify-start lg:mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
              className="h-10 w-10"
            ></img>
            <span className="hidden lg:block pl-4 text-white font-bold text-lg mt-2">
              {" "}
              More
            </span>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden lg:block w-56 ">
            Tweet
          </button>
        </div>
        <div className="hidden h-0.25 w-full bg-gray-600  lg:h-screen lg:w-0.25 lg:block"></div>
      </div>
      {/*Side bar almost finished*/}
      <div className="w-screen lg:w-2/5">
        <nav className="flex flex-row ">
          <img
            src="picture.png"
            className="h-10 w-10 mx-2 my-2 lg:hidden"
          ></img>
          <a
            href="/home/"
            className="mt-4 text-lg ml-4 text-white font-bold lg:mb-4"
          >
            Home
          </a>
        </nav>
        <div className="h-0.25 w-full bg-gray-600 "></div>
        <div className=" lg:flex-row hidden lg:flex">
          <img
            src="picture.png"
            className="h-10 w-10 mx-2 my-2 hidden lg:block"
          ></img>
          <input
            type="text"
            value="Write something here..."
            className=" hidden lg:block  bg-twitter text-gray-600 font-bold text-lg"
          ></input>
        </div>
        <div className="hidden lg:flex lg:flex-row mt-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
            className="h-6 w-6 hidden lg:block ml-10"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
            className="h-6 w-6 hidden lg:block ml-2"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
            className="h-6 w-6 hidden lg:block ml-2"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1200px-Envelope_font_awesome.svg.png"
            className="h-6 w-6 hidden lg:block ml-2"
          ></img>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 hidden lg:block ml-64">
            button
          </button>
        </div>
        <div className="h-2 w-full bg-gray-600 mt-2 hidden lg:block"></div>
        <div className="flex flex-col my-auto items-center text-white">
          <h1 className=" mt-8 text-lg">Welcome</h1>
          <p>Here is some text</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
            button
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-row w-1/3 h-screen">
        <div className="hidden h-0.25 w-full bg-gray-600  lg:h-screen lg:w-0.25 lg:block"></div>
      </div>
    </div>
  );
}
