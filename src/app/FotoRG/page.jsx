import Link from 'next/link'

export default function FotoRG(){

    return(
        <main>
            <h1>Foto RG</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link href="/FotoPessoal">
                <button>Enviar</button>
            </Link>
        </main>
    )
}