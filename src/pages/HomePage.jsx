import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageAddBtn from "../components/HomePageAddBtn";

function HomePage() {
  return (
    <div>
      <h1>ini homepage</h1>
      <HomePageAddBtn />
    </div>
  );
}

export default HomePage;
