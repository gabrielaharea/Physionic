import Paragraf from "../Paragraf";
import { ReviewCards } from "../ReviewCards";
import React from "react";

const RewiewPages = () => {
  return (
    <div>
      <Paragraf />
      <ReviewCards rewiew="Slate helps you see how many more days you need to work to reach your financial goal." />
      <ReviewCards rewiew="Slate helps you see how many more days you need to work to reach your financial goal." />
      <ReviewCards rewiew="Slate helps you see how many more days you need to work to reach your financial goal." />
    </div>
  );
};

export default RewiewPages;
