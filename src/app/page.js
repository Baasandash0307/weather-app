export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">

      <div>
        {/* zuun tal */}
        <div className="w-[50%] h-[1100px] bg-white flex justify-center items-center pt-2">

          <img className="absolute left-[280px] top-[90px]" src="day.png"></img>

          <div className="w-[567px] h-[80px] rounded-[48px] bg-white flex absolute left-[200px] top-[60px] shadow-xl ">
            <svg className="bg-white rounded-[48px] relative top-[16px] left-5"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g opacity="0.2">
                <path
                  d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
                  fill="black"
                />
              </g>
            </svg>
            <input className="bg-white w-[520px] rounded-[48px] h-[80px] border-none text-[30px] relative left-10 outline-none" type="search" placeholder="Search"></input>
          </div>

          {/* Day container */}
          <div className="w-[414px] h-[828px] rounded-[50px] backdrop-blur-[12px] shadow-xl p-[40px] z-10">
            <p className="text-gray-600">February 10, 2025</p>
            <h1 className="text-[50px] font-bold">Ulaanbaatar</h1>

            <div className="flex justify-center">
              <img src="sun.png" className="w-[274px] h-[274px] mt-[30px]"></img>
            </div>
            <div className="flex justify-center">
              <p className="text-[120px] font-extrabold mt-[20px]">-26°</p>
            </div>
            <p className="text-[#777CCE] font-bold">Freezing fog</p>
            <div className="flex justify-center justify-between mt-[40px]">
              <img src="Home.png"></img>
              <img src="pin.png"></img>
              <img src="heart.png"></img>
              <img src="user.png"></img>
            </div>
          </div>

        </div>


        {/* baruun tal */}
        <div className="w-[50%] h-[1100px] bg-gray-900 absolute right-px top-px flex justify-center items-center pt-2 ">

          <img className="absolute right-[290px] bottom-[70px] w-[180px] h-[180px]" src="eclipse.png"></img>

          <div className="w-[414px] h-[828px] rounded-[50px] backdrop-blur-[12px] shadow-xl p-[40px] z-10">
            <p className="text-gray-300">February 10, 2025</p>
            <h1 className="text-[50px] text-gray-300 font-bold">Ulaanbaatar</h1>

            <div className="flex justify-center">
              <img src="moon.png" className="w-[274px] h-[274px] mt-[30px]"></img>
            </div>
            <div className="flex justify-center">
              <p className="text-[120px] text-gray-300 font-extrabold mt-[20px]">-26°</p>
            </div>
            <p className="text-[#FF8E27] font-bold">Freezing fog</p>
            <div className="flex justify-center justify-between mt-[40px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z" stroke="#F9FAFB" strokeWidth="2" />
              </svg>
              <img src="pin.png"></img>
              <img src="heart.png"></img>
              <img src="user.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="h-[140px] w-[140px] bg-white rounded-full flex gap-4 justify-center items-center">
          <img className="w-11 h-21" src="left.webp"></img>
          <img className="w-11 h-21" src="right.webp"></img>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[340px] h-[340px] absolute rounded-full border-solid border-[1px]"></div>
        <div className="w-[540px] h-[540px] absolute rounded-full border-solid border-[1px]"></div>
        <div className="w-[940px] h-[940px] absolute rounded-full border-solid border-[1px]"></div>
      </div>
    </div>
  );
}
