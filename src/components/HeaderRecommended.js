import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderRecommended.css";

function HeaderRecommended({ id, title, value }) {
  const productLink = useMemo(() => {
    let link = title.trim();
    link = link.replace(/,/g, "");
    link = link.replace(/  /g, " ");
    link = link.replace(/ /g, "-");
    link = link.toString() + "::id:" + id.toString();

    return link;
  }, []);

  const valueText = useMemo(() => title.slice(0, value.length), [value]);

  const sliceText = useMemo(() => title.slice(value.length), [value]);

  const marginLeft = {
    marginLeft: `5px`,
  };

  const style = {};

  return (
    <Link
      className="header__recommended"
      to={`/amazon-clone/products/${productLink}`}
    >
      <span>{valueText}</span>
      <span
        style={
          valueText[valueText.length - 1] === " " || sliceText[0] === " "
            ? marginLeft
            : style
        }
      >
        {sliceText}
      </span>
    </Link>
  );
}

export default HeaderRecommended;
