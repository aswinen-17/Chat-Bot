import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <Box
        sx={{
          minHeight: "calc(100vh - 80px)", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 1200,
          }}
        >
          
          <Box p={2}>
            <Typography variant="h5" mb={2} fontWeight="bold" align="center">
              Text Generation Agent
            </Typography>
            <Card
              onClick={() => navigate("/summary")}
              sx={cardStyle}
            >
              <DescriptionRounded sx={iconStyle} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  TEXT SUMMARY
                </Typography>
                <Typography variant="body2">
                  Summarize long text into short sentences
                </Typography>
              </Stack>
            </Card>
          </Box>

          
          <Box p={2}>
            <Typography variant="h5" mb={2} fontWeight="bold" align="center">
              Paragraph Generation Agent
            </Typography>
            <Card
              onClick={() => navigate("/paragraph")}
              sx={cardStyle}
            >
              <FormatAlignLeftOutlined sx={iconStyle} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  Paragraph
                </Typography>
                <Typography variant="body2">
                  Generate paragraph with words
                </Typography>
              </Stack>
            </Card>
          </Box>

          
          <Box p={2}>
            <Typography variant="h5" mb={2} fontWeight="bold" align="center">
              ChatBot Agent
            </Typography>
            <Card
              onClick={() => navigate("/chatbot")}
              sx={cardStyle}
            >
              <ChatRounded sx={iconStyle} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  Chatbot
                </Typography>
                <Typography variant="body2">
                  Chat with AI Chatbot
                </Typography>
              </Stack>
            </Card>
          </Box>

      
          <Box p={2}>
            <Typography variant="h5" mb={2} fontWeight="bold" align="center">
              JavaScript Converter Agent
            </Typography>
            <Card
              onClick={() => navigate("/js-converter")}
              sx={cardStyle}
            >
              <ChatRounded sx={iconStyle} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  JS Converter
                </Typography>
                <Typography variant="body2">
                  Translate English to JavaScript code
                </Typography>
              </Stack>
            </Card>
          </Box>

           <Box p={2}>
            <Typography variant="h5" mb={2} fontWeight="bold" align="center">
              Interview Preparation Agent
            </Typography>
            <Card
              onClick={() => navigate("/interview")}
              sx={cardStyle}
            >
              <ChatRounded sx={iconStyle} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  Interview Prep
                </Typography>
                <Typography variant="body2">
                  Preparation for the interview
                </Typography>
              </Stack>
            </Card>
          </Box>

          
          <Box p={2}>
            <Typography variant="h5" mb={2} fontWeight="bold" align="center">
              Email writer Agent
            </Typography>
            <Card
              onClick={() => navigate("/email")}
              sx={cardStyle}
            >
              <ChatRounded sx={iconStyle} />
              <Stack p={3} pt={0}>
                <Typography fontWeight="bold" variant="h6">
                  Email writing
                </Typography>
                <Typography variant="body2">
                  Generate an Email
                </Typography>
              </Stack>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};


const cardStyle = {
  boxShadow: 3,
  borderRadius: 4,
  height: 200,
  width: 220,
  transition: "all 0.3s ease",
  "&:hover": {
    border: 2,
    boxShadow: 0,
    borderColor: "primary.main",
    cursor: "pointer",
    transform: "translateY(-5px)",
  },
};

const iconStyle = {
  fontSize: 80,
  color: "primary.main",
  mt: 2,
  ml: 2,
};

export default Homepage;
