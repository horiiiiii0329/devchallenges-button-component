import Item from "./UI/Item";
import Title from "./UI/Title";

function OutlineButton() {
  return (
    <Item>
      <Title text={`variant="outline"`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg shadow-sm bg-transparent text-blue-600 border-blue-600 border-2 hover:bg-blue-200">
        Default
      </button>
    </Item>
  );
}

export default OutlineButton;
