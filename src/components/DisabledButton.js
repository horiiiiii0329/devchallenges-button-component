import Item from "./UI/Item";
import Title from "./UI/Title";

function DisabledButton() {
  return (
    <Item>
      <Title text={` disabled`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg text-gray-700 bg-gray-200">
        Default
      </button>
    </Item>
  );
}

export default DisabledButton;
