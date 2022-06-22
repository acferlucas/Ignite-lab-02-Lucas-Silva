import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

type LessonProps = {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}


export function Lesson({ title, availableAt, type }: LessonProps): JSX.Element {
  const isAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr
  });
  return (
    <a href="#">
      <span className="text-gray-300">
        {
          availableDateFormatted
        }
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {
            isAvailable ? (
              <span className="text-sm text-blue-500 font-medium  flex items-center gap-2">
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
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {
              type === 'live' ? 'ao vivo' : 'Pratica'
            }
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </a>
  )
}