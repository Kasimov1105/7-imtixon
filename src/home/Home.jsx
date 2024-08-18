import React, { useState } from "react";
import Img from "../header/imgfayl/Img";
import style from "../home/home.module.scss";
import Aside from "../acide/Aside";
import Main from "../main/Main";

function Home() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [input, setInput] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [sortBY, setSortBY] = useState("")
  return (
    <div>
      <Img />

      <div className={style.sort}>
        
        <h3>Filter by:</h3>
        <select name="price" value={sortBY} onChange={(e)=>setSortBY(e.target.value)}>
          <option value="">Sort by</option>
          <option value="cheap">cheap</option>
          <option value="expensive">expensive</option>
        </select>
      </div>
      
      <main className={style.mains}>
        <div className={style.aside}>
          <Aside
           selectedBrand={selectedBrand} 
           setSelectedBrand={setSelectedBrand}
           selectedColor={selectedColor}
           setSelectedColor={setSelectedColor} 
           input={input}
           setInput={setInput}
           />
        </div>
        <div className={style.mainWrapper}>
        <Main
                sortBY={sortBY}
                 selectedBrand={selectedBrand}
                 selectedColor={selectedColor}
                 />
        </div>
      </main>
    </div>
  );
}

export default Home;
