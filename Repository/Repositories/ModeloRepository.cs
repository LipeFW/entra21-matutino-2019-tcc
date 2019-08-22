using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class ModeloRepository : IModeloRepository
    {

        private SystemContext context;

        public ModeloRepository()
        {
            context = new SystemContext();
        }

        public bool Alterar(Marca marca)
        {
            var modeloOriginal = context.Modelos.FirstOrDefault(x => x.Id == modelos);
        }

        public bool Apagar(int id)
        {
            throw new NotImplementedException();
        }

        public int Inserir(Marca marca)
        {
            context.Marcas.Add(marca);
            context.SaveChanges();
            return marca.Id;
        }
    }
}
