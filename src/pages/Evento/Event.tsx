import { Header, Lesson, SideBar, Video } from '../../components'
import { gql, useQuery } from "@apollo/client"


export function Event(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <SideBar />
      </main>
    </div>
  )
}