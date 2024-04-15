import ChartComponent from "../ChartComponent"

const SalesChart = () => {

  return <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 py-4">
    <div className="flex items-center w-full justify-between px-5">
        <span className="font-bold text-[#202224] text-[24px]">Gráfico de Vendas</span>
        <select className="outline-none bg-[#FCFDFD] border border-[#D5D5D5] rounded-md px-2 text-[#2B3034]">
            <option>Esse Ano</option>
            <option>Esse Mês</option>
            <option>Essa Semana</option>
        </select>
    </div>
    <ChartComponent/>
  </div>
}

export default SalesChart