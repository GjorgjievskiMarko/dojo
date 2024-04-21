import MyButton from "./Button";

function App() {
  return (
    <div className="w-fit">
      <div className=" p-8 flex flex-col gap-4 bg-surface">
        {/* <h1 className="mb-2">Dojo - Casumo design system</h1> */}
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Intent - Variant</h3>
          <MyButton intent="primary" variant="ghost">
            Contained
          </MyButton>
          <MyButton intent="primary" variant="ghost">
            Inverted
          </MyButton>
          <MyButton intent="primary" variant="ghost">
            Neutral
          </MyButton>
          <MyButton intent="primary" variant="ghost">
            Ghost
          </MyButton>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Primary</h3>
          <MyButton intent="primary" variant="contained">
            Button
          </MyButton>
          <MyButton intent="primary" variant="inverted">
            Button
          </MyButton>
          <MyButton intent="primary" variant="neutral">
            Button
          </MyButton>
          <MyButton intent="primary" variant="ghost">
            Button
          </MyButton>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Info</h3>
          <MyButton intent="info" variant="contained">
            Button
          </MyButton>
          <MyButton intent="info" variant="inverted">
            Button
          </MyButton>
          <MyButton intent="info" variant="neutral">
            Button
          </MyButton>
          <MyButton intent="info" variant="ghost">
            Button
          </MyButton>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Success</h3>
          <MyButton intent="success" variant="contained">
            Button
          </MyButton>
          <MyButton intent="success" variant="inverted">
            Button
          </MyButton>
          <MyButton intent="success" variant="neutral">
            Button
          </MyButton>
          <MyButton intent="success" variant="ghost">
            Button
          </MyButton>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Warning</h3>
          <MyButton intent="warning" variant="contained">
            Button
          </MyButton>
          <MyButton intent="warning" variant="inverted">
            Button
          </MyButton>
          <MyButton intent="warning" variant="neutral">
            Button
          </MyButton>
          <MyButton intent="warning" variant="ghost">
            Button
          </MyButton>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">Danger</h3>
          <MyButton intent="danger" variant="contained">
            Button
          </MyButton>
          <MyButton intent="danger" variant="inverted">
            Button
          </MyButton>
          <MyButton intent="danger" variant="neutral">
            Button
          </MyButton>
          <MyButton intent="danger" variant="ghost">
            Button
          </MyButton>
        </div>
      </div>

      <div className="p-8 flex">
        <div className="bg-surface p-4">
          data-mode nothing
          <MyButton intent="primary" variant="contained">
            Contained
          </MyButton>
        </div>
        <header className="bg-surface p-4" data-mode="dark">
          data-mode=dark
          <MyButton intent="primary" variant="contained">
            Contained
          </MyButton>
        </header>
      </div>
    </div>
  );
}

export default App;
