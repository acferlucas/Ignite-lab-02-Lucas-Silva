import { ListPlus } from "phosphor-react";
import { Icon } from "./Logo";

type HeaderProps = {
  handleChangeIsOpen: () => void;
}


export function Header({ handleChangeIsOpen }: HeaderProps): JSX.Element {
  return (
    <header className="w-full px-5 md:px-0 py-5 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600" >
      <Icon />
      <button className="md:hidden" onClick={handleChangeIsOpen} >
        <ListPlus size={30} />
      </button>
    </header>
  )
}