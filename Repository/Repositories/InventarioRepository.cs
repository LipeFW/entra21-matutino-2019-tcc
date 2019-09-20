using Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class InventarioRepository
    {

        private SystemContext context;

        public InventarioRepository()
        {
            context = new SystemContext();

        }

        public List<Inventario> ObterTodos()
        {
            return context.Inventarios.Where(x => x.RegistroAtivo == true).ToList();

        }

    }
}
