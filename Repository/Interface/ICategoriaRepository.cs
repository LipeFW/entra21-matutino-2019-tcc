using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface ICategoriaRepository

    {
        int Inserir(Categoria categoria);

        bool Alterar(Categoria categoria);

        List<Categoria> ObterTodos();

        bool Apagar(int id);

        Categoria ObterPeloId(int id);

    }
}
