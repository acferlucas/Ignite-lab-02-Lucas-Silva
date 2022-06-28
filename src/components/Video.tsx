import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown } from "phosphor-react";
import { NavButton } from '../components/buttons/NavButton'
import circleImg from '../assets/circle-notch.svg'


import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";



type VideoProps = {
  videoSlug: string;
}

export function Video({ videoSlug }: VideoProps): JSX.Element {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: videoSlug,
    }
  });



  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <img
          src={circleImg}
          alt="circle img"
          className="lg:h-14  animate-spin "

        />
      </div>)
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1500px] max-h-[60vh] aspect-video" >
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-4 lg:p-8 max-w-[1500px] max-auto">
        <section className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1 ">
            <h1 className="text-lg lg:text-2xl font-bold">{data.lesson.title}</h1>
            <p className="text-sm lg:text-base  mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {
              data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-6">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                    src={
                      data.lesson.teacher.avatarURL
                    }
                    alt="perfil" />

                  <div className="leading-relaxed">
                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                    <span className="text-gray-200 text-sm block">{
                      data.lesson.teacher.bio
                    }</span>
                  </div>

                </div>
              )
            }
          </div>
          <div className="w-full lg:max-w-[240px] flex flex-col gap-4">
            <NavButton type="discord" />
            <NavButton type="lightning" />
          </div>
        </section>
        <div className="flex flex-col gap-8 mt-20 lg:grid lg:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 lg:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 min-h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg lg:text-2xl">Material Complementar</strong>
              <p className="text-xs lg:text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>

            </div>
            <div className="min-h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 lg:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 min-h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-4 lg:py-6 leading-relaxed">
              <strong className="text-lg lg:text-2xl">Wallpapers exclusivos</strong>
              <p className="text-xs lg:text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>

            </div>
            <div className="min-h-full p-4 lg:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}