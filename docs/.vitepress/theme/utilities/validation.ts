import { Pattern, Tag } from "../composables/patterns";

export const validatePattern = (pattern: Pattern): boolean => {
  return ["id", "title", "description", "type", "tags", "implementation"].every(
    (key) => key in pattern,
  );
};

export const validateTag = (tag: Tag): boolean => {
  return typeof tag === "object" && "name" in tag && "type" in tag;
};

export const validateDisplayMode = (mode: string): boolean => {
  return ["grid", "list"].includes(mode);
};
