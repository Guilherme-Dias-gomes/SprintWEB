import Link from 'next/link'

export default function Modificacao(){

    return(
        <main>
            <h1>Modificações</h1>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Catracra</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Manopla</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Marcha</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Pedal</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Pneu frontal</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Pneu traseiro</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Banco</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Guidão</label><br></br>
            <Link href="/FotoDaBike">
                <button>Continuar</button>
            </Link>
        </main>
    )
}