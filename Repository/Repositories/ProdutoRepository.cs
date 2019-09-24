using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            var produto = context.Produtos.FirstOrDefault(x => x.Id == id);

            if (produto == null)
                return false;

            produto.RegistroAtivo = false;
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
            return context.Produtos.FirstOrDefault(x => x.Id == id);
        }
        public List<Produto> ObterTodos()
        {
            return context.Produtos.Where(x => x.RegistroAtivo == true).Include("Categoria").ToList();
        }

        public bool Alterar(Produto produto)
        {
            var produtoOriginal = context.Produtos
                .FirstOrDefault(x => x.Id == produto.Id);

            if (produtoOriginal == null)
                return false;

            produtoOriginal.Id = produto.Id;
            produtoOriginal.Nome = produto.Nome;
            produtoOriginal.Valor = produto.Valor;
            produtoOriginal.Quantidade = produto.Quantidade;

            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public List<Produto> ObterProdutosPeloIdVenda(int idVenda)
        {
            return context.Produtos.Where(x => x.IdVenda == idVenda && x.RegistroAtivo).ToList();
        }
    }
}

