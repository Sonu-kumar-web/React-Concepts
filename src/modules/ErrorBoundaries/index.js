import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ErrorBoundaries = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: 2,
          cursor: "pointer",
        }}
        onClick={() => navigate("/concepts")}
      >
        <ArrowBackIcon /> <span>Back to Concepts page</span>
      </Box>
    </Box>
  );
};

export default ErrorBoundaries;
