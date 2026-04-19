// Test.tsx
import React from "react";
import { Button, Text, Tooltip } from "@moia/ui-lib";

const Test: React.FC = () => {
  return (
    <div className="py-12 ">
      <Text variant="h1" color={"secondary"} weight={"extrabold"} className="mb-4">
        Test Page
      </Text>

      <Tooltip content="This is a tooltip" delay={1000}>
        <Button variant={"secondary"}>TEST</Button>
      </Tooltip>
    </div>
  );
};

export default Test;
