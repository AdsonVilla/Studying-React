import React, { Fragment } from "react";
import Planet from "./planet";

// const showMessageOfClick = (planetName) => {
//   console.log(`click on ${planetName}`);
// };

const Planets = () => {
  return (
    <Fragment>
      <h3>Planets list</h3>
      <button>Show message</button>
      <hr />
      <Planet
        planetName="Saturno"
        planetDescription="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
        link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
        title_with_underline={true}
        gray={true}
      />
      <Planet
        planetName="Vênus"
        planetDescription="Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
        gray={true}
      />
    </Fragment>
  );
};
export default Planets;
