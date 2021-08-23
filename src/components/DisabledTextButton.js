import Item from "./UI/Item";
import Title from "./UI/Title";

function DisabledTextButton() {
  return (
    <Item>
      <Title text={`variants="text" disabled`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg text-gray-500">
        Default
      </button>
    </Item>
  );
}

export default DisabledTextButton;
