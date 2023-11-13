import Link from 'next/link'

export default function FotoDaBike(){

    return(
        <main>
            <h1>Foto da Bike</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link href="/ParteTraseiraBike">
                <button>Enviar</button>
            </Link>
        </main>
    )
}