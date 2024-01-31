export default interface Categoria {
    nome: string | number | readonly string[] | undefined;
    id: number;
    tipo: string;
    descricao:string;
}