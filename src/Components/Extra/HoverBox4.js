import React from "react";
import style from "./Hover.module.css";
import { Boxed, H2 } from "./Boxed";

const HoverBox4 = (props) => {

    const names1 = ['Intel', 'Amd']
    const names2 = ['Amd Epyc 7000 Series',
        'Intel C222 Express PCH',
        'Intel C224 Express PCH',
        'Intel C226 Express PCH',
        'Intel C232',
        'Intel C242',
        'Intel C246',
        'Intel C422',
        'Intel C612',
        'Intel C621',
        'Intel C622']
    const names3 = ['Quadro', 'Tesla']
    const names4 = ['1U Chassis',
        '2U Chassis',
        '3U Chassis',
        'Tower / 4U Chassis',
        'Mid-Tower / Mini-Tower',]
    const names5 = ['16 GB',
        '32 GB',
    ]
    const names6 = ['4 TB',
        '6 TB',
        '10 TB',
        '12 TB',
        '14 TB',
        '16 TB']
    const names7 = ['240 GB',
        '480 GB',
        '960 GB']
    const names8 = ['Areca',
        'Asustor',
        'Iopstor',
        'Netgear',
        'Qnap',
        'Synology',
        'Wd',]
    const names9 = ['Fanless and IoT Gateways',
        'Embedded Mini Tower Systems']


    const LinksMap = (name) => {
        let maplinks = name.map((name, i) => {
            return <li key={i} ><a href='/' >{name}</a></li>
        })
        return maplinks
    }

    return (
        
            <div  onMouseLeave={() => {
                props.setDisplay();
            }}  className={style.Hover1} >

                <Boxed>
                    <H2> Server processor </H2>
                    {LinksMap(names1)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2> Server motherboard </H2>
                    {LinksMap(names2)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2> Server graphic card </H2>
                    {LinksMap(names3)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2> Server CHASSIS </H2>
                    {LinksMap(names4)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2> Super Server </H2>
                    {/* Blank here */}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2> Server memory </H2>
                    {LinksMap(names5)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2> Server hdd </H2>
                    {LinksMap(names6)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2> Server ssd </H2>
                    {LinksMap(names7)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                </Boxed>
                <Boxed>
                    <H2>NAS / STORAGe</H2>
                    {LinksMap(names8)}
                    <li><a href="/" ><u><b>All brands</b></u></a></li>
                    <span style={{ color: "white" }}>.</span>
                    <H2>IOT {'&'} EMBEDDED</H2>
                    {LinksMap(names9)}
                </Boxed>
            </div>
       
    );
};

export default HoverBox4;