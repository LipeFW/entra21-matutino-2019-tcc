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

        [Column("id_categoria")]
        public int IdCategoria { get; set; }

        [ForeignKey("categoria")]
        public Categoria Categoria { get; set; }

        [Column("codigo_barra")]
        public string CodigoBarra { get; set; }

        [Column("valor_unitario")]
        public decimal ValorUnitario { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }
    }
}
