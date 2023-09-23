import Link from "next/link"
import { Icon } from "../Icon"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { faLanguage, faRightToBracket, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"
import { MoonIcon } from "../Icon/Moon"

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="flex-center flex-col gap-20">
          <li>
            <Link href={'./'} className="text-[4.5rem]">
              <Icon icon={faCircleUser} />
            </Link>
          </li>
          <li>
            <Link href={'./'} className="text-[4.5rem]">
              <Icon icon={faWandMagicSparkles} />
            </Link>
          </li>
          <li>
            <button className="w-[4.5rem] h-[4.5rem]">
              <MoonIcon />
            </button>
          </li>
          <li>
            <button className="text-[4.5rem]">
              <Icon icon={faLanguage} />
            </button>
          </li>
          <li>
            <button className="text-[4.5rem]">
              <Icon icon={faRightToBracket} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}