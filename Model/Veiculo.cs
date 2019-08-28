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
  
          [Column("numero_caminhao")]
          public int NumeroCaminhao { get; set; }
  
          [Column("placa")]
          public string Placa { get; set; }
  
      
  
          [Column("registro_ativo")]
          public bool RegistroAtivo { get; set; }
      }
  }