import React from "react";
import GrayImg from "../../shared/Gray_img";
import DescriptionWithLink from "../../shared/Gray_img/Description_with_link";

const Planet = (props) => {
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.planetName}</u>
      </h4>
    );
  else title = <h4>{props.planetName}</h4>;

  return (
    // <div onClick={() => props.showMessageOfClick(props.planetName)}>
    //   {/* se passar só o parâmetro {props.planetName}, ele vai entender que está chamando a função. Para evitar, usamos uma função anônima no inicio, para que ela dispare */}
    //   <h4>{props.planetName}</h4>
    <div>
      {title}
      <DescriptionWithLink
        planetDescription={props.planetDescription}
        link={props.link}
      />
      <GrayImg img_url={props.img_url} gray={props.gray} />
    </div>
  );
};

export default Planet;
