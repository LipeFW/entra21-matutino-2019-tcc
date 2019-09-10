using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class MarcaRepository
    {

        private SystemContext context;
        public MarcaRepository()
        {
            context = new SystemContext();
        }

        public List<Marca> ObterTodos()
        {
            return context.Marcas.Where(x => x.RegistroAtivo == true).OrderBy(x => x.Id).ToList();
        }
    }

}
