import { experienceType } from "@/types/data.type"

const technology = 'babel,bash,bootstrap,css,deno,emotion,express,firebase,git,gulp,html,js,jquery,laravel,linux,md,materialui,mongodb,mysql,nestjs,nextjs,nodejs,php,postgres,prisma,pug,rails,react,redux,regex,ruby,sass,sqlite,styledcomponents,supabase,svelte,tailwind,threejs,ts,vercel,vim,vite,vue,webpack,wordpress,windicss'
const application = 'ae,atom,autocad,blender,codepen,discord,figma,github,ai,instagram,linkedin,ps,postman,powershell,pr,twitter,unity,vscode,xd'
const perline = 13

export const Experience = ({ data }: { data: experienceType }) => {
  return (
    <>
      <div>
        {/* eslint-disable-next-line */}
        <img src={`https://skillicons.dev/icons?i=${technology},${application}${perline ? '&perline=' + perline : ''}`} alt="Skill" />
      </div>
    </>
  )
}