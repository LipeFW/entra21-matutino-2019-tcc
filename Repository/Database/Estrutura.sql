 DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, clientes,vendedores, rotas, produtos, veiculos, modelos, categorias, marcas, usuarios;
 
 CREATE TABLE usuarios( 
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 senha VARCHAR(100),
 registro_ativo BIT
 );
 
 INSERT INTO usuarios(nome,senha,registro_ativo)
 VALUES ('LipeFW', 'tatofazmano', 1),
 	    ('Illan', 'dknlan123', 1);
 
 CREATE TABLE categorias( 
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 registro_ativo BIT);
  
 INSERT INTO categorias(nome,registro_ativo)
 VALUES ('Bebidas', 1);

  CREATE TABLE veiculos(
 id INT PRIMARY KEY IDENTITY(1,1),
 marca VARCHAR(100),
 modelo VARCHAR(100),
 ano_fabricacao INT,
 numero_caminhao INT,
 placa VARCHAR(8),
 registro_ativo BIT
 );
 
 INSERT INTO veiculos(marca, modelo, ano_fabricacao, numero_caminhao, placa, registro_ativo)
 VALUES ('Ford', 'Cargo', '2005', 002, 'MJX-0585', 1 );
 
 CREATE TABLE vendedores(
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(45),
 id_veiculo INT,
 id_usuario INT,
 FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
 FOREIGN KEY (id_veiculo) REFERENCES veiculos(id),
 registro_ativo BIT);
 
 INSERT INTO vendedores(nome, id_veiculo, id_usuario, registro_ativo)
 VALUES ('Jucas' , 1, 1, 1);
 
 CREATE TABLE clientes(
 id INT PRIMARY KEY IDENTITY(1,1),
 nome  VARCHAR(100),
 telefone VARCHAR(15),
 cnpj VARCHAR (18),
 cpf VARCHAR (14),
 cep  VARCHAR(9),
 registro_ativo BIT,
 id_vendedor INT,
 FOREIGN KEY(id_vendedor) REFERENCES vendedores(id)
 );
 
 INSERT INTO clientes(nome, telefone, cnpj, cpf, cep, registro_ativo, id_vendedor)
 VALUES ('Pedro', '(47) 99158-1254', '08.371.556/0001-04', '241.586.758-63', '89085-578', 1, 1);
 
 CREATE TABLE produtos(
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(50),
 id_categoria INT,
 codigo_barra VARCHAR(30),
 quantidade_produto INT,
 valor_unitario DECIMAL(8,2),
 FOREIGN KEY (id_categoria) REFERENCES categorias(id),
 registro_ativo BIT);
 
 INSERT INTO produtos(id_categoria, codigo_barra, quantidade_produto, valor_unitario, registro_ativo)
 VALUES (1, '173937229417429475205792634916', 1, 1, 1);
 
 CREATE TABLE vendas(
 id INT PRIMARY KEY IDENTITY(1,1),
 quantidade INT,
 id_vendedor INT,
 id_cliente INT,
 id_produto INT,
 FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
 FOREIGN KEY (id_cliente) REFERENCES clientes(id),
 FOREIGN KEY (id_produto) REFERENCES produtos(id),
 total DECIMAL(8,2),
 desconto DECIMAL(8,2),
 registro_ativo BIT);
 
 INSERT INTO vendas(quantidade,id_vendedor,id_cliente,id_produto, registro_ativo, total, desconto)
 VALUES (1, 1, 1, 1, 1, 100, 10);
 
 CREATE TABLE rotas(
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 id_vendedor INT,
 FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
 registro_ativo BIT
 );
 
 INSERT INTO rotas(nome,id_vendedor, registro_ativo)
 VALUES ('Gaspar', 1, 1);
 
 CREATE TABLE notas_fiscais(
 id INT PRIMARY KEY IDENTITY(1,1),
 valor_final DECIMAL(7,2),
 id_venda INT,
 FOREIGN KEY (id_venda) REFERENCES vendas(id),
 registro_ativo BIT
 );
 
 INSERT INTO notas_fiscais(valor_final ,id_venda, registro_ativo)
 VALUES (100, 1, 1);