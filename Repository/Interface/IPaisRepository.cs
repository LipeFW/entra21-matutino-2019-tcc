using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IPaisRepository
    {
        int Inserir(Pais pais);

        bool Alterar(Pais pais);

        List<Pais> ObterTodos(string query);

        bool Apagar(int id);

        Pais ObterPeloId(int id);
    }
}
