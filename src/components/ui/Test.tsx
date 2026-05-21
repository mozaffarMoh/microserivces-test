import React from "react";
import Toast, { toast, ToastBody, ToastDescription, ToastIcon, ToastTitle } from "@artifact/ui-lib/toast";
import Button from "@artifact/ui-lib/button";

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
      <Toast>
        <ToastIcon />
        <ToastBody>
          <ToastTitle>Title</ToastTitle>
          <ToastDescription>Description</ToastDescription>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default Test;
