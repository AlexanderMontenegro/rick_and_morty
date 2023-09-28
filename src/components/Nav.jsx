import  React  from "react";
import SearchBar from "./SearchBar";
import s from "./Nav.module.css"

export default function Nav(props) {
    return(
    <div className={s.div}>
        <SearchBar onSearch =  {props.onSearch}  className={s.SearchBar} />
    </div>
    );
    
}