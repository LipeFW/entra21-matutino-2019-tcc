using Model;

namespace Repository.Repositories
{
    public interface IVeiculoRepository
    {
        bool Alterar(Veiculo veiculo);
        bool Apagar(int id);
    }
}