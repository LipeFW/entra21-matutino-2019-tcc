DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, produtos, vendedores, veiculos, modelos, clientes, categorias, marcas, usuarios;

CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
senha VARCHAR(45)
);

INSERT INTO usuarios (nome,senha)
VALUES ('Josefino','jsf1520'),
	   ('Illan', 'dknlan123');

CREATE TABLE marcas (
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45)
);

INSERT INTO marcas(nome)
VALUES ('Ford');

CREATE TABLE categorias( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45));

INSERT INTO categorias(nome)
VALUES ('Bebidas');

CREATE TABLE clientes(
id INT PRIMARY KEY IDENTITY(1,1),
nome  VARCHAR(45),
telefone VARCHAR(20),
cnpj VARCHAR (18),
cep  VARCHAR(9)
);

INSERT INTO clientes(nome, telefone, cnpj, cep)
VALUES ('Pedro','47991581254','8888-88','89085-57');

CREATE TABLE modelos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_marca INT,
FOREIGN KEY (id_marca) REFERENCES marcas(id)
);

INSERT INTO modelos(nome,id_marca)
VALUES ('Cargo',1);

CREATE TABLE veiculos(
id INT PRIMARY KEY IDENTITY(1,1),
placa VARCHAR(10),
id_modelo iNT,
FOREIGN KEY (id_modelo) REFERENCES modelos(id)
);

INSERT INTO veiculos(placa,id_modelo)
VALUES ('MJX-0585',1);

CREATE TABLE vendedores(
id INT PRIMARY KEY IDENTITY(1,1),
id_usuario INT,
id_veiculo INT,
FOREIGN KEY(id_veiculo) REFERENCES veiculos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id));

INSERT INTO vendedores (id_usuario, id_veiculo)
VALUES (1,1);

CREATE TABLE produtos(
id INT PRIMARY KEY IDENTITY(1,1),
id_categoria INT,
codigo_barra VARCHAR(12),
quantidade_produto INT,
valor_unitario DECIMAL(8,2),
FOREIGN KEY (id_categoria) REFERENCES categorias(id));

INSERT INTO produtos (id_categoria, codigo_barra, quantidade_produto, valor_unitario)
VALUES (1, 'xxxxxxxxxxxx', 1, 1);

CREATE TABLE vendas(
id INT PRIMARY KEY IDENTITY(1,1),
quantidade INT,
id_vendedor INT,
id_cliente INT,
id_produto INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id),
FOREIGN KEY (id_cliente) REFERENCES clientes(id),
FOREIGN KEY (id_produto) REFERENCES produtos(id));

INSERT INTO vendas (quantidade,id_vendedor,id_cliente,id_produto)
VALUES (1,1,1,1);

CREATE TABLE rotas(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_vendedor INT,
FOREIGN KEY (id_vendedor) REFERENCES vendedores(id)
);

INSERT INTO rotas(nome,id_vendedor)
VALUES ('Gaspar',1);

CREATE TABLE notas_fiscais(
id INT PRIMARY KEY IDENTITY(1,1),
valor_final DECIMAL(7,2),
id_vendas INT,
FOREIGN KEY (id_vendas) REFERENCES vendas(id)
);

INSERT INTO notas_fiscais(valor_final,id_vendas)
VALUES (100,1);