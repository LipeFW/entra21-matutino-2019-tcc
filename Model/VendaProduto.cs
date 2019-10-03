using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("vendas_produtos")]
    public class VendaProduto
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("id_venda")]
        public int IdVenda { get; set; }

        [ForeignKey("IdInventario")]
        public Inventario Inventario { get; set; }

        [Column("id_produto")]
        public int IdProduto { get; set; }

        [ForeignKey("IdProduto")]
        public Produto Produto { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }

    }
}
