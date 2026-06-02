
import { useEffect, useState } from "react";
import { filmeID } from "../services/api";
import { useSearchParams } from "react-router-dom";

export default function Movie() {

    const [buscaParam] = useSearchParams();
    const id = buscaParam.get("id");


    const [filme, setFilme] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        async function carregarFilme() {
            try {
                setCarregando(true)
                setErro("")

                const dados = await filmeID(id);

                if (!dados) {
                    throw new Error("Filme não encontrado")
                }

                setFilme(dados)
            } catch (err) {
                setErro(err.message)
            } finally {
                setCarregando(false)
            }
        }

        if (id) {
            carregarFilme();
        }
    }, [id])

    if (carregando) {
        return <p className="carregando">Carregando...</p>
    }

    if (erro) {
        return <p className="erro">{erro}</p>
    }

    if (!filme) {
        return <p className="erro">Filme não encontrado</p>
    }

    return (
        <main>
            <h1>{filme.titulo}</h1>
            <div>
                <p>Ano: {filme.ano}</p>
                <p>Duração: {filme.duracao} minutos</p>
            </div>

            <figure>
                <img src={filme.poster}
                    alt={`Poster do filme ${filme.titulo}`} />
            </figure>

            <section>
                <h2>Categorias/Gêneros</h2>
                <ul>
                    {filme.categorias.map((c) => (
                        <li>{c}</li>
                    ))}
                </ul>
            </section>
        </main>
        
    )

}
