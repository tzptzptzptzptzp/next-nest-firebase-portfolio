import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"

export const SnsLinks = () => {
  return (
    <>
      <div className="flex-center gap-4 text-[1.8rem]">
        <a href="">
          <FontAwesomeIcon icon={faXTwitter} width={'1em'} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} width={'1em'} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} width={'1em'} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLink} width={'1em'} />
        </a>
      </div>
    </>
  )
}