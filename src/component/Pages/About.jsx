import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box
      sx={{ padding: "60px 50px" }}
      className="d-flex gap-5 align-items-center my-5 flex-column-reverse flex-sm-column-reverse flex-md-row"
    >
      <Box className="w-100 w-sm-100 w-md-50">
        <Typography className="fs-1 fw-bold mb-2" variant="h3">
          {" "}
          All-in-One Store: Your Ultimate Shopping Destination
        </Typography>
        <Typography
          className="fw-light"
          component="p"
          sx={{ wordSpacing: "6px", letterSpacing: "1px", fontSize: "18px" }}
        >
          {" "}
          Discover the convenience of the All-in-One Store, where we bring
          together everything you need under one roof. From electronics to
          fashion, groceries to home essentials, we offer a diverse selection of
          products to suit your lifestyle. Enjoy seamless shopping, great deals,
          and top-notch customer service all in one place.
        </Typography>
      </Box>
      <Box className="w-100 w-sm-100 w-md-50">
        <img
          className="bg-primary"
          width={"100%"}
          src="https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="store"
        />
      </Box>
    </Box>
  );
}

export default About;