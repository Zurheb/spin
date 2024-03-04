import React from "react";
import { Creater } from "./Creater/Creater";
import { Deploy } from "./Deploy/Deploy";
import { Manage } from "./Manage/Manage";
import { Documintation } from "./Documintation/Documintation";
import { Supports } from "./Supports/Supports";


export const MiddleOfThePage = () => {
  return (
    <main>
      <Creater />
      <Deploy />
      <Manage/>
      <Documintation/>
      <Supports/>
    </main>
  );
};
