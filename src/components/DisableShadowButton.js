import Item from "./UI/Item";
import Title from "./UI/Title";

function DisableShadowButton() {
  return (
    <Item>
      <Title text={` disableShadow"`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg bg-blue-600 text-white">
        Default
      </button>
    </Item>
  );
}

export default DisableShadowButton;
