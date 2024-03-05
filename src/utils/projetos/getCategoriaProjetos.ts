
interface ItemProjeto {
   categoria: String;
}

function getCategoriaProjetos(portfolio : ItemProjeto[] ,tipoCategoria = '') : ItemProjeto[]{
   return portfolio.filter(item => item.categoria === tipoCategoria);
}

export default getCategoriaProjetos;