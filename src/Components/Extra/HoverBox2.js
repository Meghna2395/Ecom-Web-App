import React from "react";
import { Boxed, H2 } from "./Boxed";
import style from "./Hover.module.css";

const HoverBox2 = (props) => {
    const names1 = ["ACER", "MSL"];
    const names2 = ["1 TB", "2TB HDD 256GB SSD", "256GB NVMe SSD 1TB (SATA)"];
    const names3 = ['Coffeelake i7-8700', 'Coffeelake i7-8750H', 'Coffeelake i7-8850H', 'Kabylake i5-7300HQ', 'Kabylake i7-7700HQ', 'Kabylake i7-7820HK', 'Kabylake R i5-8250U', 'Kabylake R i7-8550U']
    const names4 = ['8 GB', '16 GB', '32 GB']
    const names5 = ['15 inch', '15.6 inch', '17 inch', '17.3 inch', '18.4 inch']
    const names6 = ['Windows 10 (High End Devices)',
        'Windows 10 H',
        'Windows 10 MSO',
        'Windows 10 Pro',
        'Windows 10 Home Plus',
        'Windows 10',
        'Linux']
    const names7 = ['GeForce GTX MX150 2GB',
        'Geforce GTX 1050 4GB',
        'Geforce GTX 1050Ti 4GB',
        'Geforce GTX 1060 6GB',
        'Geforce GTX 1070 8GB',
        'Geforce GTX 1080 8GB',
        'Geforce GTX 1080 8GB SLI',
        'Quadro M2200 4GB',
        'Quadro P3000 6GB',]
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
                    <H2>brand</H2>
                    {LinksMap(names1)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>hdd</H2>
                    {LinksMap(names2)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>processor</H2>
                    {LinksMap(names3)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>ram</H2>
                    {LinksMap(names4)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>size</H2>
                    {LinksMap(names5)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>os</H2>
                    {LinksMap(names6)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>graphic card</H2>
                    {LinksMap(names7)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
            </div>
       
    );
};

export default HoverBox2;
