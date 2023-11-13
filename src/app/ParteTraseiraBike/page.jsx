import Link from 'next/link'

export default function ParteTraseiraBike(){

    return(
        <main>
            <h1>Parte Traseira Bike</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link href="/ParteFrontalBike">
                <button>Enviar</button>
            </Link>
        </main>
    )
}