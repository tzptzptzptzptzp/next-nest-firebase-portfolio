import { Skeleton } from "../../molecules/Skeleton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"

import { linksType } from "@/types/data.type"

type Props = {
  data: linksType
  loading?: boolean
}

export const SnsLinks = ({ data, loading = false }: Props) => {
  console.log(data);

  return (
    <div className="flex-center gap-4 text-[1.8rem]">
      <Skeleton circle isLoading={loading} width={20} height={20}>
        <a href={`https://twitter.com/${data.sns.x}`}>
          <FontAwesomeIcon icon={faXTwitter} width={'1em'} />
        </a>
      </Skeleton>
      <Skeleton circle isLoading={loading} width={20} height={20}>
        <a href={`https://www.instagram.com/${data.sns.instagram}`}>
          <FontAwesomeIcon icon={faInstagram} width={'1em'} />
        </a>
      </Skeleton>
      <Skeleton circle isLoading={loading} width={20} height={20}>
        <a href={`https://github.com/${data.sns.github}`}>
          <FontAwesomeIcon icon={faGithub} width={'1em'} />
        </a>
      </Skeleton>
      {data.link.map((item, i) => (
        <Skeleton circle isLoading={loading} key={i} width={20} height={20}>
          <a href={item}>
            <FontAwesomeIcon icon={faLink} width={'1em'} />
          </a>
        </Skeleton>
      ))}
    </div>
  )
}