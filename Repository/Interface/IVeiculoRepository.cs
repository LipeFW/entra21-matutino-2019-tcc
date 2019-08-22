using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface IVeiculoRepository
    {
        int inserir();
        bool alterar();
        bool apagar();
    }
}
