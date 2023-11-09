import Image from 'next/image'
import Card from './components/card'
import Titulo from './components/titulo'

export default function Home() {
  return (
  
           <main clasName="flex min-h-screen flex-col  ">
            <nav className="flex gap-4 justify-between items-end bg-gray-100 w-full	 p-3">
            <h1 className='flex items-center gap-2 text-5x1 text-amber-400 font-bold y uppercase'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-12">
  <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
</svg>

              NetFlop
              </h1>

           <a href ="/sobre">Sobre</a>
        </nav>
          
            <Titulo>Os Filmes mais flopados</Titulo>
               <section className='flex flex-wrap gap-4 p-4'>
                  <Card titulo="As marvels" nota ={10}/>
                  <Card titulo="Harry potter" nota ={10} />
                  <Card />
                  <Card />
              </section>

            <Titulo> series em alta</Titulo>
            <Titulo> lançamentos</Titulo>
            <Titulo/>
    </main>
  )
}
