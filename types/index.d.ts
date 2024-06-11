interface Project {
  slug: string;
  title: string;
  url?: string;
  sourceUrl?: string;
  hasBlog: boolean;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  imageUrl?: string;
  description: string;
  tags: string[];
}
