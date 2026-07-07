import { EasingDefinition } from "motion";

export const flickerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 1, 0, 1, 0, 1],
    transition: {
      duration: 1.2,
      delay: 0.3,
      times: [0, 0.6, 0.7, 0.75, 0.82, 0.9, 1],
      ease: [
        "linear", "linear", "easeInOut", "easeInOut", 
        "easeInOut", "easeInOut", "easeInOut"
      ] as EasingDefinition[]
    }
  }
};