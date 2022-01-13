import Paragraf from "../Paragraf";
import CardMUI  from "../CardBlue";
import React from "react";

const CardTwo = () => {
  return (
    <div>
      <Paragraf />
      <CardMUI title="Emergency Case" descriptionOne="- The best products start with Figma." descriptionTwo="- Design with real data." descriptionThree="- Lightning fast prototyping."
      descriptionFour="- Fastest way to organize." descriptionFive=" - Work at the speed of thought."/>
      <CardMUI title="Cancer Care" descriptionOne="- The best products start with Figma." descriptionTwo="- Design with real data." descriptionThree="- Lightning fast prototyping."
      descriptionFour="- Fastest way to organize." descriptionFive=" - Work at the speed of thought."/>
      <CardMUI title="Health Queries" descriptionOne="- The best products start with Figma." descriptionTwo="- Design with real data." descriptionThree="- Lightning fast prototyping."
      descriptionFour="- Fastest way to organize." descriptionFive=" - Work at the speed of thought."/>
    </div>
  );
};

export default CardTwo;


