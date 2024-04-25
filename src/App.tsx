import { useEffect } from "react";
import Button from "../output/react/src/lib/components/button/Button.tsx";
import { figmaInit } from "./api/figma.ts";

function App() {
  const getStyles = async () => {
    const colors = await figmaInit();
  };

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <div data-mode="dark" className="w-fit">
      <div className="p-8 flex flex-col gap-4 bg-surface">
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Primary</h3>
          <Button intent="primary" variant="contained">
            Button
          </Button>
          <Button intent="primary" variant="inverted">
            Button
          </Button>
          <Button intent="primary" variant="neutral">
            Button
          </Button>
          <Button intent="primary" variant="ghost">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
