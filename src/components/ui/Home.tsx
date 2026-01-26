// Home.tsx
import React from "react";
import Example from "../../tailwind_components/application-ui/application-shells/multi-column/constrained_three_column";

const Home: React.FC = () => {
  return (
    <div className="py-12 ">
      {/* <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-primary-500">مرحبا بك في موقعنا!</h1>
        <SignaturePad />
      </div>
      <Button label="Click me" variant={"primary"} size={"Small"} /> */}
      <Example />
    </div>
  );
};

export default Home;
