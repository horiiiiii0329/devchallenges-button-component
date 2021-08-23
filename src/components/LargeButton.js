import Item from "./UI/Item";
import Title from "./UI/Title";

function LargeButton() {
  return (
    <Item>
      <Title text={` size="lg"`} />
      <button className="font-sans py-4 px-6 rounded-md text-lg bg-blue-600 text-white shadow-md">
        Default
      </button>
    </Item>
  );
}

export default LargeButton;
