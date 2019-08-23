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

        public bool Alterar(Modelo modelo)
        {
            var modeloOriginal = context.Modelos.Where(x => x.Id == modelo.Id).FirstOrDefault();

            if (modeloOriginal == null)
                return false;

            modeloOriginal.Nome = modelo.Nome;
            modeloOriginal.IdMarca = modelo.IdMarca;
            modeloOriginal.RegistroAtivo = modelo.RegistroAtivo;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;

        }

        public bool Apagar(int id)
        {
            throw new NotImplementedException();
        }

        public int Inserir(Modelo modelo)
        {
            context.Modelos.Add(modelo);
            context.SaveChanges();
            return modelo.Id;
        }

        public Modelo ObterPeloId(int id)
        {
            var modelo = context.Modelos.FirstOrDefault(x => x.Id == id);
            return modelo;
        }

        public List<Modelo> ObterTodos()
        {
            return context.Modelos.Where(x => x.RegistroAtivo == true).ToList();
        }
    }
}
