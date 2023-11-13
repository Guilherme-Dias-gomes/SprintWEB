import Link from 'next/link'

export default function Home(){

  return(
    <div>
       <h1>Vamos Começar?</h1>

       <Link href="/NotaFiscal">
            <button>Começar</button>
       </Link>
    </div>
  )
}