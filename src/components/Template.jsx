import React from "react";

import Content from "./Content";
import ImageDiv from "./ImageDiv";

const Template = (props) => {
  const { id, heading, desc, texts, img_id } = props.data;

  return (
    <div
      className={`flex h-4/5 mt-0 ${
        id % 2 == 0 ? "bg-gray-200" : "bg-white"
      } bg-gray-100 justify-around items-center`}
    >
      {id % 2 === 0 ? <ImageDiv dest={img_id} /> : null}
      <Content heading={heading} desc={desc} texts={texts} id={id}></Content>
      {id % 2 !== 0 ? <ImageDiv dest={img_id}  /> : null}
    </div>
  );
};

export default Template;


