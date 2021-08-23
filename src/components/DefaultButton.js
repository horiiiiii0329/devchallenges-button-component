import Item from "./UI/Item";
import Title from "./UI/Title";

function DefaultButton() {
  return (
    <Item>
      <Title></Title>
      <button className="font-sans py-2 px-4 rounded-md text-lg shadow-sm bg-gray-300 hover:bg-gray-600 focus:bg-gray-600">
        Default
      </button>
    </Item>
  );
}

export default DefaultButton;
