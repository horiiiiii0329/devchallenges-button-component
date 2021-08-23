import Item from "./UI/Item";
import Title from "./UI/Title";

function MediumButton() {
  return (
    <Item>
      <Title text={` size="md"`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg bg-blue-600 text-white shadow-md">
        Default
      </button>
    </Item>
  );
}

export default MediumButton;
