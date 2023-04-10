import React from "react";
// UI Components
import { DocumentFile } from "./DocumentFile";

export default {
  title: "Commons/DocumentFile",
  component: DocumentFile,
  args: {
    file: {
      id: 324324,
      name: "File.ppt",
      size: "3434",
      url: "",
      source: "",
      file_type: "",
    },
    onClickDelete: () => {},
    variant: "small",
    messageId: 43543,
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["small", "full"],
      },
    },
  },
};

const Template = (args) => <DocumentFile {...args} />;

export const DOCUMENT_FILE = Template.bind({});

DOCUMENT_FILE.storyName = "Document file";
