using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class ProdutoRepository : IProdutoRepository
    {
        private SystemContext context;

        public ProdutoRepository()
        {
            context = new SystemContext();
        }


        public bool Apagar(int id)
        {
            var venda = context.Produtos.FirstOrDefault(x => x.Id == id);

            if (venda == null)
                return false;

            venda.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public int Inserir(Produto produto)
        {
            produto.RegistroAtivo = true;
            context.Produtos.Add(produto);
            context.SaveChanges();
            return produto.Id;
        }

        public Produto ObterPeloId(int id)
        {
            return context.Produtos.Include("Categoria").FirstOrDefault(x => x.Id == id);
        }

        public List<Produto> ObterTodos()
        {
            return context.Produtos.Where(x => x.RegistroAtivo).ToList();
        }

        public bool Alterar(Produto produto)
        {
            var produtoOriginal = context.Produtos
                .FirstOrDefault(x => x.Id == produto.Id);

            if (produtoOriginal == null)
                return false;

            produtoOriginal.Id = produto.Id;
            produtoOriginal.Nome = produto.Nome;
            produtoOriginal.Categoria = produto.Categoria;
            produtoOriginal.CodigoBarra = produto.CodigoBarra;
            produtoOriginal.IdCategoria = produto.IdCategoria;
            produtoOriginal.ValorUnitario = produto.ValorUnitario;

            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }
    }
}

