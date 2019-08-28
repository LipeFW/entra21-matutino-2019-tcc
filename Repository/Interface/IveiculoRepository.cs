using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVeiculoRepository

    {
        int Inserir(Veiculo veiculo);

        bool Alterar(Veiculo veiculo);

        List<Veiculo> ObterTodos();

        Veiculo ObterPeloId(int id);

        bool Apagar(int id);
    }
}
