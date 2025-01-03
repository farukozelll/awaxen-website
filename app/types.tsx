// types.ts
export interface Feature {
    title: string;
    tag: string;
    description: string;
    icon: string;
    image: string;
    highlights: string[];
  }
  
  export interface ParallaxCardProps {
    feature: Feature;
    index: number;
  }