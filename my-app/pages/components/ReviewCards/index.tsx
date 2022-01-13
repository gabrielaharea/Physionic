import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Props } from "./reviewprops";
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
import Stack from '@mui/material/Stack';

export const CardRewiew: React.FC<Props> = ({
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
      <Box>
        <Paper>
         <Typography>

         </Typography>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Paper>
      </Box>
    </Card>
    </> 
    );
  };

  export default CardRewiew;



