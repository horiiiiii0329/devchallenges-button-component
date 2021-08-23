import Item from "./UI/Item";
import Title from "./UI/Title";

function TextButton() {
  return (
    <Item>
      <Title text={`variant="text"`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg bg-transparent text-blue-600 hover:bg-blue-200">
        Default
      </button>
    </Item>
  );
}

export default TextButton;
