using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("modelos")]
    public class Modelo
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("nome")]
        public int Nome { get; set; }

        [Column("id_marca")]
        public int IdMarca { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }
    }
}
