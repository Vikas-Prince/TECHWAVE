import { expect } from "chai";

// 1. Button Click Logic
describe("Button Click Logic", () => {
  it("should increment the count on button click", () => {
    let count = 0;

    function handleClick() {
      count += 1;
    }

    handleClick();
    expect(count).to.equal(1);

    handleClick();
    expect(count).to.equal(2);
  });

  it("should reset count to zero when reset is called", () => {
    let count = 5;

    function reset() {
      count = 0;
    }

    reset();
    expect(count).to.equal(0);
  });
});

// 2. Input Field Behavior
describe("Input Field Behavior", () => {
  it("should update value on input change", () => {
    let inputValue = "";

    function handleChange(event) {
      inputValue = event.target.value;
    }

    handleChange({ target: { value: "Hello World" } });
    expect(inputValue).to.equal("Hello World");

    handleChange({ target: { value: "New Input" } });
    expect(inputValue).to.equal("New Input");
  });
});

describe("Conditional Rendering Logic", () => {
  it("should return 'Loading...' when isLoading is true", () => {
    let isLoading = true;

    function renderContent() {
      if (isLoading) {
        return "Loading...";
      }
      return "Content Loaded";
    }

    expect(renderContent()).to.equal("Loading...");

    isLoading = false;
    expect(renderContent()).to.equal("Content Loaded");
  });
});

describe("Toggle State Logic", () => {
  it("should toggle the value between true and false", () => {
    let isToggled = true;

    function toggle() {
      isToggled = !isToggled;
    }

    toggle();
    expect(isToggled).to.equal(true);

    toggle();
    expect(isToggled).to.equal(false);
  });
});
