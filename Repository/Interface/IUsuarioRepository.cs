using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IUsuarioRepository
    {
        int Inserir(Usuario usuario);

        bool Alterar(Usuario usuario);

        List<Usuario> ObterTodos();

        bool Apagar(int id);

        Usuario ObterPeloId(int id);
    }
}
