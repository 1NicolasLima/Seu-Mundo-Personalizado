// `app/page.tsx` is the UI for the `/` URL
import Link from "next/link"
import './globals.css'
import Image from 'next/image'
import wallpaper from '../../public/img-princ.png'
import Cadeira from '../../public/images/cadeira.png'
import qualificacao from '../../public/images/qualificacao.svg'
import CoracaoVermelho from '../../public/images/corao-like.svg'

export default function Page() {
    return (
      <>
        <div className="flex items-center justify-center bg-slate-900">
          <Image className=""
              src={wallpaper}
              alt="Wallpaper do site"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
        </div>
        <div className="grid justify-center">
          <h2 className="font-bold font-['Poppins'] text-3xl">Ofertas especiais</h2>
          <p className="font-['Poppins'] text-xl">Os melhores preços</p>
        </div>
        <div className="flex justify-center ml-32 mr-32">
          <div className="grid grid-cols-4 gap-2 justify-items-center mt-5 w-3/4 ">
            <div className="w-64 mb-10 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <div className="flex justify-between mr-10">
                <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2>
                <button className="">
                  <Image className="w-8" src={CoracaoVermelho} alt="Cutiu"/>
                </button> 
              </div>
                <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="mb-10 w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
            <div className="w-64 h-56 rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
              <Image className="h-max self-center" src={Cadeira} alt="Produto 1"/>
              <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-xl">Geladeira Brastemp</h1>
              <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
              <h2 className="ml-3 mt-2">R$ 3.599<span className="text-xs">,99</span></h2> 
              <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$250</span>
            </div>
          </div>
        </div>
        
        <Link className="m-20" href="/home">Home</Link>
    </>
    )
  }