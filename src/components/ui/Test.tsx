import React from "react";
import Toast, { toast, ToastBody, ToastDescription, ToastIcon, ToastTitle } from "@artifact/ui-lib/toast";
import Button from "@artifact/ui-lib/button";
import { Switch } from "@artifact/ui-lib";
import { MoiIcon } from "@marn.bayan/moi-icons/react";

const Test: React.FC = () => {
  return (
    <div>
      <Button color="error" onClick={() => {}} variant="outline">
        Previous
      </Button>
      <Button color="secondary" onClick={() => {}}>
        Next
      </Button>
      <Button
        label="Success test"
        className="cursor-po"
        onClick={() => toast.success("this is success message !!")}
      />
      <Toast open={true} tone={"success"}>
        <ToastIcon />
        <ToastBody>
          <ToastTitle>Title</ToastTitle>
          <ToastDescription>Description</ToastDescription>
        </ToastBody>
      </Toast>
      <Switch />

      <MoiIcon
        className="size-20"
        name="home-03"
        variant="Duotone"
        shape="Rounded"
        primaryColor={"blue"}
        secondaryColor={"green"}
      />
    </div>
  );
};

export default Test;
