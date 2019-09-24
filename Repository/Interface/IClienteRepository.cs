using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IClienteRepository
    {
        int Inserir(Cliente cliente);

        bool Alterar(Cliente cliente);

        List<Cliente> ObterTodos();

        bool Apagar(int id);

        Cliente ObterPeloId(int id);
    }
}
