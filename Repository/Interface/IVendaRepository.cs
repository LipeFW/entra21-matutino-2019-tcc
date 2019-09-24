using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVendaRepository
    {
        int Inserir(Venda venda);

        bool Alterar(Venda venda);

        List<Venda> ObterTodos();

        Venda ObterPeloId(int id);

        bool Apagar(int id);
    }
}
