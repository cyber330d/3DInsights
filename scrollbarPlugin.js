// scrollbarPlugin.js

const scrollbarPlugin = ({ addComponents, e, theme }) => {
  const scrollbarVariants = ["horizontal", "vertical"];

  scrollbarVariants.forEach((variant) => {
    const orientation = variant === "horizontal" ? "x" : "y";

    // Base scrollbar classes
    const scrollbarBase = {
      [`.${e(`${variant}-scrollbar`)}`]: {
        [`overflow-${orientation}`]: "scroll",
        [`overflow-${orientation === "x" ? "y" : "x"}`]: "hidden",
      },
      [`.${e(`${variant}-no-scrollbar`)}`]: {
        [`overflow-${orientation}`]: "scroll",
        [`overflow-${orientation === "x" ? "y" : "x"}`]: "hidden",
        "-ms-overflow-style": "none", // IE 10+
        "scrollbar-width": "none", // Firefox
      },
      [`.${e(`${variant}-no-scrollbar::-webkit-scrollbar`)}`]: {
        display: "none",
      },
    };

    // Scrollbar color classes for track and thumb
    const colors = theme("colors");
    Object.keys(colors).forEach((color) => {
      const colorValues =
        typeof colors[color] === "object"
          ? colors[color]
          : { DEFAULT: colors[color] };

      Object.keys(colorValues).forEach((shade) => {
        const className = shade === "DEFAULT" ? color : `${color}-${shade}`;
        const colorValue = colorValues[shade];

        // Thumb background color
        scrollbarBase[
          `.${e(`${variant}-thumb-bg-${className}`)}::-webkit-scrollbar-thumb`
        ] = {
          "background-color": colorValue,
        };

        // Track background color
        scrollbarBase[
          `.${e(`${variant}-track-bg-${className}`)}::-webkit-scrollbar-track`
        ] = {
          "background-color": colorValue,
        };
      });
    });

    // Scrollbar width classes
    const sizes = theme("spacing");
    Object.keys(sizes).forEach((size) => {
      scrollbarBase[
        `.${e(`${variant}-scrollbar-width-${size}`)}::-webkit-scrollbar`
      ] = {
        [variant === "horizontal" ? "height" : "width"]: sizes[size],
      };
    });

    // Thumb border classes
    Object.keys(colors).forEach((color) => {
      const colorValues =
        typeof colors[color] === "object"
          ? colors[color]
          : { DEFAULT: colors[color] };

      Object.keys(colorValues).forEach((shade) => {
        const className = shade === "DEFAULT" ? color : `${color}-${shade}`;
        const colorValue = colorValues[shade];

        scrollbarBase[
          `.${e(
            `${variant}-thumb-border-${className}`
          )}::-webkit-scrollbar-thumb`
        ] = {
          "border-color": colorValue,
          "border-width": "2px",
          "border-style": "solid",
        };
      });
    });

    addComponents(scrollbarBase);
  });
};

module.exports = scrollbarPlugin;
