const BG_HIGH_BASE = "#F5F5F5";
const BG_HOVER_HIGH_BASE = "#E8E8E8";

export const CONFING_PRIORITIES = {
  0: {
    priority: 0,
    name: "low",
    icon: "arrow-down",
    color: "#00C972",
    bg_color: BG_HIGH_BASE,
    bg_color_hover: BG_HOVER_HIGH_BASE,
  },
  1: {
    priority: 1,
    name: "medium",
    icon: "arrow-right",
    color: "#ffac2c",
    bg_color: BG_HIGH_BASE,
    bg_color_hover: BG_HOVER_HIGH_BASE,
  },
  2: {
    priority: 2,
    name: "high",
    icon: "arrow-up",
    color: "#e44259",
    bg_color: BG_HIGH_BASE,
    bg_color_hover: BG_HOVER_HIGH_BASE,
  },
  3: {
    priority: 3,
    name: "urgent",
    icon: "exclamation-triangle",
    color: "#e44259",
    bg_color: BG_HIGH_BASE,
    bg_color_hover: BG_HOVER_HIGH_BASE,
  },
};
