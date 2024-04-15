import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

interface Props {
  children:any
}


const Layout = ({ children }: Props ) => {
  return (
    <div className="w-screen bg-slate-100 relative ">
      <Sidebar/>
      <Navbar/>
      <div className="w-full ml-[76px] mt-[70px] border-t border-gray-200 px-6 py-3 box-border flex flex-col">
        <span className="font-bold text-[#202224] text-[30px]">Painel de Controle</span>
        {children}
      </div>
    </div>
  )
}

export default Layout