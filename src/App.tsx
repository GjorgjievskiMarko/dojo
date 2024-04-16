import { Button } from "@/lib/components/react";

function App() {
  return (
    <>
      <h1 className="mb-2">Dojo - Casumo design system</h1>
      <div>
        <Button width="full">Mitosis button full width</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="accent" size="icon" rounded="md">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.002 8.29861C20.7327 8.86698 21.1602 9.7409 21.1602 10.6667V20C21.1602 20.5523 20.7124 21 20.1602 21L15.1602 21V15C15.1602 13.3431 13.817 12 12.1602 12C10.5033 12 9.16016 13.3431 9.16016 15V21L4.16016 21C3.60787 21 3.16016 20.5523 3.16016 20V10.6667C3.16016 9.7409 3.58757 8.86698 4.31833 8.29861L10.3183 3.63194C11.4017 2.78935 12.9186 2.78935 14.002 3.63194L20.002 8.29861Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </Button>
        <Button variant="accent" size="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.002 8.29861C20.7327 8.86698 21.1602 9.7409 21.1602 10.6667V20C21.1602 20.5523 20.7124 21 20.1602 21L15.1602 21V15C15.1602 13.3431 13.817 12 12.1602 12C10.5033 12 9.16016 13.3431 9.16016 15V21L4.16016 21C3.60787 21 3.16016 20.5523 3.16016 20V10.6667C3.16016 9.7409 3.58757 8.86698 4.31833 8.29861L10.3183 3.63194C11.4017 2.78935 12.9186 2.78935 14.002 3.63194L20.002 8.29861Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </Button>
        <Button variant="accent" size="icon-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.002 8.29861C20.7327 8.86698 21.1602 9.7409 21.1602 10.6667V20C21.1602 20.5523 20.7124 21 20.1602 21L15.1602 21V15C15.1602 13.3431 13.817 12 12.1602 12C10.5033 12 9.16016 13.3431 9.16016 15V21L4.16016 21C3.60787 21 3.16016 20.5523 3.16016 20V10.6667C3.16016 9.7409 3.58757 8.86698 4.31833 8.29861L10.3183 3.63194C11.4017 2.78935 12.9186 2.78935 14.002 3.63194L20.002 8.29861Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </Button>
        <Button variant="accent" size="sm">
          500,000
        </Button>
        <Button variant="accent" size="sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.002 8.29861C20.7327 8.86698 21.1602 9.7409 21.1602 10.6667V20C21.1602 20.5523 20.7124 21 20.1602 21L15.1602 21V15C15.1602 13.3431 13.817 12 12.1602 12C10.5033 12 9.16016 13.3431 9.16016 15V21L4.16016 21C3.60787 21 3.16016 20.5523 3.16016 20V10.6667C3.16016 9.7409 3.58757 8.86698 4.31833 8.29861L10.3183 3.63194C11.4017 2.78935 12.9186 2.78935 14.002 3.63194L20.002 8.29861Z"
                fill="currentColor"
              />
            </g>
          </svg>
          500,000
        </Button>
        <Button variant="accent" size="sm">
          500,000
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M20.002 8.29861C20.7327 8.86698 21.1602 9.7409 21.1602 10.6667V20C21.1602 20.5523 20.7124 21 20.1602 21L15.1602 21V15C15.1602 13.3431 13.817 12 12.1602 12C10.5033 12 9.16016 13.3431 9.16016 15V21L4.16016 21C3.60787 21 3.16016 20.5523 3.16016 20V10.6667C3.16016 9.7409 3.58757 8.86698 4.31833 8.29861L10.3183 3.63194C11.4017 2.78935 12.9186 2.78935 14.002 3.63194L20.002 8.29861Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </Button>
        <Button variant="link">Need help? Click here</Button>
        box illustrates dark background
        <div className="bg-primary">
          <Button variant="link-inverted">Need help? Click here</Button>
        </div>
      </div>
    </>
  );
}

export default App;
