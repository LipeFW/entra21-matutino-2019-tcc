using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IProdutoRepository
    {
        int Inserir(Produto produto);

        bool Alterar(Produto produto);

        List<Produto> ObterTodos();

        bool Apagar(int id);

        Produto ObterPeloId(int id);
    }
}
