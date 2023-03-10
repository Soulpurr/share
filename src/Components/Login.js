import React from "react";

import { useNavigate } from "react-router-dom";

import shareVideo from "../assets/bgVid.mp4"
import logo from "../assets/logowhite.png";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { client } from "./Client";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    var decoded = jwt_decode(response.credential);
    
    console.log(decoded.name);
    const doc = {
      _id: response.clientId,
      _type: "user",
      userName: decoded.name,
      image: decoded.picture,
    };
    localStorage.setItem("user", JSON.stringify(doc));
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });

    // localStorage.setItem('user', JSON.stringify(response.profileObj));
    // const { name, googleId, imageUrl } = response.profileObj;
    // const doc = {
    //   _id: googleId,
    //   _type: 'user',
    //   userName: name,
    //   image: imageUrl,
    // };
    // // client.createIfNotExists(doc).then(() => {
    // //   navigate('/', { replace: true });
    // // });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
