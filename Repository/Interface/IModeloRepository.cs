using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IModeloRepository
    {
        int Inserir(Modelo modelo);

        bool Alterar(Modelo modelo);

        List<Modelo> ObterTodos();

        bool Apagar(int id);

        Modelo ObterPeloId(int id);
    }
}
