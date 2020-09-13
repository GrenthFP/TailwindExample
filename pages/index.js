export default function IndexPage() {
  return (
    <div className="w-screen h-screen bg-twitter md:flex md:flex-row">
      <div className="absolute bottom-0 w-full md:relative md:w-1/6 xl:w-64 md:flex md:flex-row xl:ml-auto">
        <button className="flex mb-5 items-center justify-center w-14.75 h-14.75 ml-auto mr-5 font-bold text-white bg-tweeterblue rounded-full hover:bg-blue-700 md:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Quill_and_ink.svg"
            className="w-10 h-10"
          ></img>
        </button>

        <div className="flex text-white md:border-none border-t mb-0.5 border-dunno md:flex-col md:space-y-4 md:w-full  ">
          <div className="flex w-full h-full md:w-16 xl:w-64 md:block xl:mr-4 md:space-y-4 md:ml-auto ">
            <div className="hidden w-12 py-2 pl-2 mt-2 rounded-full cursor-pointer hover:bg-blue-700 md:block">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8"
                stroke="currentColor"
                fill="currentColor"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>
            <button className="flex justify-center w-1/4 transition duration-300 rounded-full xl:pr-4 xl:pl-2 md:w-auto md:justify-start hover:bg-blue-700 xl:py-1">
              <svg
                className="w-6.5625 md:w-10  h-auto mb-auto mt-auto "
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
              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Home
              </span>
            </button>
            <button className="flex h-12.625 md:h-auto justify-center w-1/4 md:w-auto md:justify-start  xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1 rounded-full transition duration-300">
              <svg
                className="w-6.5625 h-auto md:hidden mb-auto mt-auto"
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
                className="hidden w-10 h-10 md:block"
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

              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Explore
              </span>
            </button>
            <button className="flex justify-center w-1/4 transition duration-300 rounded-full md:w-auto md:justify-start xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1">
              <svg
                className="w-6.5625 md:w-10 h-auto mb-auto mt-auto"
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

              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Notifications
              </span>
            </button>
            <button className="flex justify-center w-1/4 transition duration-300 rounded-full md:w-auto md:justify-start xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1">
              <svg
                className="w-6.5625 md:w-10 h-auto mb-auto mt-auto "
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
              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Messages
              </span>
            </button>
            <button className="justify-center hidden transition duration-300 rounded-full md:flex md:justify-start xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1">
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
              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Bookmarks
              </span>
            </button>
            <button className="justify-center hidden transition duration-300 rounded-full md:flex md:justify-start xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1">
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
              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Lists
              </span>
            </button>
            <button className="justify-center hidden transition duration-300 rounded-full md:flex md:justify-start xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1">
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

              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                Profile
              </span>
            </button>
            <button className="justify-center hidden transition duration-300 rounded-full md:flex md:justify-start xl:pr-4 xl:pl-2 hover:bg-blue-700 xl:py-1">
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
              <span className="hidden pl-4 mt-2 text-lg font-bold text-white xl:block">
                {" "}
                More
              </span>
            </button>
            <button className="hidden w-48 px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700 xl:block">
              Tweet
            </button>
            <button className="items-center justify-center hidden w-10 h-10 mb-5 ml-auto mr-6 font-bold text-white rounded-full md:flex bg-tweeterblue hover:bg-blue-700 xl:hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Quill_and_ink.svg"
                className="w-6 h-6"
              ></img>
            </button>
          </div>
        </div>
      </div>
      {/*Side bar almost finished*/}
      <div className="w-screen lg:max-w-lg md:border xl:w-2/5 border-dunno">
        <nav className="flex flex-row ">
          <img
            src="picture.png"
            className="w-7.5 h-auto mx-4  my-3 md:hidden"
          ></img>
          <span
            href="/home/"
            className="mt-4 ml-4 text-lg font-bold text-white cursor-pointer md:mb-4"
          >
            Home
          </span>
          <svg
            className="w-8 h-8 p-1 mt-auto mb-auto ml-auto mr-2 text-blue-500 rounded-full cursor-pointer hover:bg-blue-900"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
            stroke="currentColor"
          >
            <g>
              <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
            </g>
          </svg>
        </nav>

        <div className="hidden border-t md:flex-row md:flex border-twittergray">
          <img
            src="picture.png"
            className="w-10 h-10 mx-2 my-2 rounded-full cursor-pointer hover:bg-gray-500 hover:opacity-50"
          ></img>
          <input
            type="text"
            placeholder="Write something here..."
            className="text-lg font-bold text-white outline-none bg-twitter focus:placeholder-opacity-0"
          ></input>
        </div>
        <div className="hidden mt-2 text-blue-500 border-b-8 md:flex md:flex-row border-twittergray">
          <svg
            className="w-8 h-8 p-1 ml-10 transition duration-300 rounded-full cursor-pointer hover:bg-blue-700"
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
            className="w-8 h-8 p-1 ml-1 transition duration-300 rounded-full cursor-pointer hover:bg-blue-700"
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
            className="w-8 h-8 p-1 ml-1 transition duration-300 rounded-full cursor-pointer hover:bg-blue-700"
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
            className="w-8 h-8 p-1 ml-1 transition duration-300 rounded-full cursor-pointer hover:bg-blue-700"
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
            className="w-8 h-8 p-1 ml-1 transition duration-300 rounded-full cursor-pointer hover:bg-blue-700"
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

          <button className="px-4 py-2 mb-2 ml-auto mr-4 font-bold text-gray-500 rounded-full cursor-default bg-tweeterblued">
            Tweet
          </button>
        </div>

        <div className="flex flex-col items-center my-auto text-white">
          <h1 className="mt-8 text-lg font-bold">Welcome</h1>

          <span>Here is some text</span>
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 ">
            button
          </button>
        </div>
      </div>
      <div className="hidden w-64 h-screen mr-auto lg:flex ">
        <div className="mt-1 w-87.5 ml-8 space-y-4">
          <div className="w-78.5 h-10 p-2 space-x-4 rounded-full bg-twittergray">
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
              className="pb-3 text-gray-500 outline-none h-7 bg-twittergray focus:placeholder-opacity-0"
              placeholder="Search"
            ></input>
          </div>
          <div className="h-10 border-b rounded-lg lg:w-64 xl:w-84 bg-twitterfiller">
            <span className="py-2 pl-4 font-bold text-white">
              Trends for you
            </span>
          </div>
          <div className="w-64 rounded-lg bg-twitterfiller xl:w-84">
            <span className="py-2 pl-4 font-bold text-white">
              Who to follow
            </span>

            <div className="flex flex-row border-t border-b cursor-pointer hover:bg-blue-700">
              <img
                src="picture.png"
                className="inline w-10 h-10 mx-2 my-3 "
              ></img>
              <div className="flex flex-col pl-2 ">
                <span className="mt-2 font-bold text-white">Me Memov</span>
                <span className="-mt-1 text-white ">@me</span>
              </div>
              <button className="h-10 px-4 py-2 mt-3 ml-auto mr-4 font-bold text-blue-500 transform scale-75 border border-blue-500 rounded-full bg-twitterfiller hover:bg-blue-700 lg:block">
                Follow
              </button>
            </div>

            <div className="flex flex-row border-b cursor-pointer hover:bg-blue-700">
              <img
                src="picture.png"
                className="inline w-10 h-10 mx-2 my-3 "
              ></img>
              <div className="flex flex-col pl-2 ">
                <span className="mt-2 font-bold text-white">You Youov</span>
                <span className="-mt-1 text-white">@you</span>
              </div>
              <button className="h-10 px-4 py-2 mt-3 ml-auto mr-4 font-bold text-blue-500 transform scale-75 border border-blue-500 rounded-full bg-twitterfiller hover:bg-blue-700 lg:block">
                Follow
              </button>
            </div>
            <div className="w-full py-2 cursor-pointer hover:bg-blue-700 rounded-b-md">
              <span className="pl-4 text-blue-500 fond-bold ">Show more</span>
            </div>
          </div>
          <div className="flex flex-row ml-4 space-x-2 text-xs text-gray-500">
            <a className="cursor-pointer hover:underline">Terms</a>
            <a className="cursor-pointer hover:underline">Privacy Policy</a>
            <a className="cursor-pointer hover:underline">Cookies</a>
            <a className="cursor-pointer hover:underline">Ads info</a>
            <a className="cursor-pointer hover:underline">More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
