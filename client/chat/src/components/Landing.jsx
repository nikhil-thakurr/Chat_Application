import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const enterRoom = () => {
    navigate("/home", { state: { name } });
  };
  return (
    <div className="bg-black h-screen w-screen ">
      <div className="flex flex-col justify-center items-center  h-96">
        <div className="text-orange-500 text-4xl font-bold">Group Chat</div>

    <div className="flex mt-4 justify-center items-center ">
        <input
          className="border-2 p-2  rounded-lg m-4"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
       <div className="text-orange-500 bg-white font-bold rounded-xl flex justify-center items-center h-10 w-16 "> <button  onClick={enterRoom}>Enter</button></div>
       </div>
      </div>
    </div>
  );
};

export default Landing;
