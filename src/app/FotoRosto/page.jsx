import Link from 'next/link'

export default function FotoRosto(){

    return(
        <main>
            <h1>Foto Rosto</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link href="/ValidarBike">
                <button>Enviar</button>
            </Link>    
        </main>
    )
}