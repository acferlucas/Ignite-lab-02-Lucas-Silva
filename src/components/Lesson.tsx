import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Link, useParams } from "react-router-dom";
import classnames from 'classnames'

type LessonProps = {
  title: string;
  lessonSlug: string;
  availableAt: Date;
  type: 'live' | 'class';
}


export function Lesson({ title, availableAt, type, lessonSlug }: LessonProps): JSX.Element {

  const { slug } = useParams<{ slug: string }>()
  const isAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr
  });

  const isActiveLesson = lessonSlug === slug;

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className="text-gray-300">
        {
          availableDateFormatted
        }
      </span>
      <div className={
        classnames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500': isActiveLesson

        })
      }>
        <header className="flex items-center justify-between">
          {
            isAvailable ? (
              <span className={
                classnames('text-sm font-medium  flex items-center gap-2', {
                  'text-white': isActiveLesson,
                  'text-blue-500': !isActiveLesson
                })
              }>
                <CheckCircle size={20} />
                conteúdo liberado
              </span>
            )
              : (
                <span className="text-sm text-orange-500 font-medium  flex items-center gap-2">
                  <Lock size={20} />
                  Em breve
                </span>
              )

          }
          <span className={classnames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson
          })}>
            {
              type === 'live' ? 'ao vivo' : 'Pratica'
            }
          </span>
        </header>
        <strong className={
          classnames('mt-5 block', {
            'text-white': isAvailable,
            ' text-gray-200': !isAvailable
          })
        }>
          {title}
        </strong>
      </div>
    </Link>
  )
}