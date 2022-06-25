import { DiscordLogo, Lightning } from "phosphor-react";

type NavButtonProps = {
  type: "discord" | "lightning";
}

export function NavButton({ type }: NavButtonProps): JSX.Element {

  const text = {
    discord: "Comunidade do Discord",
    lightning: "Acesse o desafio"
  }

  const buttonClasses = {
    discord: "p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors",
    lightning: "p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors",
  }


  return (
    <a href="#" className={buttonClasses[type]} >
      {
        type === 'discord' ? <DiscordLogo size={24} /> : <Lightning size={24} />
      }
      {text[type]}
    </a >

  )
}