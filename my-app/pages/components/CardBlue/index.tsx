import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Props } from "./CardMUI.d";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../theme";
import { CardHeader } from "@mui/material";
import FolderIcon from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import * as React from "react";

export const CardMUI: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  descriptionFive,
}) => {
  return (
    <>
      <Card>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 328,
              height: 250,
            },
          }}
        >
          <Paper elevation={0}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: 16 , textAlign: 'center' }}
            >
              {title}
            </Typography>

            <CardContent component="div">
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontSize: 14 }}
              >
                {descriptionOne}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontSize: 14 }}
              >
                {descriptionTwo}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontSize: 14 }}
              >
                {descriptionThree}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontSize: 14 }}
              >
                {" "}
                {descriptionFour}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontSize: 14 }}
              >
                {descriptionFive}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Paper>
        </Box>
      </Card>
    </>
  );
};

export default CardMUI;
