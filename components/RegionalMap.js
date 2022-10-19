import React from "react";
import Belgium from "@/components/Belgium";
import Portugal from "@/components/Portugal";

const RegionalMaps = {
  Belgium: Belgium,
  Portugal: Portugal,
}

const RegionalMap = (props) => {
  const Map = RegionalMaps[props.countryName]
  if (!Map) {
    return null;
  } else {
    return <Map ref={props.grandChildRef} />
  }
}

export default RegionalMap
