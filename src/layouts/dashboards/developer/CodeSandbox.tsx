import React from "react";
import { Button } from "@mui/material";

const CodeSandboxLink = () => (
  <Button
    variant="contained"
    color="primary"
    href="https://codesandbox.io/p/github/sisensers/ComposeSDK-React-SampleAPP/main?file=%2Fsrc%2FApp.tsx&embed=1"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "white" }}
  >
    Explore in Sandbox
  </Button>
);

export default CodeSandboxLink;
