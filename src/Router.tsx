import { Route, Routes } from 'react-router-dom';
import { Event } from './pages/Evento/Event'
import { Subscribe } from './pages/Home/Subscribe'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  )
}