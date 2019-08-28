 DROP TABLE IF EXISTS notas_fiscais, rotas, vendas,clientes, vendedores, rotas, produtos, veiculos, modelos, categorias, marcas, usuarios;
 
 CREATE TABLE usuarios( 
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 senha VARCHAR(100),
 registro_ativo BIT
 );
 
 INSERT INTO usuarios (nome,senha,registro_ativo)
 VALUES ('LipeFW', 'tatofazmano', 1),
 	    ('Illan', 'dknlan123', 1);
 
 CREATE TABLE marcas (
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 registro_ativo BIT
 );
 
 INSERT INTO marcas(nome,registro_ativo)
 VALUES ('Ford', 1);
 
 CREATE TABLE categorias( 
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 registro_ativo BIT);
  
 INSERT INTO categorias(nome,registro_ativo)
 VALUES ('Bebidas', 1);
 
 CREATE TABLE modelos(
 id INT PRIMARY KEY IDENTITY(1,1),
 nome VARCHAR(100),
 ano_fabricacao INT,
 id_marca INT,
 FOREIGN KEY (id_marca) REFERENCES marcas(id),
 registro_ativo BIT
 );
 
 INSERT INTO modelos(nome, ano_fabricacao, id_marca, registro_ativo)
 VALUES ('Cargo', '2005', 1, 1 );
 
 CREATE TABLE veiculos(
 id INT PRIMARY KEY IDENTITY(1,1),
 numero_caminhao INT ,
 placa VARCHAR(8),
 id_modelo iNT,
 FOREIGN KEY (id_modelo) REFERENCES modelos(id),
 registro_ativo BIT
 );
 
 INSERT INTO veiculos(numero_caminhao, placa, id_modelo, registro_ativo)
 VALUES (002, 'MJX-0585',1 ,1);
 
 CREATE TABLE vendedores(
 id INT PRIMARY KEY IDENTITY(1,1),
 id_usuario INT,
 id_veiculo INT,
 FOREIGN KEY(id_veiculo) REFERENCES veiculos(id),
 FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
 registro_ativo BIT);

 INSERT INTO vendedores (id_usuario, id_veiculo, registro_ativo)
 VALUES (1, 1, 1);
 
 CREATE TABLE clientes(
 id INT PRIMARY KEY IDENTITY(1,1),
 nome  VARCHAR(100),
 telefone VARCHAR(15),
 cnpj VARCHAR (18),
 cpf VARCHAR (14),
 cep  VARCHAR(9),
 id_vendedor INT,
 FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
 registro_ativo BIT
 );

 INSERT INTO clientes(nome, telefone, cnpj, cpf, cep,id_vendedor, registro_ativo)
 VALUES ('Pedro', '(47) 99158-1254', '08.371.556/0001-04', '241.586.758-63', '89085-578',1, 1);
 
 CREATE TABLE produtos(
 id INT PRIMARY KEY IDENTITY(1,1),
 id_categoria INT,
 codigo_barra VARCHAR(30),
 quantidade_produto INT,
 valor_unitario DECIMAL(8,2),
 FOREIGN KEY (id_categoria) REFERENCES categorias(id),
 registro_ativo BIT);
 
 INSERT INTO produtos (id_categoria, codigo_barra, quantidade_produto, valor_unitario, registro_ativo)
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
 
 INSERT INTO vendas (quantidade,id_vendedor,id_cliente,id_produto, registro_ativo)
 VALUES (1, 1, 1, 1, 1);
 
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
 
 INSERT INTO notas_fiscais(valor_final, id_venda, registro_ativo)
 VALUES (100, 1, 1);