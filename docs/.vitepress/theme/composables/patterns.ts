export type TagType = "framework" | "language";

export interface Tag {
  name: string;
  type: TagType;
}

export type PatternType = "integration" | "workflow" | "event-source";

export interface Implementation {
  download?: string;
  deploy?: string;
  testing?: string;
  cleanup?: string;
}

export interface Pattern {
  id: string;
  title: string;
  description: string;
  image?: string;
  type: PatternType;
  tags: Tag[];
  implementation: string | Implementation;
}

export type DisplayMode = "grid" | "list";
