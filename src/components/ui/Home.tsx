// Home.tsx
import React from "react";
import SignaturePad from "../Examples/Canvas";

const Home: React.FC = () => {
  return (
    <div className="py-12 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-primary-500">
          Welcome to Microservices App
        </h1>

        <SignaturePad />
      </div>
    </div>
  );
};

export default Home;
