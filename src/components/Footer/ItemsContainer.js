import Item from "./Item";
import { ABOUT, SERVICES, CONTACT, HISTORY} from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="PRACTICE AREAS" />
      <Item Links={SERVICES} title="ATTORNEYS" />
      <Item Links={HISTORY} title="HISTORY" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
};

export default ItemsContainer;