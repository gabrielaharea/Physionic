import { FormLabel } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import Form from "../Appointment";
import InfoHome from "../HomeDescription";
import styled from "@emotion/styled";
import * as S from "./styled";
import Stylhome from "./styled";
import CardBlue from "../CardBlue";


const HomePage = () => {
  return (
    <S.Hero>
      <Navbar />
      <Form />
      <InfoHome />
      <CardBlue />
    </S.Hero>
  );
};

export default HomePage;
