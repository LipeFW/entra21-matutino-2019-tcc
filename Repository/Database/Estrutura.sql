DROP TABLE IF EXISTS notas_fiscais,  rotas, vendas,vendedores, clientes, rotas, produtos, veiculos, modelos, categorias, marcas, usuarios;

CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
senha VARCHAR(45),
registro_ativo BIT
);

INSERT INTO usuarios (nome,senha,registro_ativo)
VALUES ('LipeFW','tatofazmano',1),
	   ('Illan', 'dknlan123',1);

CREATE TABLE marcas (
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
registro_ativo BIT
);

INSERT INTO marcas(nome,registro_ativo)
VALUES ('Ford',1);

CREATE TABLE categorias( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
registro_ativo BIT);

INSERT INTO categorias(nome,registro_ativo)
VALUES ('Bebidas',1);

CREATE TABLE clientes(
id INT PRIMARY KEY IDENTITY(1,1),
nome  VARCHAR(45),
telefone VARCHAR(20),
cnpj VARCHAR (18),
cep  VARCHAR(9),
registro_ativo BIT
);

INSERT INTO clientes(nome, telefone, cnpj, cep, registro_ativo)
VALUES ('Pedro','47991581254','8888-88','89085-57',1);

CREATE TABLE modelos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_marca INT,
FOREIGN KEY (id_marca) REFERENCES marcas(id),
registro_ativo BIT
);

INSERT INTO modelos(nome,id_marca,registro_ativo)
VALUES ('Cargo',1,1);

CREATE TABLE veiculos(
id INT PRIMARY KEY IDENTITY(1,1),
placa VARCHAR(10),
id_modelo iNT,
FOREIGN KEY (id_modelo) REFERENCES modelos(id),
registro_ativo BIT
);

INSERT INTO veiculos(placa,id_modelo,registro_ativo)
VALUES ('MJX-0585',1,1);

CREATE TABLE vendedores(
id INT PRIMARY KEY IDENTITY(1,1),
id_usuario INT,
id_veiculo INT,
FOREIGN KEY(id_veiculo) REFERENCES veiculos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
registro_ativo BIT);

INSERT INTO vendedores (id_usuario, id_veiculo, registro_ativo)
VALUES (1,1,1);

CREATE TABLE produtos(
id INT PRIMARY KEY IDENTITY(1,1),
id_categoria INT,
codigo_barra VARCHAR(12),
quantidade_produto INT,
valor_unitario DECIMAL(8,2),
FOREIGN KEY (id_categoria) REFERENCES categorias(id),
registro_ativo BIT);

INSERT INTO produtos (id_categoria, codigo_barra, quantidade_produto, valor_unitario, registro_ativo)
VALUES (1, 'xxxxxxxxxxxx', 1, 1,1);

CREATE TABLE vendas(
id INT PRIMARY KEY IDENTITY(1,1),
quantidade INT,
id_vendedor INT,
id_cliente INT,
id_produto INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
FOREIGN KEY (id_cliente) REFERENCES clientes(id),
FOREIGN KEY (id_produto) REFERENCES produtos(id),
registro_ativo BIT);

INSERT INTO vendas (quantidade,id_vendedor,id_cliente,id_produto, registro_ativo)
VALUES (1,1,1,1,1);

CREATE TABLE rotas(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_vendedor INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
registro_ativo BIT
);

INSERT INTO rotas(nome,id_vendedor, registro_ativo)
VALUES ('Gaspar',1,1);

CREATE TABLE notas_fiscais(
id INT PRIMARY KEY IDENTITY(1,1),
valor_final DECIMAL(7,2),
id_vendas INT,
FOREIGN KEY (id_vendas) REFERENCES vendas(id),
registro_ativo BIT
);

INSERT INTO notas_fiscais(valor_final,id_vendas, registro_ativo)
VALUES (100,1,1);