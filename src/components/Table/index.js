import React from "react";
import OmgTable from "../../library/OmgTable";
import "./style.css"

const bcolour= "white";
const classes = {
    maindiv: "p-5",
    container: "container",
    title: "btwline",
    subtitle: "",
    span: "omg-lines",
    row: "row",
    col: " p-1 col-4 col-sm-12 col-md-6",
    coldiv: "p-2",
    image: "",
    header: "",
    parag: "p-3 text-justify",
  };

const Table = () => {
    return (
        <OmgTable color={bcolour} classes={classes} />
    )
}
export default Table;