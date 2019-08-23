using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{


    public interface IRotaRepository

    {
        int Inserir(Rota rota);

        bool Alterar(Rota rota);

        List<Rota> ObterTodos();

        Rota ObterPeloId(int id);

        bool Apagar(int id);
    }
}
