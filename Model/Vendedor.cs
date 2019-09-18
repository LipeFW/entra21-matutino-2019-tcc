using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("vendedores")]
    public class Vendedor
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("nome")]
        public string Nome { get; set; }

        [Column("id_usuario")]
        public int IdUsuario { get; set; }

        [ForeignKey("IdUsuario")]
        public Usuario Usuario { get; set; }

        [Column("id_veiculo")]
        public int IdVeiculo { get; set; }

        [ForeignKey("IdVeiculo")]
        public Veiculo Veiculo { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }

        [NotMapped]
        public string MarcaEModelo { get
            {
                return Veiculo.Marca + " " + Veiculo.Modelo;
            } }
    }
}