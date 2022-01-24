import { createStore } from "vuex";

export default createStore({
  state: {
    paints: [
      {
        id: Math.random().toString(36).substring(7).toUpperCase(),
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
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-02.svg",
          },
        ],
        displaimer: {
          name: "Disclaimer",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
        },
      },
      {
        id: Math.random().toString(36).substring(7).toUpperCase(),
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
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-02.svg",
          },
        ],
        displaimer: {
          name: "Disclaimer",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
        },
      },
      {
        id: Math.random().toString(36).substring(7).toUpperCase(),
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
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-02.svg",
          },
        ],
        displaimer: {
          name: "Disclaimer",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
        },
      },
      {
        id: Math.random().toString(36).substring(7).toUpperCase(),
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
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-01.svg",
          },
          {
            name: "Health & Safety Precaution",
            content:
              "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
            src: "illus-02.svg",
          },
        ],
        displaimer: {
          name: "Disclaimer",
          content:
            "Ullamco pariatur veniam eu nostrud. Dolor eiusmod occaecat excepteur occaecat eiusmod elit ad pariatur sit eiusmod cillum dolor aliquip. Do amet tempor sunt cillum nulla dolor labore nisi consectetur. Deserunt tempor exercitation occaecat consectetur fugiat. Ea nisi aliqua occaecat nulla reprehenderit. Veniam ipsum ",
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
