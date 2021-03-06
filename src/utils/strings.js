export const includes = (originalStr = "", compareStr = "") =>
  originalStr.toLowerCase().includes(compareStr.toLowerCase());

export const objectToString = (object = {}) =>
  Object.values(object).reduce(
    (acc, value) =>
      `${acc}${value || ""}${typeof value === "object" ? "" : ","}`,
    ""
  );
