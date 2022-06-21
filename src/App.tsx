import { gql, useQuery } from "@apollo/client"
import { client } from './lib/apollo'

const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`
type Lesson = {
  id: string;
  title: string;
}


function App(): JSX.Element {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY)
  console.log(data)
  return (
    <ul>
      {
        data?.lessons.map(lesson => <li className="text-4xl font-bold text-orange-500 " key={lesson.id} >{lesson.title}</li>)
      }
    </ul>
  )
}

export default App
