// Test.tsx
import React from "react";
import { Text } from "@moia/ui-lib";

const Test: React.FC = () => {
  return (
    <div className="py-12 ">
      <Text variant="h1" color={"secondary"} weight={"extrabold"} className="mb-4">
        Test Page
      </Text>
    </div>
  );
};

export default Test;
