using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IEstadoRepository
    {
        int Inserir(Estado estado);

        bool Alterar(Estado estado);

        List<Estado> ObterTodosPeloIdPais(int idPais);

        bool Apagar(int id);

        Estado ObterPeloId(int id);
    }
}