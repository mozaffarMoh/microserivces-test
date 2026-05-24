import React from "react";
import Toast, { toast, ToastBody, ToastDescription, ToastIcon, ToastTitle } from "@artifact/ui-lib/toast";
import Button from "@artifact/ui-lib/button";
import View from "@marn.bayan/moi-icons/svg/3-d-view_Bulk_Rounded.svg";
import { Switch } from "@artifact/ui-lib";

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

      <img src={View} alt="view icon" />
      <Switch />
    </div>
  );
};

export default Test;
