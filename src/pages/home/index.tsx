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
  TextField,
} from "@mui/material";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import India from "../../../public/assets/4-13.png";
import usa from "../../../public/assets/united-states-flat-rounded-flag-icon-with-transparent-background-free-png.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "").slice(0, 8);
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue(formattedValue);
  };

  const toggleHandler = () => {
    console.log(toggle);
    setToggle(!toggle);
  }

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
          width: "345px",
        }}
      >
        <Box>
          <Card
            sx={{
              padding: "3px 7px",
              borderRadius: "12px",
              margin: "16px 0",
              boxShadow: "none",
              transform: `${toggle && "translate(0px, 160px)"} `,
              transition: "all 0.5s ease",
              position: "inherit",
              zIndex: "2"
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transition: 'all 0.3s ease',
                  padding: "4px",
                  "&:hover": {
                    borderRadius: "8px",
                    backgroundColor: "#e0e0e0cc",
                  },
                }}
              >
                <Image
                  src={India}
                  alt="India"
                  width={40}
                  style={{ aspectRatio: "1" }}
                />
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

              <TextField
                id="standard-basic"
                variant="standard"
                onChange={(e) => handleChange(e)}
                value={value}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                sx={{
                  // Set width as needed
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderRadius: "8px",
                    backgroundColor: "#e0e0e0cc", 
                  },
                  "& input": {
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center", 
                    width: "100px",
                    textAlign: "right", 
                    fontSize: "20px", 
                    padding: "4px", 
                    borderBottom: "none",
                  },
                }}
              />
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
              zIndex: "1"
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
            <Button onClick={toggleHandler}>
            <Box
              sx={{
                width: "32px", 
                height: "32px", 
                borderRadius: "50%", 
                background: "#19468D",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(90deg)", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faArrowRightArrowLeft} color="white" />
            </Box>
              </Button>            
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
              padding: "3px 7px",
              borderRadius: "12px",
              margin: "16px 0",
              boxShadow: "none",
              transform: `${toggle && "translate(0px, -160px)"} `,
              transition: "all 0.5s ease"
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transition: 'all 0.3s ease',
                  padding: "4px",
                  "&:hover": {
                    borderRadius: "8px",
                    backgroundColor: "#e0e0e0cc", 
                  },
                }}
              >
                <Image
                  src={usa}
                  alt="India"
                  width={30}
                  style={{ aspectRatio: "1" }}
                />
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

              <TextField
                id="standard-basic"
                variant="standard"
                onChange={(e) => handleChange(e)}
                value={value}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                sx={{
                  transition: 'all 0.3s ease',
                  "&:hover": {
                    borderRadius: "8px",
                    backgroundColor: "#e0e0e0cc", 
                  },
                  "& input": {
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center", 
                    width: "100px",
                    textAlign: "right", 
                    fontSize: "20px", 
                    padding: "4px", 
                    borderBottom: "none",
                  },
                }}
              />
            </Box>
          </Card>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ margin: "16px 0", borderRadius: "12px", padding: "16px" }}
        >
          Go to exchange currency
        </Button>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "12px",
            color: "#505A63",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Exchange rates are dynamic. Always remember to check the appropriate
          rate in branch before carrying out your exchange
        </Typography>
      </Card>
    </Box>
  );
};

export default Home;
