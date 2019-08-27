 using System;
 using System.Collections.Generic;
 using System.ComponentModel.DataAnnotations;
 using System.ComponentModel.DataAnnotations.Schema;
 using System.Linq;
 using System.Text;
 using System.Threading.Tasks;
 
 namespace Model
 {
     [Table("notas_fiscais")]
     public class NotaFiscal
     {
         [Key, Column("id")]
         public int Id { get; set; }
 
         [Column("id_venda")]
         public int IdVenda { get; set; }
  
         [ForeignKey("IdVenda")]
         public Venda Venda { get; set; }
 
         [Column("valor_final")]
         public decimal ValorFinal { get; set; }
 
         [Column("registro_ativo")]
         public bool RegistroAtivo { get; set; }
     }
 }
