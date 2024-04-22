import Button from "../output/react/src/lib/components/button/Button.tsx";

function App() {
  return (
    <div className="w-fit">
      <div className=" p-8 flex flex-col gap-4 bg-surface">
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Intent - Variant</h3>
          <Button intent="primary" variant="ghost">
            Contained
          </Button>
          <Button intent="primary" variant="ghost">
            Inverted
          </Button>
          <Button intent="primary" variant="ghost">
            Neutral
          </Button>
          <Button intent="primary" variant="ghost">
            Ghost
          </Button>
        </div>
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
        {/* <div className="flex gap-2 justify-between">
          <h3 className="w-28">Info</h3>
          <Button intent="info" variant="contained">
            Button
          </Button>
          <Button intent="info" variant="inverted">
            Button
          </Button>
          <Button intent="info" variant="neutral">
            Button
          </Button>
          <Button intent="info" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Success</h3>
          <Button intent="success" variant="contained">
            Button
          </Button>
          <Button intent="success" variant="inverted">
            Button
          </Button>
          <Button intent="success" variant="neutral">
            Button
          </Button>
          <Button intent="success" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Warning</h3>
          <Button intent="warning" variant="contained">
            Button
          </Button>
          <Button intent="warning" variant="inverted">
            Button
          </Button>
          <Button intent="warning" variant="neutral">
            Button
          </Button>
          <Button intent="warning" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Danger</h3>
          <Button intent="danger" variant="contained">
            Button
          </Button>
          <Button intent="danger" variant="inverted">
            Button
          </Button>
          <Button intent="danger" variant="neutral">
            Button
          </Button>
          <Button intent="danger" variant="ghost">
            Button
          </Button>
        </div> */}
      </div>

      {/* <div className="p-8 flex">
        <div className="bg-surface p-4">
          data-mode nothing
          <Button intent="primary" variant="contained">
            Contained
          </Button>
        </div>
        <header className="bg-surface p-4" data-mode="dark">
          data-mode=dark
          <Button intent="primary" variant="contained">
            Contained
          </Button>
        </header>
      </div> */}
    </div>
  );
}

export default App;
