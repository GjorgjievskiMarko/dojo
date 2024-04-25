import { populateObjWithColors } from "./utils";

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

// const getComponents = async () =>
//   await fetchFigmaApi(`${ENDPOINT}/component_sets`);

const filterByType = (nodes: string[], type: StyleType) =>
  // @ts-expect-error
  nodes.filter((node) => node.style_type === type);

// @ts-expect-error
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
      // @ts-expect-error
      const nodes = await getNodes(getNodeIds(filterStyles(type)));
      return Object.values(nodes.nodes).map((node) => {
        // @ts-expect-error
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

  // const [colors, text, effect, grid] = types;

  const [colors] = types;

  const dojoColors = {};

  const populatedObj = await populateObjWithColors(colors, dojoColors);
  console.log(populatedObj);

  return await populatedObj;
};
