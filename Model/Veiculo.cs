using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("veiculos")]
    public class Veiculo
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("id_marca")]
        public int IdMarca { get; set; }

        [ForeignKey("IdMarca")]
        public Marca Marca { get; set; }

        [Column("id_modelo")]
        public int IdModelo { get; set; }

        [ForeignKey("IdModelo")]
        public Modelo Modelo { get; set; }

        [Column("ano_fabricacao")]
        public int AnoFabricacao { get; set; }

        [Column("numero_caminhao")]
        public int NumeroCaminhao { get; set; }

        [Column("registro_ativo")]
        public bool RegistroAtivo { get; set; }

        [Column("placa")]
        public string Placa { get; set; }
    }
}
