using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVendedorRepository
    {
        int Inserir(Vendedor vendedor);

        bool Alterar(Vendedor vendedor);

        List<Vendedor> ObterTodos();

        Vendedor ObterPeloId(int id);

        bool Apagar(int id);
    }
}
