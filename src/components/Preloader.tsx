import React from "react";
export function Preloader(props: { load: boolean }) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}
