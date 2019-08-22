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
        int Inserir(Marca marca);
        bool Alterar(Marca marca);
        bool Apagar(int id);
    }
}
