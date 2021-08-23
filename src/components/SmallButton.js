import Item from "./UI/Item";
import Title from "./UI/Title";

function SmallButton() {
  return (
    <Item>
      <Title text={` size="sm"`} />
      <button className="font-sans py-1 px-3 rounded-md text-lg bg-blue-600 text-white shadow-md">
        Default
      </button>
    </Item>
  );
}

export default SmallButton;
