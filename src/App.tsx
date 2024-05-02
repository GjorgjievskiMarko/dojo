import { useEffect } from "react";
import { figmaInit } from "./api/figma.ts";
import Button from "./lib/components/button/Button.tsx";
import { Card } from "./lib/components/card/Card.tsx";

function App() {
  useEffect(() => {
    (async () => await figmaInit())();
  }, []);

  return (
    <div className="">
      <Card
        className="max-w-96"
        title="Basic card long title to widen the width"
        linkHref="www.example.com"
        linkText="See more"
        titleIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.7296 10.2762C22.0442 11.0495 22.0442 12.9507 20.7296 13.724L9.6742 20.2271C8.34093 21.0114 6.66016 20.0501 6.66016 18.5033L6.66016 5.49693C6.66016 3.9501 8.34093 2.98879 9.6742 3.77306L20.7296 10.2762Z"
                fill="currentColor"
              />
            </g>
          </svg>
        }
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.7296 10.2762C22.0442 11.0495 22.0442 12.9507 20.7296 13.724L9.6742 20.2271C8.34093 21.0114 6.66016 20.0501 6.66016 18.5033L6.66016 5.49693C6.66016 3.9501 8.34093 2.98879 9.6742 3.77306L20.7296 10.2762Z"
                fill="currentColor"
              />
            </g>
          </svg>
        }
        navigationText="Step 1 of 3"
        onIconClick={() => console.log("icon click")}
        description="Lorem ipsum dolor sit amet consectetur. Sem scelerisque tellus malesuada aliquam."
      >
        <Button variant="primary" width="full">
          Button
        </Button>
      </Card>
      <Card>
        <Button variant="primary">Button</Button>
      </Card>
      <div className="p-8 flex flex-col gap-4 bg-surface">
        <div className="flex gap-2">
          <Button>
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M20.7296 10.2762C22.0442 11.0495 22.0442 12.9507 20.7296 13.724L9.6742 20.2271C8.34093 21.0114 6.66016 20.0501 6.66016 18.5033L6.66016 5.49693C6.66016 3.9501 8.34093 2.98879 9.6742 3.77306L20.7296 10.2762Z"
                  fill="white"
                />
              </g>
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M20.7296 10.2762C22.0442 11.0495 22.0442 12.9507 20.7296 13.724L9.6742 20.2271C8.34093 21.0114 6.66016 20.0501 6.66016 18.5033L6.66016 5.49693C6.66016 3.9501 8.34093 2.98879 9.6742 3.77306L20.7296 10.2762Z"
                  fill="white"
                />
              </g>
            </svg>
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size="sm">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M20.7296 10.2762C22.0442 11.0495 22.0442 12.9507 20.7296 13.724L9.6742 20.2271C8.34093 21.0114 6.66016 20.0501 6.66016 18.5033L6.66016 5.49693C6.66016 3.9501 8.34093 2.98879 9.6742 3.77306L20.7296 10.2762Z"
                  fill="white"
                />
              </g>
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M20.7296 10.2762C22.0442 11.0495 22.0442 12.9507 20.7296 13.724L9.6742 20.2271C8.34093 21.0114 6.66016 20.0501 6.66016 18.5033L6.66016 5.49693C6.66016 3.9501 8.34093 2.98879 9.6742 3.77306L20.7296 10.2762Z"
                  fill="white"
                />
              </g>
            </svg>
            Button
          </Button>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">No mode</h3>
          <Button variant="primary">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary-2">Button</Button>
          <Button variant="tertiary">Button</Button>
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
          <Button variant="tertiary" mode="dark">
            Button
          </Button>
          <Button variant="link" mode="dark">
            Button Link
          </Button>
        </div>
        <div className="flex gap-2 justify-between">
          <h3 className="w-28">No mode</h3>
          <Button variant="primary" size="sm">
            Button
          </Button>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button variant="secondary-2" size="sm">
            Button
          </Button>
          <Button variant="tertiary" size="sm">
            Button
          </Button>
          <Button variant="link" size="sm">
            Button Link
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
