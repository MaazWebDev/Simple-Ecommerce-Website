import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box className="w-10 p-4 m-auto d-flex flex-column gap-4 my-5 py-5 px-3 shadow">
      <Typography
        sx={{ letterSpacing: "2px" }}
        className="text-center"
        variant="h4"
      >
        Contact us
      </Typography>
      <TextField
        className="w-100"
        id="outlined-search"
        label="Name"
        type="text"
      />
      <TextField
        className="w-100"
        id="outlined-search"
        label="Emal"
        type="email"
      />
      <TextField
        className="w-100"
        id="outlined-search"
        label="Message"
        type="text"
      />
      <Button className="w-100" variant="contained" size="large">
        Submit
      </Button>
    </Box>
  );
}

export default Contact;