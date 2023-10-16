import Link from "next/link";
import Image from 'next/image'
import qualificacao from '../../public/images/qualificacao.svg'
import CamisaPersonalizada from '../../public/images/camisa-personalizada.webp'
import CamisaVermelha from '../../public/images/camisa-personalizada-vermelha.webp'
import CamisaCinza from '../../public/images/camisa-personalizada-cinza.webp'
import CamisaBranca from '../../public/images/camisa-personalizada-white.webp'
import CamisaPersonalizadaZoom from '../../public/images/camisa-personalizada-white-zoom.webp'



    export function Camisa(){

    return(
        <div>
            <div className="flex justify-center ml-32 mr-32 font-['Poppins'] text-xl">
                <div className="grid sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 gap-12 justify-items-center mt-5 w-4/4">
                    <Link href='/camisa-preta'>
                        <div className="w-72 mb-10 h-max rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
                            <Image id='imagem1' className="h-max self-center" src={CamisaPersonalizada} alt="Produto 1"/>
                            <Image id='imagem2' className="h-max self-center" src={CamisaPersonalizadaZoom} alt="Produto 1"/>
                            <h1 className="ml-3 mt-2 font-bold text-sm">Camiseta Personalizada - Envie sua arte</h1>
                            <Image className="ml-4 w-14  h-max" src={qualificacao} alt="qualificacao do produto"/>
                            <div className="flex justify-between mr-10">
                                <h2 className="ml-3 mt-2">R$ 89<span className="text-xs">,90</span></h2>
                                {/* <button className="">
                                <Image className="w-8" src={CoracaoVermelho} alt="Cutiu"/>
                                </button>  */}
                            </div>
                            <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$8,99</span>
                        </div>
                    </Link>
                    <Link href='/camisa-vermelha'>
                    <div className="w-72 mb-10 h-max rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
                        <Image className="h-max self-center" src={CamisaVermelha} alt="Produto 2"/>
                        <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-sm">Camiseta Personalizada - Envie sua arte</h1>
                        <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
                        <h2 className="ml-3 mt-2">R$ 89<span className="text-xs">,90</span></h2> 
                        <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$8,99</span>
                    </div>
                    </Link>
                    <Link href='/camisa-cinza'>
                    <div className="w-72 mb-10 h-max rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
                        <Image className="h-max self-center" src={CamisaCinza} alt="Produto 1"/>
                        <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-sm">Camiseta Personalizada - Envie sua arte</h1>
                        <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
                        <h2 className="ml-3 mt-2">R$ 89<span className="text-xs">,90</span></h2> 
                        <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$8,99</span>
                    </div>
                    </Link>
                    <Link href='/camisa-branca'>
                    <div className="w-72 mb-10 h-max rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300 flex flex-col">
                        <Image className="h-max self-center" src={CamisaBranca} alt="Produto 1"/>
                        <h1 className="ml-3 mt-2 font-bold font-['Poppins'] text-sm">Camiseta Personalizada - Envie sua arte</h1>
                        <Image className="ml-4 w-14  h-max font- ['Poppins'] text-md" src={qualificacao} alt="qualificacao do produto"/>
                        <h2 className="ml-3 mt-2">R$ 89<span className="text-xs">,90</span></h2> 
                        <span className="ml-3 text-xs font-['Poppins'] text-current">10x de R$8,99</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}