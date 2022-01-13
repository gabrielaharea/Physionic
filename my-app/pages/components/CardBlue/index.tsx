import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import FolderIcon from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import React , {FC, useState} from 'react';

export type Props = {
  width: string;
  height: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const BasicCard: React.FC<Props> = ({width, height, src, alt, title, description }) => {
  const [redMore, setReadMore] = useState(false);

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
        <Paper variant="outlined">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 16 }}
          >
            Emergency Case
          </Typography>

          <CardContent component="div">
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 14 }}
            >
              - The best products start with Figma
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 14 }}
            >
              - Design with real data
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 14 }}
            >
              - Lightning fast prototyping
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 14 }}
            >
              - Fastest way to organize
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 14 }}
            >
              - Work at the speed of thought.
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
