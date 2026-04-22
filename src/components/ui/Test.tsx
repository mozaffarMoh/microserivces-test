// Test.tsx
import React from "react";
import { Stack, Text } from "@moia/ui-lib";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Test: React.FC = () => {
  return (
    <Stack padding={"Large"}>
      <Text variant="h1" color={"info"}>
        Test Page
      </Text>
      <CustomSelect options={["Option 1", "Option 2", "Option 3"]} />
    </Stack>
  );
};

export default Test;

type Props = {
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

const CustomSelect: React.FC<Props> = ({ options, placeholder = "Select an option", onChange }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[200px] bg-pink-600">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}{" "}
      </SelectContent>
    </Select>
  );
};
