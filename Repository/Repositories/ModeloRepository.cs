using Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public bool Apagar(int id)
        {
            var modelo = context.Modelos.FirstOrDefault(x => x.Id == id);

            if (modelo == null)
                return false;

            modelo.RegistroAtivo = false;
            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }

        public int Inserir(Modelo modelo)
        {
            modelo.RegistroAtivo = true;
            context.Modelos.Add(modelo);
            context.SaveChanges();
            return modelo.Id;
        }

        public Modelo ObterPeloId(int id)
        {
            return context.Modelos.Include("Marca").FirstOrDefault(x => x.Id == id);
        }

        public List<Modelo> ObterTodos()
        {
            return context.Modelos.Where(x => x.RegistroAtivo).Include("Marca").ToList();
        }

        public bool Alterar(Modelo modelo)
        {
            var modeloOriginal = context.Modelos
                .FirstOrDefault(x => x.Id == modelo.Id);

            if (modeloOriginal == null)
                return false;

            modeloOriginal.Id = modelo.Id;
            modeloOriginal.Nome = modelo.Nome;
            modeloOriginal.IdMarca = modelo.IdMarca;

            int quantidadeAfetada = context.SaveChanges();
            return quantidadeAfetada == 1;
        }
    }
}

