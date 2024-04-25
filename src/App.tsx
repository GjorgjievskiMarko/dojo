import { useEffect } from "react";
import { figmaInit } from "./api/figma.ts";
import Button from "./lib/components/button/Button.tsx";

function App() {
  useEffect(() => {
    (async () => await figmaInit())();
  }, []);

  return (
    <div className="w-fit">
      <div className="p-8 flex flex-col gap-4 bg-surface">
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">No mode</h3>
          <Button variant="primary">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary-2">Button</Button>
          <Button variant="tertiery">Button</Button>
          <Button variant="link">Button Link</Button>
        </div>
        <div className="flex gap-2 justify-between mt-8 bg-purple-80 p-4">
          <h3 className="w-28">Dark mode</h3>
          <Button variant="primary" mode="dark">
            Button
          </Button>
          <Button variant="secondary" mode="dark">
            Button
          </Button>
          <Button variant="secondary-2" mode="dark">
            Button
          </Button>
          <Button variant="tertiery" mode="dark">
            Button
          </Button>
          <Button variant="link" mode="dark">
            Button Link
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
