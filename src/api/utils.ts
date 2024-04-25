type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const rgbaToHex = ({ r, g, b, a }: RGBA): string => {
  // Ensure RGBA values are within range [0, 255]
  r = Math.max(0, Math.min(255, r * 255));
  g = Math.max(0, Math.min(255, g * 255));
  b = Math.max(0, Math.min(255, b * 255));
  a = Math.max(0, Math.min(1, a)); // Alpha value capped at 1

  // Convert to hex
  var hex = ((r << 16) | (g << 8) | b).toString(16);

  // If alpha is not 1, include it in the hex
  if (a !== 1) {
    var alphaHex = Math.round(a * 255).toString(16);
    if (alphaHex.length === 1) {
      alphaHex = "0" + alphaHex; // Ensure two digits
    }
    hex += alphaHex;
  }

  return "#" + hex.padStart(6, "0"); // Ensure six digits in hex
};

const set = (obj: any, path: string, value: string): void => {
  let schema = obj;
  let pList = path.split("/");
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }

  schema[pList[len - 1]] = value;
};

export const populateObjWithColors = async (
  colors: Record<string, any>[],
  obj: unknown
) => {
  colors.forEach(({ name, fills: { color } }) => {
    if (color) {
      set(obj, name.toLowerCase(), rgbaToHex({ ...color }));
    }
  });

  return obj;
};
