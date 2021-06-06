import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Scroll from "react-scroll";
import EditIcon from "@material-ui/icons/Edit";
import Krs from "./FormKr";
import test from "../helpers/test.json";

let Element = Scroll.Element;
let scroll = Scroll.animateScroll;

const Dashboard = () => {
  const [okr, setOkr] = useState({});

  useEffect(() => {
    setOkr(test);
  }, []);

  console.log(okr);

  return (
    <div className="context-data">
      <div className="title-context">
        <h4>{okr.title}</h4>
        <EditIcon className="icon" />
      </div>
      <hr className="hr-title" />
      <h4>
        Obejtivo: <br /> {okr.objective}
      </h4>
      <hr />

      <h4>Resultado Clave </h4>
      <Element
        style={{
          position: "relative",
          height: "200px",
          overflow: "scroll",
        }}
      >
        <Element
          name="firstInsideContainer"
        >
          {test.krs.map((el, index) => (
            <Krs key={uuidv4()} el={el} lenght={index} />
          ))}
        </Element>
      </Element>
    </div>
  );
};

export default Dashboard;
