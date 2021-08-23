import BehindShoppingCartButton from "./components/BehindShoppingCartIcon";
import Button from "./components/DefaultButton";
import DisabledButton from "./components/DisabledButton";
import DisabledTextButton from "./components/DisabledTextButton";
import DisableShadowButton from "./components/DisableShadowButton";
import FrontShoppingCartButton from "./components/FrontShoppingCartButton";
import OutlineButton from "./components/OutlineButton";
import TextButton from "./components/textButton";
import Layout from "./components/UI/Layout";

function App() {
  return (
    <div className="px-32 py-20 ">
      <h1 className="font-sans text-2xl text-gray-400">Buttons</h1>
      <Layout>
        <Button />
      </Layout>
      <Layout>
        <OutlineButton />
      </Layout>
      <Layout>
        <TextButton />
      </Layout>
      <Layout>
        <DisableShadowButton />
      </Layout>
      <Layout>
        <DisabledButton />
        <DisabledTextButton />
      </Layout>
      <Layout>
        <FrontShoppingCartButton />
        <BehindShoppingCartButton />
      </Layout>
    </div>
  );
}

export default App;
