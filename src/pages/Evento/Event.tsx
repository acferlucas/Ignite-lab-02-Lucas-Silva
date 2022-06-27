import { Header, SideBar, Video, Footer } from '../../components'
import { gql, useQuery } from "@apollo/client"
import { useParams } from 'react-router-dom'


export function Event(): JSX.Element {

  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video videoSlug={slug} /> : (
          <div className='flex-1 flex justify-center' >
            <h1 className="mt-8 text-[2.5rem] leading-tight">Selecione uma <strong className="text-blue-500">aula</strong> ao lado</h1>
          </div>
        )}
        <SideBar />
      </main>
      <Footer />
    </div>
  )
}