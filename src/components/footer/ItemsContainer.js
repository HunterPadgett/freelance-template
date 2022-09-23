import Item from "./Item";
import { ABOUT, SERVICES, CONTACT, } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid text-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="ABOUT" />
      <Item Links={SERVICES} title="SERVICES" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
};

export default ItemsContainer;