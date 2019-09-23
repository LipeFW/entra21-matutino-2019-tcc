DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, clientes,vendedores, rotas, produtos,inventarios, veiculos, modelos, categorias, marcas, usuarios, cidades, estados, paises;

CREATE TABLE paises(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT
);
INSERT INTO paises(nome, registro_ativo) VALUES 
/*<--Países da América do Norte (ID 1 - 3)-->*/
/*ID 1*/('Canadá', 1),
/*ID 2*/('Estados Unidos da América', 1),
/*ID 3*/('México', 1),
/*<--/Países da América do Norte-->*/
/*<--Países da América Central   (ID 4 - 23)-->*/
/*ID 4*/('Antígua e Barbuda', 1),
/*ID 5*/('Bahamas', 1),
/*ID 6*/('Barbados', 1),
/*ID 7*/('Belize', 1),
/*ID 8*/('Costa Rica', 1),
/*ID 9*/('Cuba', 1),
/*ID 10*/('Dominica', 1),
/*ID 11*/('El Salvador', 1),
/*ID 12*/('Granada', 1),
/*ID 13*/('Guatemala', 1),
/*ID 14*/('Haiti', 1),
/*ID 15*/('Honduras', 1),
/*ID 16*/('Jamaica', 1),
/*ID 17*/('Nicarágua', 1),
/*ID 18*/('Panamá', 1),
/*ID 19*/('República Dominicana', 1),
/*ID 20*/('Santa Lúcia', 1),
/*ID 21*/('São Cristóvão e Nevis', 1),
/*ID 22*/('São Vicente e Granadinas', 1),
/*ID 23*/('Trinidad e Tobago', 1),
/*<--/Países da América Central-->*/
/*<--Países da América do Sul (ID 24 - 35)-->*/
/*ID 24*/('Argentina', 1),
/*ID 25*/('Bolívia', 1),
/*ID 26*/('Brasil', 1),
/*ID 27*/('Chile', 1),
/*ID 28*/('Colômbia', 1),
/*ID 29*/('Equador', 1),
/*ID 30*/('Guiana', 1),
/*ID 31*/('Paraguai', 1),
/*ID 32*/('Peru', 1),
/*ID 33*/('Suriname', 1),
/*ID 34*/('Uruguai', 1),
/*ID 35*/('Venezuela', 1);
/*<--/Países da América do Sul-->*/
CREATE TABLE estados(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_pais INT,
registro_ativo BIT,
FOREIGN KEY(id_pais) REFERENCES paises (id)
);

 INSERT INTO estados(id_pais, nome, registro_ativo) VALUES
/*<--Canadá (1 - 13)-->*/
/*ID 1*/(1, 'Alberta', 1),
/*ID 2*/(1, 'Colúmbia Britânica', 1),
/*ID 3*/(1, 'Ilha do Príncipe Eduardo', 1),
/*ID 4*/(1, 'Manitoba', 1),
/*ID 5*/(1, 'Nova Brunswick', 1),
/*ID 6*/(1, 'Nova Escócia', 1),
/*ID 7*/(1, 'Ontário', 1),
/*ID 8*/(1, 'Québec', 1),
/*ID 9*/(1, 'Saskatchewan', 1),
/*ID 10*/(1, 'Terra Nova e Labrador', 1),
/*ID 11*/(1, 'Nunavut', 1),
/*ID 12*/(1, 'Territórios do Noroeste', 1),
/*ID 13*/(1, 'Yukon', 1),
/*<--/Canadá-->*/
/*<--Estados Unidos da América-->*/
(2, 'Alabama', 1),
(2, 'Alasca', 1),
(2, 'Arizona', 1),
(2, 'Arkansas', 1),
(2, 'Califórnia', 1),
(2, 'Carolina do Norte', 1),
(2, 'Carolina do Sul', 1),
(2, 'Colorado', 1),
(2, 'Connecticut', 1),
(2, 'Dacota do Norte', 1),
(2, 'Dacota do Sul', 1),
(2, 'Delaware', 1),
(2, 'Flórida', 1),
(2, 'Geórgia', 1),
(2, 'Havaí', 1),
(2, 'Idaho', 1),
(2, 'Illinois', 1),
(2, 'Indiana', 1),
(2, 'Iowa', 1),
(2, 'Kansas', 1),
(2, 'Kentucky', 1),
(2, 'Louisiana', 1),
(2, 'Maine', 1),
(2, 'Maryland', 1),
(2, 'Massachusetts', 1),
(2, 'Michigan', 1),
(2, 'Minnesota', 1),
(2, 'Mississípi', 1),
(2, 'Missouri', 1),
(2, 'Montana', 1),
(2, 'Nebrasca', 1),
(2, 'Nevada', 1),
(2, 'Nova Hamphsire', 1),
(2, 'Nova Iorque', 1),
(2, 'Nova Jérsei', 1),
(2, 'Novo México', 1),
(2, 'Ohio', 1),
(2, 'Oklahoma', 1),
(2, 'Oregon', 1),
(2, 'Pensilvânia', 1),
(2, 'Rhode Island', 1),
(2, 'Tennessee', 1),
(2, 'Texas', 1),
(2, 'Utah', 1),
(2, 'Vermont', 1),
(2, 'Virgínia', 1),
(2, 'Virgínia Ocidental', 1),
(2, 'Washington', 1),
(2, 'Wisconsin', 1),
(2, 'Wyoming', 1);
/*<--/Estados Unidos da América-->*/
CREATE TABLE cidades(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
id_estado INT,
registro_ativo BIT,
FOREIGN KEY(id_estado) REFERENCES estados (id)
);

INSERT INTO cidades(id_estado, nome, registro_ativo) VALUES	
/*<--Canada-->*/
/*<--Cidades do Alberta-->*/
(1,'Airdrie',1),
(1,'Athabasca',1),
(1,'Banff',1),
(1,'Barrhead',1),
(1,'Bassano',1),
(1,'Beaverlodge',1),
(1,'Black Diamond',1),
(1,'Blackfalds',1),
(1,'Blairmore',1),
(1,'Bon Accord',1),
(1,'Bonnyville',1),
(1,'Bow Island',1),
(1,'Brooks',1),
(1,'Calgary',1),
(1,'Calmar',1),
(1,'Camrose',1),
(1,'Canmore',1),
(1,'Cardston',1),
(1,'Carstairs',1),
(1,'Clairmont',1),
(1,'Claresholm',1),
(1,'Coaldale',1),
(1,'Cochrane',1),
(1,'Crossfield',1),
(1,'Devon',1),
(1,'Didsbury',1),
(1,'Drayton Valley',1),
(1,'Drumheller',1),
(1,'Edmonton',1),
(1,'Edson',1),
(1,'Elk Point',1),
(1,'Fairview',1),
(1,'Grand Center',1),
(1,'Grande Prairie',1),
(1,'Grimshaw',1),
(1,'Hanna',1),
(1,'High Level',1),
(1,'High Prairie',1),
(1,'High River',1),
(1,'Hinton',1),
(1,'Irricana',1),
(1,'Jasper',1),
(1,'Killan',1),
(1,'Lacombe',1),
(1,'Lamont',1),
(1,'Leduc',1),
(1,'Lethbridge',1),
(1,'Magrath',1),
(1,'Medicine Hat',1),
(1,'Millet',1),
(1,'Morinville',1),
(1,'Nanton',1),
(1,'Okotoks',1),
(1,'Olds',1),
(1,'Peace River',1),
(1,'Penhold',1),
(1,'Pincher Creek',1),
(1,'Ponoka',1),
(1,'Provost',1),
(1,'Raymont',1),
(1,'Red Deer',1),
(1,'Rimbey',1),
(1,'Rocky Mountai House',1),
(1,'Saint Paul',1),
(1,'Sexsmith',1),
(1,'Slave Lake',1),
(1,'Smoky Lake',1),
(1,'Spirit River',1),
(1,'Spruce Grove',1),
(1,'Stettler',1),
(1,'Stony Plain',1),
(1,'Sylvan Lake',1),
(1,'Taber',1),
(1,'Three Hills',1),
(1,'Tofield',1),
(1,'Two Hills',1),
(1,'Valleyview',1),
(1,'Vegreville',1),
(1,'Vermilion',1),
(1,'Viking',1),
(1,'Vulcan',1),
(1,'Wainwright',1),
(1,'Wembley',1),
(1,'Westlock',1),
(1,'Wetaskiwin',1),
(1,'Valleyview',1),
(1,'Whitecourt',1),
/*<--/Cidades do Alberta-->*/
/*<--/Canada-->*/





CREATE TABLE usuarios( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
url_imagem VARCHAR(100),
nome_completo VARCHAR(100),
senha VARCHAR(100),
admin INT,
registro_ativo BIT
);

INSERT INTO usuarios(nome,nome_completo,url_imagem, admin, senha,  registro_ativo)
VALUES  ( 'lipefw','Felipe','gatodandopinote.png',1 , 'anaumsei', 1),
	    ( 'illan','Illan','gato-confuo.jpg',0 , 'illanzoka', 1),
	    ( 'eduardo','Eduardo','guaxinimdoido.jpg',1 , '123456', 1),
	    ( 'henrique','Henrique','hamsterchavoso.png',1 , 'pimbinha6000', 1),
	    ( 'pablo','Pablo','', 1, '1234', 1),
	    ( 'nathan','Nathan','passaroseila.jpg', 1, '1203', 1);


CREATE TABLE categorias( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT
);
 
INSERT INTO categorias(nome,registro_ativo)
VALUES	('Bebidas', 1),	
		('Doces', 1),		 
		('Salgados', 1);

CREATE TABLE marcas( 
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT);
 
INSERT INTO marcas(nome,registro_ativo)
VALUES ('Ford', 1);

CREATE TABLE modelos(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(50),
id_marca INT,
FOREIGN KEY (id_marca) REFERENCES marcas(id),
registro_ativo BIT);

INSERT INTO modelos(id_marca, nome, registro_ativo)
VALUES (1,'Cargo', 1);

 CREATE TABLE veiculos(
id INT PRIMARY KEY IDENTITY(1,1),
id_marca INT,
id_modelo INT,
ano_fabricacao INT,
numero_caminhao INT,
placa VARCHAR(8),
registro_ativo BIT,
FOREIGN KEY(id_marca) REFERENCES marcas (id),
FOREIGN KEY(id_modelo) REFERENCES modelos (id)
);

INSERT INTO veiculos(id_marca, id_modelo, ano_fabricacao, numero_caminhao, placa, registro_ativo)
VALUES (1, 1, '2005', 002, 'MJX-0585', 1 );

 CREATE TABLE inventarios(
id INT PRIMARY KEY IDENTITY(1,1),
numero_caminhao INT,
registro_ativo BIT,
);

INSERT INTO inventarios(numero_caminhao, registro_ativo)
VALUES (002, 1 );

CREATE TABLE vendedores(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
id_veiculo INT,
id_usuario INT,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_veiculo) REFERENCES veiculos(id),
registro_ativo BIT);

INSERT INTO vendedores(nome, id_veiculo, id_usuario, registro_ativo)
VALUES ('Felipe' , 1, 1, 1);

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

INSERT INTO produtos(id_categoria,nome, codigo_barra, quantidade_produto, valor_unitario, registro_ativo)
VALUES (1,'Toddynho', '173937229417429475205792634916', 1, 1, 1);

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
VALUES ('Gaspar', 1, 1),
	   ('Blumenau',1,1);

CREATE TABLE notas_fiscais(
id INT PRIMARY KEY IDENTITY(1,1),
valor_final DECIMAL(7,2),
id_venda INT,
FOREIGN KEY (id_venda) REFERENCES vendas(id),
registro_ativo BIT
);

INSERT INTO notas_fiscais(valor_final ,id_venda, registro_ativo)
VALUES (100, 1, 1);