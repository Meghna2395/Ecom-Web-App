import React from "react";
import { Boxed, H2 } from "./Boxed";
import style from "./Hover.module.css";

const HoverBox1 = (props) => {
  const names1 = ['Amd', 'Intel']
  const names2 = ['Asrock', 'Asus', 'Gigabyte', 'Msi']
  const names3 = ['Adata', 'Corsair', 'Crucial', 'G.skill', 'HyperX']
  const names4 = ['Wd', 'Seagate']
  const names5 = ['Adata', 'Crucial', 'Kingston', 'Samsung', 'Wd']
  const names6 = ['Antec', 'Cooler master', 'Corsair', 'Deepcool', 'Nzxt', 'thermaltake', 'Noctua']
  const names7 = ['Asus', 'Galax', 'Gigabyte', 'Inno3d', 'Msi', 'Sapphire', 'Zotac']
  const names8 = ['Antec', 'Cooler master', 'Corsair', 'Deepcool', 'Fractal design', 'Nzxt', 'Phanteks', 'Thermaltake']
  const names9 = ['Antec', 'Cooler master', 'Corsair', 'Gigabyte', 'Nzxt', 'thermaltake']
  const names10 = ['Acer', 'Asus', 'Benq', 'Dell', 'Lg', 'Samsung']

  const LinksMap = (name) => {
    let maplinks = name.map((name, i) => {
      return <li key={i} ><a href='/' >{name}</a></li>
    })
    return maplinks
  }

  return (
   
      <div  onMouseLeave={() => {
        props.setDisplay();
      }} className={style.Hover1}>
        <Boxed>
          {/* <ul> */}
            <H2>processor</H2>
            {LinksMap(names1)}
            <li><a href="/" ><u><b>All brands</b></u></a></li>
            <span style={{ color: "white" }}>.</span>
            <H2>motherboard</H2>
            {LinksMap(names2)}
            <li><a href="/" ><u><b>All brands</b></u></a></li>
            <span style={{ color: "white" }}>.</span>
            <H2>ram</H2>
            {LinksMap(names3)}
            <li><a href="/" ><u><b>All brands</b></u></a></li>
          {/* </ul> */}
        </Boxed>
        <Boxed>
          <H2>hdd</H2>
          {LinksMap(names4)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>
          <span style={{ color: "white" }}>.</span>
          <H2>ssd</H2>
          {LinksMap(names5)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>
          <span style={{ color: "white" }}>.</span>
          <H2>cooling system</H2>
          {LinksMap(names6)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>

        </Boxed>
        <Boxed>
          <H2>graphic card</H2>
          {LinksMap(names7)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>
          <span style={{ color: "white" }}>.</span>
          <H2>pc cases</H2>
          {LinksMap(names8)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>
        </Boxed>
        <Boxed>
          <H2>power supply</H2>
          {LinksMap(names9)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>
          <span style={{ color: "white" }}>.</span>
          <H2>monitor</H2>
          {LinksMap(names10)}
          <li><a href="/" ><u><b>All brands</b></u></a></li>
          <li><a href="/" ><b>Powered by asus</b></a></li>
          <li><a href="/" ><b>Frames win Games</b></a></li>
        </Boxed>
      </div>
   
  );  
};

export default HoverBox1;