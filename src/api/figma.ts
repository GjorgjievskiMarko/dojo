type StyleType = "FILL" | "TEXT" | "EFFECT" | "GRID";

const FIGMA_TOKEN = "282808-2c8b8dd3-9d06-43e4-98dc-84a904bcc612";
const FILE_ID = "prRBYfjGPNnjwt3VwmV2Qb";

const ENDPOINT = `https://api.figma.com/v1/files/${FILE_ID}`;

const defaultHeaders = {
  method: "GET",
  headers: {
    "X-Figma-Token": FIGMA_TOKEN,
  },
};

const fetchFigmaApi = async (url: string) => {
  try {
    const response = await fetch(url, defaultHeaders);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const getStyles = async () => await fetchFigmaApi(`${ENDPOINT}/styles`);

const getNodes = async (nodeIds: string[]) =>
  await fetchFigmaApi(`${ENDPOINT}/nodes?ids=${nodeIds}`);

const roundRGB = (color: number) => Math.round(color * 255);

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

// const getComponents = async () =>
//   await fetchFigmaApi(`${ENDPOINT}/component_sets`);

const filterByType = (nodes: string[], type: StyleType) =>
  nodes.filter((node) => node.style_type === type);

const getNodeIds = (nodes) => nodes.map((style) => style.node_id);

export const figmaInit = async () => {
  const {
    meta: { styles },
  } = await getStyles();

  // const file = await fetchFigmaApi(ENDPOINT);
  // console.log(file);

  // const comp = await getComponents();
  // console.log("COMP", comp);

  const filterStyles = (type: StyleType) => filterByType(styles, type);

  const styleTypes = ["FILL", "TEXT", "EFFECT", "GRID"];

  const types = await Promise.all(
    styleTypes.map(async (type) => {
      const nodes = await getNodes(getNodeIds(filterStyles(type)));
      return Object.values(nodes.nodes).map((node) => {
        const { id, name, style, fills, effects, layoutGrids } = node.document;
        return {
          id,
          name,
          style,
          fills: fills[0],
          effects,
          layoutGrids,
        };
      });
    })
  );

  const [colors, text, effect, grid] = types;

  const dojoColors = colors
    .map(({ name, fills: { color } }) => {
      if (color) {
        return {
          name: name.toLowerCase(),
          color: rgbaToHex({ ...color }),
        };
      }
    })
    .filter(Boolean);

  let obj = {};

  function set(path, value) {
    let schema = obj;
    let pList = path.split("/");
    let len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      let elem = pList[i];
      if (!schema[elem]) schema[elem] = {};
      schema = schema[elem];
    }

    schema[pList[len - 1]] = value;
  }

  (dojoColors || []).forEach(({ name, color }) => set(name, color));

  console.log(obj);

  return await obj;
};
