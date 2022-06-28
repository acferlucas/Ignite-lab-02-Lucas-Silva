import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import classNames from "classnames";

type SideBarProps = {
  isOpen: boolean;
}


export function SideBar({ isOpen }: SideBarProps): JSX.Element {
  const { data } = useGetLessonsQuery();
  return (
    <aside className={classNames("w-[348px] bg-gray-700 p-6 border-l border-gray-700 absolute md:block md:static", {
      "right-0 z-[999]": isOpen,
      "hidden": !isOpen

    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              lessonSlug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}

            />
          ))
        }
      </div>
    </aside>
  )
}