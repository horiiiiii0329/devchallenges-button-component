import Item from "./UI/Item";
import Title from "./UI/Title";

function BehindShoppingCartButton() {
  return (
    <Item>
      <Title text={` endIcon="local_grocery_store"`} />
      <button className="font-sans py-2 px-4 rounded-md text-lg bg-blue-600 text-white flex items-center">
        <span className="px-2">Default</span>
        <span class="material-icons">add_shopping_cart</span>
      </button>
    </Item>
  );
}

export default BehindShoppingCartButton;
