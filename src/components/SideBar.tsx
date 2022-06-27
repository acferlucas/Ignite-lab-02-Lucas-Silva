import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LEESON_QUERRY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

type Lesson = {
  id: string;
  title: string;
  slug: string;
  availableAt: string;
  lessonType: 'live' | 'class';

}

type LessonsQuerryResponse = {
  lessons: Lesson[]
}

export function SideBar(): JSX.Element {
  const { data } = useQuery<LessonsQuerryResponse>(GET_LEESON_QUERRY);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-700">
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