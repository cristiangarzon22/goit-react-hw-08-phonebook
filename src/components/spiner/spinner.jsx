import React from "react";
import css from "../spiner/spinner.module.css";
export const SPINNER = () => {
    return(
        <div className={css.container}>
        <div className={css["sk-circle"]}>
        <div className={css["sk-circle1"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle2"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle3"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle4"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle5"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle6"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle7"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle8"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle9"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle10"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle11"] + " " + css["sk-child"]}></div>
        <div className={css["sk-circle12"] + " " + css["sk-child"]}></div>
      </div>
      </div>
    );
}