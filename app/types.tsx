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


  export interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    coverImage: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    publishDate: string;
    readTime: number;
    category: string;
    tags: string[];
    source: 'medium' | 'internal';
    mediumUrl?: string;
    views: number;
  }