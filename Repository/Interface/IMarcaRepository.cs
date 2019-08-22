using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{ 
    public interface IMarcaRepository

   

    {
        int Inserir(Marca marca);

        bool Alterar(Marca marca);

        List<Marca> ObterTodos();

        bool Apagar(int id);

        Marca ObterPeloId(int id);
    }
}
