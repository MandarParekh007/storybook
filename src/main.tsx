import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

import { AppSidebar } from './components/app-sidebar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
        <main className="w-full max-w-[80%] mx-auto flex flex-col items-center justify-center">
  <App />
</main>
    </SidebarProvider>
  </StrictMode>,
)
