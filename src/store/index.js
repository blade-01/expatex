import { createStore } from "vuex";

export default createStore({
  state: {
    paints: [
      {
        id: "1",
        name: "ExpateX Super Emulsion Paint",
        thumbnail: "paint-01.png",
        full: "paint-02.png",
        desc: "An Acrylic based Emulsion for finished interior wall and ceiling.",
        info: [
          {
            name: "Usage",
            content: "For Interior and Exterior Substrates.",
          },
          {
            name: "Colours",
            content:
              "Available in ExpateX colour guide and other standard colour.",
          },
          {
            name: "Dry Film Properties",
            content: "Patterned Textured Finish.",
          },
          {
            name: "Packaging",
            content: "20 Litres",
          },
          {
            name: "Practical Spreading Rate",
            content: "1 to 1.5m/l depending on the substrate",
          },
          {
            name: "Drying Time",
            content: "Touch Dry in 1 to 2 hours, Hard Dry in 24 hours",
          },
          {
            name: "Shelf Life",
            content: "12 months",
          },
          {
            name: "Coating System",
            content: "Single Coat",
          },
          {
            name: "Storage",
            content:
              "Store in a cool dry place. Do not use or store in an extreme temperature.",
          },
        ],
        details: [
          {
            name: "Surface Preparation",
            content:
              "Ensure all Surfaces are free of dirt, loose particles, grease and other contaminants that can interfere with the adhesion of the paint on the substrate.",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Avoid inhalation, avoid skin and eye contact by using gloves, goggles, and face masks. Provide adequate ventilation. If product comes in contact with skin, wash thoroughly with plenty water and soap. If the eyes are contaminated ush with water up to 15minutes and seek medical attention.",
            src: "illus-02.png",
          },
        ],
        disclaimer: {
          name: "Disclaimer",
          content:
            "The information given in this sheet is not intended to be exhaustive and any person using the product for any purpose other than that specically recommended in this sheet without rst obtaining written conrmation from us to the suitability of the product for the intended purpose does so at his own risk. We guarantee our product to conform to the specifications contained herein. WE MAKE NO OTHER WARRANTY OR GUARANTEE OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY. The information contained in this sheet is liable to modification from time to time in the light of experience and our policy of continuous improvement, which makes it the responsibility of the person relaying on the information sheet to ensure that he is having the last updated version.",
        },
      },
      {
        id: "2",
        name: "ExpateX Textured Paint",
        thumbnail: "paint-01.png",
        full: "paint-02.png",
        desc: "An Acrylic based Emulsion for finished interior wall and ceiling.",
        info: [
          {
            name: "Usage",
            content: "For Interior and Exterior Substrates.",
          },
          {
            name: "Colours",
            content:
              "Available in ExpateX colour guide and other standard colour.",
          },
          {
            name: "Dry Film Properties",
            content: "Patterned Textured Finish.",
          },
          {
            name: "Packaging",
            content: "20 Litres",
          },
          {
            name: "Practical Spreading Rate",
            content: "1 to 1.5m/l depending on the substrate",
          },
          {
            name: "Drying Time",
            content: "Touch Dry in 1 to 2 hours, Hard Dry in 24 hours",
          },
          {
            name: "Shelf Life",
            content: "12 months",
          },
          {
            name: "Coating System",
            content: "Single Coat",
          },
          {
            name: "Storage",
            content:
              "Store in a cool dry place. Do not use or store in an extreme temperature.",
          },
        ],
        details: [
          {
            name: "Surface Preparation",
            content:
              "Ensure all Surfaces are free of dirt, loose particles, grease and other contaminants that can interfere with the adhesion of the paint on the substrate.",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Avoid inhalation, avoid skin and eye contact by using gloves, goggles, and face masks. Provide adequate ventilation. If product comes in contact with skin, wash thoroughly with plenty water and soap. If the eyes are contaminated ush with water up to 15minutes and seek medical attention.",
            src: "illus-02.png",
          },
        ],
        disclaimer: {
          name: "Disclaimer",
          content:
            "The information given in this sheet is not intended to be exhaustive and any person using the product for any purpose other than that specically recommended in this sheet without rst obtaining written conrmation from us to the suitability of the product for the intended purpose does so at his own risk. We guarantee our product to conform to the specifications contained herein. WE MAKE NO OTHER WARRANTY OR GUARANTEE OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY. The information contained in this sheet is liable to modification from time to time in the light of experience and our policy of continuous improvement, which makes it the responsibility of the person relaying on the information sheet to ensure that he is having the last updated version.",
        },
      },
      {
        id: "3",
        name: "ExpateX Satin Paint",
        thumbnail: "paint-01.png",
        full: "paint-02.png",
        desc: "An Acrylic based Emulsion for finished interior wall and ceiling.",
        info: [
          {
            name: "Usage",
            content: "For Interior and Exterior Substrates.",
          },
          {
            name: "Colours",
            content:
              "Available in ExpateX colour guide and other standard colour.",
          },
          {
            name: "Dry Film Properties",
            content: "Patterned Textured Finish.",
          },
          {
            name: "Packaging",
            content: "20 Litres",
          },
          {
            name: "Practical Spreading Rate",
            content: "1 to 1.5m/l depending on the substrate",
          },
          {
            name: "Drying Time",
            content: "Touch Dry in 1 to 2 hours, Hard Dry in 24 hours",
          },
          {
            name: "Shelf Life",
            content: "12 months",
          },
          {
            name: "Coating System",
            content: "Single Coat",
          },
          {
            name: "Storage",
            content:
              "Store in a cool dry place. Do not use or store in an extreme temperature.",
          },
        ],
        details: [
          {
            name: "Surface Preparation",
            content:
              "Ensure all Surfaces are free of dirt, loose particles, grease and other contaminants that can interfere with the adhesion of the paint on the substrate.",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Avoid inhalation, avoid skin and eye contact by using gloves, goggles, and face masks. Provide adequate ventilation. If product comes in contact with skin, wash thoroughly with plenty water and soap. If the eyes are contaminated ush with water up to 15minutes and seek medical attention.",
            src: "illus-02.png",
          },
        ],
        disclaimer: {
          name: "Disclaimer",
          content:
            "The information given in this sheet is not intended to be exhaustive and any person using the product for any purpose other than that specically recommended in this sheet without rst obtaining written conrmation from us to the suitability of the product for the intended purpose does so at his own risk. We guarantee our product to conform to the specifications contained herein. WE MAKE NO OTHER WARRANTY OR GUARANTEE OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY. The information contained in this sheet is liable to modification from time to time in the light of experience and our policy of continuous improvement, which makes it the responsibility of the person relaying on the information sheet to ensure that he is having the last updated version.",
        },
      },
      {
        id: "4",
        name: "ExpateX Matt Paint",
        thumbnail: "paint-01.png",
        full: "paint-02.png",
        desc: "An Acrylic based Emulsion for finished interior wall and ceiling.",
        info: [
          {
            name: "Usage",
            content: "For Interior and Exterior Substrates.",
          },
          {
            name: "Colours",
            content:
              "Available in ExpateX colour guide and other standard colour.",
          },
          {
            name: "Dry Film Properties",
            content: "Patterned Textured Finish.",
          },
          {
            name: "Packaging",
            content: "20 Litres",
          },
          {
            name: "Practical Spreading Rate",
            content: "1 to 1.5m/l depending on the substrate",
          },
          {
            name: "Drying Time",
            content: "Touch Dry in 1 to 2 hours, Hard Dry in 24 hours",
          },
          {
            name: "Shelf Life",
            content: "12 months",
          },
          {
            name: "Coating System",
            content: "Single Coat",
          },
          {
            name: "Storage",
            content:
              "Store in a cool dry place. Do not use or store in an extreme temperature.",
          },
        ],
        details: [
          {
            name: "Surface Preparation",
            content:
              "Ensure all Surfaces are free of dirt, loose particles, grease and other contaminants that can interfere with the adhesion of the paint on the substrate.",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Avoid inhalation, avoid skin and eye contact by using gloves, goggles, and face masks. Provide adequate ventilation. If product comes in contact with skin, wash thoroughly with plenty water and soap. If the eyes are contaminated ush with water up to 15minutes and seek medical attention.",
            src: "illus-02.png",
          },
        ],
        disclaimer: {
          name: "Disclaimer",
          content:
            "The information given in this sheet is not intended to be exhaustive and any person using the product for any purpose other than that specically recommended in this sheet without rst obtaining written conrmation from us to the suitability of the product for the intended purpose does so at his own risk. We guarantee our product to conform to the specifications contained herein. WE MAKE NO OTHER WARRANTY OR GUARANTEE OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY. The information contained in this sheet is liable to modification from time to time in the light of experience and our policy of continuous improvement, which makes it the responsibility of the person relaying on the information sheet to ensure that he is having the last updated version.",
        },
      },
    ],
  },
  getters: {
    paints: (state) => state.paints,
  },
  mutations: {},
  actions: {},
});
