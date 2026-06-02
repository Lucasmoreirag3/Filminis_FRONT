const API_URL = import.meta.env.VITE_API_URL;
 
export async function buscarFilmes(){
    try {
        const resposta = await fetch(`${API_URL}/listagem`)
 
        if(!resposta.ok){
            throw new Error("Erro ao buscar filmes")
        }
 
        const dados = await resposta.json();
        return dados;
 
    } catch (erro) {
        console.error("Erro na API: ", erro)
        return [];
    }
}
 
export async function filmeID(id){
    try{
        const resposta = await fetch(`${API_URL}/filme?id=${id}`)
 
        if (!resposta.ok){
            throw new Error("Erro ao buscar filme.")
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro){
        console.error("Erro na API:", erro)
        return [];
    }
}
 
export async function loginUsuario(email, password){
    try {
        const resposta = await fetch(`${API_URL}/send_loginho`, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: new URLSearchParams({ email, password }).toString(),
 
        })
 
        if (!resposta.ok){
            throw new Error("Erro ao fazer login.")
        }
 
        const dados = await resposta.json();
        return dados
 
    }catch(erro){
        console.error('Erro de login:', erro);
        return null
    }
}