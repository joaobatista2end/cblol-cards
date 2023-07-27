export default function Page() {
  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-tr from-zinc-800 to-zinc-950 border-b-4 border-yellow-300">
        <div className="flex  flex-col items-center h-full justify-center">
          <h3 className="text-2xl font-bold text-white">League Of Legends Cards</h3>
          <p className="text-yellow-200 mt-2">Create a card pack for League of Legends Brazilian Championship.</p>
        </div>
      </div>
      
      <div className="mt-8 w-4/5 mx-auto flex gap-4">

        <div className="w-60 rounded-lg overflow-hidden shadow-2xl shadow-zinc-200 border-2 border-gray-200">
          <h4 className="bg-slate-50 uppercase text-center font-bold text-zinc-800 py-2">Card Players</h4>
          <div className="px-4 bg-white flex-1 h-full">
            <div className="rounded-md w-full aspect-square bg-cover bg-left bg-[url('https://noticias.maisesports.com.br/wp-content/uploads/2023/04/cartinhas-loud-ilha-das-lendas-1536x864.jpg')]">
            </div>
            <p className="text-gray-800 text-xs mt-4 text-center">
              Card of Players with points and ranking
            </p>
          </div>
        </div>

        <div className="w-60 rounded-lg overflow-hidden shadow-2xl shadow-zinc-200 border-2 border-yellow-400">
          <h4 className="bg-yellow-300 uppercase text-center font-bold text-zinc-800 py-2">Card Teams</h4>
          <div className="p-4  bg-zinc-900 flex-1 h-full">
            <div className="rounded-lg w-full aspect-square bg-cover bg-center bg-[url('https://theclutch.com.br/wp-content/uploads/2022/12/vivo-keyd-stars-elenco-thumb-800x533.jpg')]">
            </div>
            <p className="text-white text-xs mt-4 flex-1 text-center">
              Card of Teams with scores
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}