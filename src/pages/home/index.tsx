"use client";

import {
  Box,
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import India from "../../../public/assets/4-13.png";
import usa from "../../../public/assets/united-states-flat-rounded-flag-icon-with-transparent-background-free-png.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Box
      sx={{ backgroundColor: "#2166D1" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Card
        sx={{
          backgroundColor: "#F1F2F4CC",
          padding: "0 16px",
          borderRadius: "16px",
          minWidth: "345px",
        }}
      >
        <Box>
          <Card
            sx={{
              padding: "8px",
              borderRadius: "12px",
              margin: "16px 0",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ margin: "0 10px", fontSize: "12px", color: "#687082" }}
            >
              You give
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              margin="0 8px"
            >
              <Box>
                <Image src={India} alt="India" width={40} style={{aspectRatio: "1"}} />
                <FormControl>
                  <NativeSelect
                    defaultValue="India"
                    inputProps={{
                      name: "currency",
                      id: "uncontrolled-native",
                    }}
                    style={{
                      borderBottom: "none",
                      border: "none",
                      fontWeight: "800",
                    }}
                  >
                    <option value="India">INR</option>
                    <option value="USA">USD</option>
                    <option value="England">Euro</option>
                  </NativeSelect>
                </FormControl>
              </Box>

              <Typography variant="h6" fontWeight="bold">
                45,105
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              padding: "4px",
              borderRadius: "12px",
              margin: "16px 0",
              position: "relative",
              display: "flex",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", color: "#687082" }}
              >
                Exchange rate
              </Typography>
              <Typography variant="h6">&#8377;1 = $0.012 </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "4px",
                backgroundColor: "#2166D1",
                marginX: "-2px",
                border: "none",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "4px",
                backgroundColor: "#F1F2F4CC",
                marginX: "-2px",
                border: "none",
              }}
            ></Box>

            <Box
              sx={{
                width: "32px", // Diameter of the circle
                height: "32px", // Diameter of the circle
                borderRadius: "50%", // To make it a circle
                background: "#19468D",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(90deg)", // Center the circle
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faArrowRightArrowLeft} color="white" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", color: "#687082" }}
              >
                Fee
              </Typography>
              <Typography variant="h6">&#8377;50 </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              padding: "8px",
              borderRadius: "12px",
              margin: "16px 0",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ margin: "0 10px", fontSize: "12px", color: "#687082" }}
            >
              You receive
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              margin="0 8px"
            >
              <Box>
                <Image src={usa} alt="India" width={30} style={{aspectRatio: "1"}} />
                <FormControl>
                  <NativeSelect
                    defaultValue="India"
                    inputProps={{
                      name: "currency",
                      id: "uncontrolled-native",
                    }}
                    style={{
                      borderBottom: "none",
                      border: "none",
                      fontWeight: "800",
                    }}
                  >
                    <option value="India">INR</option>
                    <option value="USA">USD</option>
                    <option value="England">Euro</option>
                  </NativeSelect>
                </FormControl>
              </Box>

              <Typography variant="h6" fontWeight="bold">
                541.97
              </Typography>
            </Box>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
