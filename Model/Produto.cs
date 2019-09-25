using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("produtos")]
    public class Produto
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("nome")]
        public string Nome { get; set; }

        [Column("id_categoria")]
        public int IdCategoria { get; set; }

        [ForeignKey("IdCategoria")]
        public Categoria Categoria { get; set; }

        [Column("quantidade")]
        public int Quantidade { get; set; }

        [Column("valor")]
        public decimal Valor{ get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }

        [Column("id_venda")]
        public int IdVenda { get; set; }

        [ForeignKey("IdVenda")]
        public Venda Venda { get; set; }

    }
}
