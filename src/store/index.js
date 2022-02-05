import { createStore } from "vuex";

export default createStore({
  state: {
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
    paints: [
      {
        id: "1",
        name: "ExpateX Super Emulsion Paint",
        thumbnail: "paint-01.png",
        full: "full-01.png",
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
      },
      {
        id: "2",
        name: "ExpateX Textured Paint",
        thumbnail: "paint-02.png",
        full: "full-02.png",
        desc: "Textured finish with an excellent coveragea and sogging resistance.",
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
      },
      {
        id: "3",
        name: "ExpateX Satin Paint",
        thumbnail: "paint-03.png",
        full: "full-03.png",
        desc: "A washable high sheen acrylic water based finish.",
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
      },
      {
        id: "4",
        name: "ExpateX Matt Paint",
        thumbnail: "paint-04.png",
        full: "full-04.png",
        desc: "A high quality fine textured finish with a resistance to extreme weather.",
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
      },
      {
        id: "5",
        name: "ExpateX Gloss Paint",
        thumbnail: "paint-05.png",
        full: "full-05.png",
        desc: "A fast drying alkyd based finish with an excellent sheen",
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
      },
      {
        id: "6",
        name: "ExpateX Road marking Paint",
        thumbnail: "paint-06.png",
        full: "full-06.png",
        desc: "A high blend of alkyd resin and chlorinated rubber based quick ",
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
      },
      {
        id: "7",
        name: "ExpateX Stabilizer Paint",
        thumbnail: "paint-07.png",
        full: "full-07.png",
        desc: "Treatment for walls, Kills algae and fungi attack on walls and ",
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
      },
      {
        id: "8",
        name: "ExpateX Trowel Paint",
        thumbnail: "paint-08.png",
        full: "full-08.png",
        desc: "Attaches naturally to the surface. Water and Fire resistant, Long",
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
      },
      {
        id: "9",
        name: "ExpateX Graphitex Paint",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "Your number one microbial  and water resistant paint",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>Resistant to microbial attack</li>
                        <li>Water resistant</li>
                        <li>Hide's cracks and covers imperfections</li>
                      </ul>`,
          },
        ],
      },
      {
        id: "10",
        name: "ExpateX Textured Paint",
        thumbnail: "paint-02.png",
        full: "full-02.png",
        desc: "Textured finish with an excellent coveragea and sogging resistance.",
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
      },
      {
        id: "11",
        name: "ExpateX Satin Paint",
        thumbnail: "paint-03.png",
        full: "full-03.png",
        desc: "A washable high sheen acrylic water based finish.",
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
      },
      {
        id: "12",
        name: "ExpateX Sterilizer Paint",
        thumbnail: "paint-10.png",
        full: "full-10.png",
        desc: "Treatment for walls, Kills algae and fungi attack on walls Environmental friendly",
        info: [
          {
            name: "Properties",
            content: `<ul>
                      <liTreatment for walls</li>
                      <li>Kills algae and fungi attack on walls</li>
                      <li>Environmental friendly</li>
                      <li>Easy to use</li>
                      </ul>`,
          },
        ],
      },
      {
        id: "13",
        name: "ExpateX Gloss Paint",
        thumbnail: "paint-05.png",
        full: "full-05.png",
        desc: "A fast drying alkyd based finish with an excellent sheen",
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
      },
      {
        id: "14",
        name: "ExpateX Floor Concrete Paint",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "A more value adding alternative to the popular interlocking stones",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>Flexibility and variety in beautiful designs</li>
                        <li>Very durable and ideal for the Nigerian environment</li>
                      </ul>`,
          },
        ],
      },
      {
        id: "15",
        name: "ExpateX Wall Stabilizer Paint",
        thumbnail: "paint-07.png",
        full: "full-11.png",
        desc: "Specially formulated to firm up highly porous walls.",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>Beautiful designs</li>
                        <li>Wipeable and very durable.</li>
                        <li>Water resistant.</li>
                        <li>Suitable cover up for defective areas.</li>
                        <li>Easy to install.</li>
                      </ul>`,
          },
        ],
      },
      {
        id: "16",
        name: "ExpateX Trowel Paint",
        thumbnail: "paint-08.png",
        full: "full-08.png",
        desc: "Attaches naturally to the surface. Water and Fire resistant, Long",
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
      },

      {
        id: "17",
        name: "ExpateX Reflective Road Marking Paint",
        thumbnail: "paint-06.png",
        full: "full-06.png",
        desc: "This is a top quality finish consisting of a high blend of alkyd resin and",
        info: [
          {
            name: "Properties",
            content: `<ul>
                      <li>This is a top quality finish consisting
                      of a high blend of alkyd resin and
                      chlorinated rubber based quick drying
                      paint.</li>
                      <li>It is mostly best used on asphalts
                      and concrete roads majorly</li>
                      <li>Its usage can not be limited to roads but also airport runways, motor
                      garages, parks etc</li>
                      </ul>`,
          },
          {
            name: "Colour Range",
            content: "White, Black, Yellow, Green & Red",
          },
          {
            name: "Pack Size",
            content: "4 Litres gallon and 20 or 200 litres drum",
          },
          {
            name: "Theoretical Coverage",
            content: "20 Litres",
          },
          {
            name: "Practical Spreading Rate",
            content: "4M2 per litre @ 1 coat",
          },
          {
            name: "Drying Time",
            content: "10mins @ 28 degree C",
          },
          {
            name: "Application Method",
            content: "Spray and Brush",
          },
          {
            name: "Shelf Life",
            content: "12 months",
          },
        ],
      },
      {
        id: "18",
        name: "ExpateX Wood  Finishes",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "A high quality finishes designed to meet the demand of a clear",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>A high
                        quality finishes designed to meet the
                        demand of a clear varnish for the
                        protection and beautification of wood
                        products.
                        </li>
                        <li>It is suitable for the interior and exterior
                        use on wooden products giving a glossy,
                        matt, satin finish when it comes to natural
                        Look of the wooden pattern but could also
                        come in stains like matching stain warm,
                        medium warm & cold for those that desire
                        coloured furniture.</li>
                      </ul>`,
          },
          {
            name: "TRANSPARENT COLOUR RANGE",
            content: "Glossy, Matt, Satin Lacquer & Sanding Sealer",
          },
          {
            name: "TRANSLUCENT COLOUR RANGE",
            content: "Matching Stain Warm, Medium Warm & Cold",
          },
          {
            name: "PACK SIZE",
            content: "4 litres gallon, 20 & 200 litres drum",
          },
          {
            name: "THEORETICAL COVERAGE",
            content: "Approx 12M2 per litre (depending on the surface type)",
          },
          {
            name: "DRYING TIME",
            content: "15 mins dry to touch",
          },
          {
            name: "APPLICATION METHOD",
            content: "Best to spray",
          },
        ],
      },
      {
        id: "19",
        name: "ExpateX Cellulose Pigmented  Finishes.",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "basically formulated to leave a smooth surface for the finishing coat",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>A superior quality finish pigmented with a blend of high binding resin and
                        Nitro-cellulose.</li>
                        <li>It is basically formulated to leave a
                        smooth surface for the finishing coat.</li>
                        <li>It is mainly suitable to coat wood,
                        metal and best used with a primer</li>
                      </ul>`,
          },
          {
            name: "TRANSPARENT COLOUR RANGE",
            content:
              "White, Black, Golden Yellow, National Green, Post Office Red, Matt White, Matt Black etc.",
          },
          {
            name: "FINISH",
            content: "Glossy/Matt",
          },
          {
            name: "PACK SIZE",
            content: "4 litres gallon, 20 & 200 litres drum",
          },
          {
            name: "THEORETICAL COVERAGE",
            content: "8M2 per litre @ 1 coat",
          },
          {
            name: "DRYING TIME",
            content: "15mins @ 28 degree C",
          },
          {
            name: "APPLICATION METHOD",
            content: "Spray",
          },
        ],
      },
      {
        id: "20",
        name: "ExpateX Auto Flex Primer Gray",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "Autoflex Primer Grey is a general purpose primer for automotive painting...",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>Autoflex Primer Grey is a general purpose
                        primer for automotive painting. This does
                        not only servers as a primer prepare the
                        body against topcoat but also serves as
                        corrosion protection on the body of a
                        vehicle. 
                        </li>
                        <li>This gives high build effect on the
                        substrate and also excellent obliteration
                        capacity. </li>
                        <li>It usually comes in grey and some times
                        yellow.
                        </li>
                      </ul>`,
          },
        ],
      },
      {
        id: "21",
        name: "ExpateX Red Oxide Primer",
        thumbnail: "paint-05.png",
        full: "full-05.png",
        desc: "For protection of steel/iron and aluminium structures in a mildly  corrosive environment",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>A superior quality alkyd based rust preventing primer that is generally used as
                        a quick drying primer in an alkyd system.                         
                        </li>
                        <li>It is basically used for the protection of
                        steel/iron and aluminium structures in a
                        mildly corrosive environment.
                        </li>
                        <li>It has a excellent obliteration capacity and
                        a high build effect on substrates.
                        </li>
                      </ul>`,
          },
          {
            name: "THEORETICAL COVERAGE",
            content: "10-12m2 per litre @ 1 coat",
          },
          {
            name: "COLOUR",
            content: "Red in Matt Finish",
          },
          {
            name: "APPLICATION METHOD",
            content: "Brush or Roller",
          },
          {
            name: "PACK SIZE",
            content: "4 litres gallon, 20 & 200 litres drum",
          },
          {
            name: "SHELF LIFE",
            content: "12 months",
          },
        ],
      },
      {
        id: "22",
        name: "ExpateX Auto-Flex Matt Black",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "A superior quality matt finish pigmented with a blend of high",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>A superior quality matt finish pigmented
                        with a blend of high binding resin and Nitro- cellulose.                         
                        </li>
                        <li>It is basically formulated to leave a matt finish surface for the finishing coat.
                        </li>
                        <li>It is mainly suitable to coat side mirror casing, bumpers body chrome etc.
                        </li>
                      </ul>`,
          },
        ],
      },
      {
        id: "23",
        name: "ExpateX Auto-Refinishies",
        thumbnail: "paint-11.png",
        full: "full-00.png",
        desc: "An automotive refinishing topcoat paint for a long lasting and maintenance",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>An Alkyd-based
                        synthetic paints that is highly pigmented to give a very good protection and decorative
                        finish specifically designed and formulated for
                        automotive finishing.</li>
                        <li>It is a fast drying automotive refinishing
                        topcoat paint for a long lasting and
                        maintenance-free period for automotive
                        body frames.                        
                        </li>
                      </ul>`,
          },
          {
            name: "Recommended Use",
            content: "Automotive Metals and even Wood",
          },
          {
            name: "Colour Shade",
            content: "Numerous (E.G PEUGEOUT 1473, 101, TOYOTA BLACK)",
          },
          {
            name: "Finish: Glossy",
            content: "Mixing: Nitro-cellulose Thinner 11",
          },
          {
            name: "Application Details",
            content: "Spray only",
          },
          {
            name: "Pack Size",
            content: "1 Litre",
          },
        ],
      },
      {
        id: "24",
        name: "ExpateX Auto-Refinishies Primer",
        thumbnail: "paint-00.png",
        full: "full-00.png",
        desc: "This Autoflex primer has a touch dry period of 15min and it is best to spray",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>A fast
                        drying high quality anti-corrosive
                        undercoat, which when used with our
                        Autoflex topcoat, a long lasting
                        corrosion free result is achieved. 
                        </li>
                        <li>This Autoflex primer has a touch dry
                        period of 15min and it is best to spray.                        
                        </li>
                        <li>Autoflex primer usually comes in grey
                        colour or sometimes yellow.
                        </li>
                      </ul>`,
          },
        ],
      },

      {
        id: "25",
        name: "ExpateX 25 Paint",
        thumbnail: "paint-08.png",
        full: "full-08.png",
        desc: "Attaches naturally to the surface. Water and Fire resistant, Long",
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
      },

      {
        id: "26",
        name: "ExpateX Super Emulsion Paint",
        thumbnail: "paint-01.png",
        full: "full-01.png",
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
      },
      {
        id: "27",
        name: "ExpateX Textured Paint",
        thumbnail: "paint-02.png",
        full: "full-02.png",
        desc: "Textured finish with an excellent coveragea and sogging resistance.",
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
      },
      {
        id: "28",
        name: "ExpateX Satin Paint",
        thumbnail: "paint-03.png",
        full: "full-03.png",
        desc: "A washable high sheen acrylic water based finish.",
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
      },
      {
        id: "29",
        name: "ExpateX Matt Paint",
        thumbnail: "paint-04.png",
        full: "full-04.png",
        desc: "A high quality fine textured finish with a resistance to extreme weather.",
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
      },
      {
        id: "30",
        name: "ExpateX Gloss Paint",
        thumbnail: "paint-05.png",
        full: "full-05.png",
        desc: "A fast drying alkyd based finish with an excellent sheen",
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
      },
      {
        id: "31",
        name: "ExpateX Screed Putty Paint",
        thumbnail: "paint-09.png",
        full: "full-09.png",
        desc: "Treatment for walls, kills algae and fungi attack on walls Environmental",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>Ready-to-use internal screed material</li>
                        <li>Additional material not required before usage</li>
                        <li>Excellent sandability</li>
                        <li>High adhesive property</li>
                      </ul>`,
          },
        ],
      },
      {
        id: "32",
        name: "ExpateX Flexcoat Paint",
        thumbnail: "paint-11.png",
        full: "full-00.png",
        desc: "For residential and commercial Repainting, Restoration and",
        info: [
          {
            name: "Properties",
            content: `<ul>
                        <li>Ready-to-use internal screed material</li>
                        <li>Additional material not required before usage</li>
                        <li>Excellent sandability</li>
                        <li>High adhesive property</li>
                      </ul>`,
          },
        ],
      },
      {
        id: "33",
        name: "ExpateX Trowel Paint",
        thumbnail: "paint-08.png",
        full: "full-08.png",
        desc: "Attaches naturally to the surface. Water and Fire resistant, Long",
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
      },
    ],
  },
  getters: {
    allPaints: (state) => state.paints,
    paint: (state) => state.paints.slice(0, 8),
    specials: (state) => state.paints.slice(8, 16),
    industrials: (state) => state.paints.slice(16, 24),
    decorative: (state) => state.paints.slice(25, 33),
    details: (state) => state.details,
  },
  mutations: {},
  actions: {},
});
