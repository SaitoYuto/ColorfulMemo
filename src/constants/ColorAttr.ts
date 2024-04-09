export const COLOR_ATTR = {
  BLUE: {
    COLOR: "blue",
    COLOR_TYPE: "info",
    BG_COLOR: "blue-lighten-4",
  } as const,
  RED: {
    COLOR: "red",
    COLOR_TYPE: "error",
    BG_COLOR: "red-lighten-4",
  } as const,
  YELLOW: {
    COLOR: "yellow",
    COLOR_TYPE: "warning",
    BG_COLOR: "yellow-lighten-4",
  } as const,
  GREEN: {
    COLOR: "green",
    COLOR_TYPE: "success",
    BG_COLOR: "green-lighten-4",
  } as const,
  DEFAULT: {
    COLOR: undefined,
    COLOR_TYPE: undefined,
    BG_COLOR: undefined,
  } as const,
} as const;
