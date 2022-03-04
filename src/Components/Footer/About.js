import React from "react";
import Containerr from "../Extra/Containerr";
import { FiAward, FiPackage, FiMapPin, FiShield } from "react-icons/fi";

const About = () => {
  return (
    <div
      style={{
        
        backgroundColor: "#F8F8F8",
        padding: "48px 0px",
      }}
    >
      <div style={{ backgroundColor: "#4C4C4C" }}>
        <Containerr>
          <div
            style={{
              textAlign: "center",
              padding: "36px 0px",
              display: "flex",
            }}
          >
            <span style={{flex:1}} >
              {" "}
              <FiShield
                size="2.5rem"
                color="white"
                style={{
                  padding: "20px",
                  backgroundColor: "#F59E13",
                  borderRadius: "50%",
                }}
              />
              <p style={{ color: "white" }}> 100% Genuine Brands </p>{" "}
            </span>

            <span style={{flex:1}} >
              <FiPackage
                size="2.5rem"
                color="white"
                style={{
                  padding: "20px",
                  backgroundColor: "#F59E13",
                  borderRadius: "50%",
                }}
              />
              <p style={{ color: "white" }}> 100% Safe Packing </p>{" "}
            </span>
            <span style={{flex:1}} >
              {" "}
              <FiMapPin
                size="2.5rem"
                color="white"
                style={{
                  padding: "20px",
                  backgroundColor: "#F59E13",
                  borderRadius: "50%",
                }}
              />
              <p style={{ color: "white" }}> Fast Ship and Track</p>{" "}
            </span>
            <span style={{flex:1}} >
              {" "}
              <FiAward
                size="2.5rem"
                color="white"
                style={{
                  padding: "20px",
                  backgroundColor: "#F59E13",
                  borderRadius: "50%",
                }}
              />
              <p style={{ color: "white" }}> 25 Years of Trust </p>{" "}
            </span>
          </div>
        </Containerr>
      </div>
    </div>
  );
};

export default About;
