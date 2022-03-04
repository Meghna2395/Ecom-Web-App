import React from "react";
import style from "./Hover.module.css";
import { Boxed, H2 } from "./Boxed";

const HoverBox3 = (props) => {
    const names1 = ['Ant Esports',
        'ASUS',
        'Cooler Master',
        'Corsair',
        'Gigabyte',
        'HyperX',
        'Logitech',
        'Razer',
        'Thermaltake',
        'XPG (ADATA)',]
    const names2 = ['ASUS',
        'Corsair',
        'Benq',
        'Cooler Master',
        'Logitech',
        'Thermaltake',
        'XPG (ADATA)',]
    const names3 = ['Corsair',
        'HyperX',
        'Galax',
        'Razer',
        'Thermaltake',
        'XPG (ADATA)',]
    const names4 = ['Ant esports',
        'Corsair',
        'GIGABYTE AORUS',
        'Thermaltake (Tt eSPORTS)',]
    const names5 = ['Ant Esports',
        'ASUS',
        'Cooler Master',
        'HyperX',
        'Razer',
        'Thermaltake',
        'XPG (ADATA)',]
    const names6 = ['Suitable For Large Homes',
        'Suitable For Very Large Homes',
        'Suitable For Medium Homes']

    const LinksMap = (name) => {
        let maplinks = name.map((name, i) => {
            return <li key={i} ><a href='/' >{name}</a></li>
        })
        return maplinks
    }
    return (
       
            <div  onMouseLeave={() => {
                props.setDisplay();
            }} className={style.Hover1} > 
                <Boxed>
                    <H2>gaming keyboard </H2>
                    {LinksMap(names1)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>gaming mouse </H2>
                    {LinksMap(names2)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>gaming mouse pad </H2>
                    {LinksMap(names3)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>gaming chair </H2>
                    {LinksMap(names4)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>gaming headsets </H2>
                    {LinksMap(names5)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>gaming wireless routers </H2>
                    {LinksMap(names6)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>watch strap</H2>
                    {/* Blank here */}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
            </div>
        
    );
};

export default HoverBox3;
