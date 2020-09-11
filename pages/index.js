export default function IndexPage() {
  return (
    <div className="w-screen h-screen bg-twitter lg:flex lg:flex-row">
      <div className="hidden lg:block lg:h-screen lg:w-12"></div>

      <div className="absolute bottom-0 w-full mb-4 lg:relative lg:w-1/4 lg:flex lg:flex-row">
        <button className="flex items-center justify-center w-16 h-16 ml-auto mr-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 lg:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Quill_and_ink.svg"
            className="w-10 h-10"
          ></img>
        </button>

        <div className="h-0.25 w-full bg-twittergray my-4 lg:h-screen lg:w-0.25 lg:hidden"></div>
        <div className="flex text-white lg:flex-col lg:space-y-4 lg:w-full lg:ml-8">
          <img
            src="https://i.pinimg.com/originals/88/69/9b/88699b2ec3b3164abaf20a23e20ed935.png"
            className="hidden w-10 h-auto mt-4 lg:block "
          ></img>
          <button className="flex justify-center w-1/4 lg:w-auto lg:justify-start lg:my-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Home
            </span>
          </button>
          <button className="flex justify-center w-1/4 lg:w-auto lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg
              className="hidden w-10 h-10 lg:block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>

            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Explore
            </span>
          </button>
          <button className="flex justify-center w-1/4 lg:w-auto lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Notifications
            </span>
          </button>
          <button className="flex justify-center w-1/4 lg:w-auto lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Messages
            </span>
          </button>
          <button className="justify-center hidden lg:flex lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Bookmarks
            </span>
          </button>
          <button className="justify-center hidden lg:flex lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Lists
            </span>
          </button>
          <button className="justify-center hidden lg:flex lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              Profile
            </span>
          </button>
          <button className="justify-center hidden lg:flex lg:justify-start lg:mb-8">
            <svg
              className="w-10 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden pl-4 mt-2 text-lg font-bold text-white lg:block">
              {" "}
              More
            </span>
          </button>
          <button className="hidden w-56 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 lg:block ">
            Tweet
          </button>
        </div>
        <div className="hidden h-0.25 w-full bg-twittergray  lg:h-screen lg:w-0.25 lg:block"></div>
      </div>
      {/*Side bar almost finished*/}
      <div className="w-screen lg:w-2/5">
        <nav className="flex flex-row ">
          <img
            src="picture.png"
            className="w-10 h-10 mx-2 my-2 lg:hidden"
          ></img>
          <a
            href="/home/"
            className="mt-4 ml-4 text-lg font-bold text-white lg:mb-4"
          >
            Home
          </a>
        </nav>
        <div className="h-0.25 w-full bg-twittergray "></div>
        <div className="hidden lg:flex-row lg:flex">
          <img
            src="picture.png"
            className="hidden w-10 h-10 mx-2 my-2 lg:block"
          ></img>
          <input
            type="text"
            value="Write something here..."
            className="hidden text-lg font-bold text-twittergray lg:block bg-twitter"
          ></input>
        </div>
        <div className="hidden mt-2 text-blue-500 lg:flex lg:flex-row">
          <svg
            className="hidden w-6 h-6 ml-10 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            className="hidden w-6 h-6 ml-2 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <svg
            className="hidden w-6 h-6 ml-2 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <svg
            className="hidden w-6 h-6 ml-2 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="hidden w-6 h-6 ml-2 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>

          <button className="hidden px-4 py-2 ml-auto mr-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 lg:block">
            Tweet
          </button>
        </div>
        <div className="hidden w-full h-2 mt-2 bg-twittergray lg:block"></div>
        <div className="flex flex-col items-center my-auto text-white">
          <h1 className="mt-8 text-lg ">Welcome</h1>
          <p>Here is some text</p>
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            button
          </button>
        </div>
      </div>
      <div className="hidden w-1/3 h-screen lg:flex ">
        <div className="hidden h-full w-0.25 bg-twittergray  lg:h-screen  lg:block"></div>
        <div className="mt-1 ml-8 space-y-4">
          <div className="h-10 p-2 space-x-4 rounded-full bg-twittergray">
            <svg
              className="inline w-5 h-5 ml-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="text-gray-500 h-7 bg-twittergray"
              value="Search"
            ></input>
          </div>
          <div className="w-64 h-10 rounded-full bg-twitterfiller">
            <p className="py-2 pl-4 font-bold text-white">Trends for you</p>
            <div className="w-60 -mt-1 h-0.25 ml-2  bg-gray-500 "></div>
          </div>
          <div className="w-64 rounded-lg bg-twitterfiller">
            <p className="py-2 pl-4 font-bold text-white">Who to follow</p>
            <div className="w-64 -mt-1 h-0.25   bg-gray-500 "></div>
            <div className="flex flex-row">
              <img
                src="picture.png"
                className="inline w-10 h-10 mx-2 my-3 "
              ></img>
              <div className="inline-block pl-2 ">
                <p className="mt-2 font-bold text-white">Me Memov</p>
                <p className="-mt-1 text-white ">@me</p>
              </div>
              <button className="h-10 px-4 py-2 mt-3 ml-auto mr-4 font-bold text-white text-blue-500 transform scale-75 border border-blue-500 rounded-full bg-twitterfiller hover:bg-blue-700 lg:block">
                Follow
              </button>
            </div>
            <div className="w-64 -mt-1 h-0.25   bg-gray-500 "></div>
            <div className="flex flex-row">
              <img
                src="picture.png"
                className="inline w-10 h-10 mx-2 my-3 "
              ></img>
              <div className="inline-block pl-2 ">
                <p className="mt-2 font-bold text-white">You Youov</p>
                <p className="-mt-1 text-white">@you</p>
              </div>
              <button className="h-10 px-4 py-2 mt-3 ml-auto mr-4 font-bold text-white text-blue-500 transform scale-75 border border-blue-500 rounded-full bg-twitterfiller hover:bg-blue-700 lg:block">
                Follow
              </button>
            </div>
            <div className="w-64 -mt-1 h-0.25   bg-gray-500 "></div>
            <p className="py-2 pl-4 text-blue-500 fond-bold">Show more</p>
          </div>
          <div className="flex flex-row ml-4 space-x-2 text-xs text-gray-500">
            <a>Terms</a>
            <a>Privacy Policy</a>
            <a>Cookies</a>
            <a>Ads info</a>
            <a>More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
