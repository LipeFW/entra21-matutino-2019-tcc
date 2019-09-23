DROP TABLE IF EXISTS notas_fiscais, rotas, vendas, clientes,vendedores, rotas, produtos,inventarios, veiculos, modelos, categorias, marcas, usuarios, cidades, estados, paises;

CREATE TABLE paises(
id INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(100),
registro_ativo BIT
);
INSERT INTO paises(nome, registro_ativo) VALUES 
/*<--Países da América do Norte (ID:1 - 3)-->*/
/*ID 01*/('Canadá', 1),
/*ID 02*/('Estados Unidos da América', 1),
/*ID 03*/('México', 1),
/*<--/Países da América do Norte-->*/
/*<--Países da América Central (ID:4 - 23)-->*/
/*ID 04*/('Antígua & Barbuda', 1),
/*ID 05*/('Bahamas', 1),
/*ID 06*/('Barbados', 1),
/*ID 07*/('Belize', 1),
/*ID 08*/('Costa Rica', 1),
/*ID 09*/('Cuba', 1),
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
/*<--Países da América do Sul (ID:24 - 35)-->*/
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
/*<--América do Norte (ID: 1-3)-->*/
/*<--Canadá (ID: 1-13)-->*/
/*ID 001*/(1, 'Alberta', 1),
/*ID 002*/(1, 'Colúmbia Britânica', 1),
/*ID 003*/(1, 'Ilha do Príncipe Eduardo', 1),
/*ID 004*/(1, 'Manitoba', 1),
/*ID 005*/(1, 'Nova Brunswick', 1),
/*ID 006*/(1, 'Nova Escócia', 1),
/*ID 007*/(1, 'Ontário', 1),
/*ID 008*/(1, 'Québec', 1),
/*ID 009*/(1, 'Saskatchewan', 1),
/*ID 010*/(1, 'Terra Nova e Labrador', 1),
/*ID 011*/(1, 'Nunavut', 1),
/*ID 012*/(1, 'Territórios do Noroeste', 1),
/*ID 013*/(1, 'Yukon', 1),
/*<--/Canadá-->*/
/*<--Estados Unidos da América (ID: 14-63)-->*/
/*ID 014*/(2, 'Alabama', 1),
/*ID 015*/(2, 'Alasca', 1),
/*ID 016*/(2, 'Arizona', 1),
/*ID 017*/(2, 'Arkansas', 1),
/*ID 018*/(2, 'Califórnia', 1),
/*ID 019*/(2, 'Carolina do Norte', 1),
/*ID 020*/(2, 'Carolina do Sul', 1),
/*ID 021*/(2, 'Colorado', 1),
/*ID 022*/(2, 'Connecticut', 1),
/*ID 023*/(2, 'Dacota do Norte', 1),
/*ID 024*/(2, 'Dacota do Sul', 1),
/*ID 025*/(2, 'Delaware', 1),
/*ID 026*/(2, 'Flórida', 1),
/*ID 027*/(2, 'Geórgia', 1),
/*ID 028*/(2, 'Havaí', 1),
/*ID 029*/(2, 'Idaho', 1),
/*ID 030*/(2, 'Illinois', 1),
/*ID 031*/(2, 'Indiana', 1),
/*ID 032*/(2, 'Iowa', 1),
/*ID 033*/(2, 'Kansas', 1),
/*ID 034*/(2, 'Kentucky', 1),
/*ID 035*/(2, 'Louisiana', 1),
/*ID 036*/(2, 'Maine', 1),
/*ID 037*/(2, 'Maryland', 1),
/*ID 038*/(2, 'Massachusetts', 1),
/*ID 039*/(2, 'Michigan', 1),
/*ID 040*/(2, 'Minnesota', 1),
/*ID 041*/(2, 'Mississípi', 1),
/*ID 042*/(2, 'Missouri', 1),
/*ID 043*/(2, 'Montana', 1),
/*ID 044*/(2, 'Nebrasca', 1),
/*ID 045*/(2, 'Nevada', 1),
/*ID 046*/(2, 'Nova Hamphsire', 1),
/*ID 047*/(2, 'Nova Iorque', 1),
/*ID 048*/(2, 'Nova Jérsei', 1),
/*ID 049*/(2, 'Novo México', 1),
/*ID 050*/(2, 'Ohio', 1),
/*ID 051*/(2, 'Oklahoma', 1),
/*ID 052*/(2, 'Oregon', 1),
/*ID 053*/(2, 'Pensilvânia', 1),
/*ID 054*/(2, 'Rhode Island', 1),
/*ID 055*/(2, 'Tennessee', 1),
/*ID 056*/(2, 'Texas', 1),
/*ID 057*/(2, 'Utah', 1),
/*ID 058*/(2, 'Vermont', 1),
/*ID 059*/(2, 'Virgínia', 1),
/*ID 060*/(2, 'Virgínia Ocidental', 1),
/*ID 061*/(2, 'Washington', 1),
/*ID 062*/(2, 'Wisconsin', 1),
/*ID 063*/(2, 'Wyoming', 1),
/*<--/Estados Unidos da América-->*/
/*<--México (ID: 64-94-->*/
/*ID 064*/(3, 'Aguascalientes', 1),
/*ID 065*/(3, 'Baixa Califórnia', 1),
/*ID 066*/(3, 'Baixa Califórnia do Sul', 1),
/*ID 067*/(3, 'Campeche', 1),
/*ID 068*/(3, 'Chiapas', 1), 
/*ID 069*/(3, 'Chihuahua', 1),
/*ID 070*/(3, 'Coahuila de Zaragoza', 1),
/*ID 071*/(3, 'Colima', 1),
/*ID 072*/(3, 'Durango', 1),
/*ID 073*/(3, 'Estado do México', 1),
/*ID 074*/(3, 'Guanajuato', 1),
/*ID 075*/(3, 'Guerrero', 1),
/*ID 076*/(3, 'Hidalgo', 1),
/*ID 077*/(3, 'Jalisco', 1),
/*ID 078*/(3, 'Michoacán', 1),
/*ID 079*/(3, 'Morelos', 1),
/*ID 080*/(3, 'Nayarit', 1),
/*ID 081*/(3, 'Novo Leão', 1),
/*ID 082*/(3, 'Oaxaca', 1),
/*ID 083*/(3, 'Póvoa', 1),
/*ID 084*/(3, 'Querétaro', 1),
/*ID 085*/(3, 'Quintana Roo', 1),
/*ID 086*/(3, 'São Luis Potosi', 1),
/*ID 087*/(3, 'Sinaloa', 1),
/*ID 088*/(3, 'Sonora', 1),
/*ID 089*/(3, 'Tabasco', 1),
/*ID 090*/(3, 'Tamaulipas', 1), 
/*ID 091*/(3, 'Tlaxcala', 1),
/*ID 092*/(3, 'Veracruz', 1),
/*ID 093*/(3, 'Iucatán', 1),
/*ID 094*/(3, 'Zaratecas', 1),
/*<--/México-->*/
/*<--/América do Norte-->*/
/*<--América Central (ID:4 - 23)-->*/
/*<--Antígua & Barbuda (ID: 95 - 101-->*/
/*ID 095*/(4, 'Barbuda', 1),
/*ID 096*/(4, 'Saint George', 1),
/*ID 097*/(4, 'Saint John', 1),
/*ID 098*/(4, 'Saint Mary', 1),
/*ID 099*/(4, 'Saint Paul', 1),
/*ID 100*/(4, 'Saint Peter', 1),
/*ID 101*/(4, 'Saint Philip', 1),
/*<--/Antígua e Barbuda-->*/
/*<--Bahamas (ID:101 - 121-->*/
/*ID 101*/(5, 'Bimini', 1),
/*ID 102*/(5, 'Cat Island', 1),
/*ID 103*/(5, 'Exuma', 1),
/*ID 104*/(5, 'Inagua', 1),
/*ID 105*/(5, 'Long Island', 1),
/*ID 106*/(5, 'Mayaguana', 1),
/*ID 107*/(5, 'Ragged Island', 1),
/*ID 108*/(5, 'Harbour Island', 1),
/*ID 109*/(5, 'New Providence', 1),
/*ID 110*/(5, 'Acklins and Crooked Island', 1),
/*ID 111*/(5, 'Freeport', 1),
/*ID 112*/(5, 'Fresh Creek', 1),
/*ID 113*/(5, 'Governor''s Harbour', 1),
/*ID 114*/(5, 'Green Turtle Cay', 1),
/*ID 115*/(5, 'High Rock', 1),
/*ID 116*/(5, 'Kemps Bay', 1),
/*ID 117*/(5, 'Marsh Harbour', 1),
/*ID 118*/(5, 'Nichollstown and Berry Island', 1),
/*ID 119*/(5, 'Rock Sound', 1),
/*ID 120*/(5, 'Sandy Point', 1),
/*ID 121*/(5, ' Salvador and Rum Cay', 1),
/*<--/Bahamas-->*/
/*<--Barbados (ID:122 - 132)-->*/
/*ID 122*/(6, 'Christ Church', 1),
/*ID 123*/(6, 'Saint Andrew', 1),
/*ID 124*/(6, 'Saint George', 1),
/*ID 125*/(6, 'Saint James', 1),
/*ID 126*/(6, 'Saint John', 1),
/*ID 127*/(6, 'Saint Joseph', 1),
/*ID 128*/(6, 'Saint Lucy', 1),
/*ID 129*/(6, 'Saint Michael', 1),
/*ID 130*/(6, 'Saint Peter', 1),
/*ID 131*/(6, 'Saint Philip', 1),
/*ID 132*/(6, 'Saint Thomas', 1),
/*<--/Barbados-->*/
/*<--Belize-->*/
/*ID 133*/(7, 'Belize', 1),
/*ID 134*/(7, 'Cayo', 1),
/*ID 135*/(7, 'Corozal', 1),
/*ID 136*/(7, 'Orange Walk', 1),
/*ID 137*/(7, 'Stann Creek', 1),
/*ID 138*/(7, 'Toledo', 1),
/*/<--Belize-->*/
/*<--Costa Rica-->*/
/*ID 139*/(8, 'Alajuela', 1),
/*ID 140*/(8, 'Cartago', 1),
/*ID 141*/(8, 'Guanacaste', 1),
/*ID 142*/(8, 'Heredia', 1),
/*ID 143*/(8, 'Limon', 1),
/*ID 144*/(8, 'Puntarenas', 1),
/*ID 145*/(8, 'San Jose', 1),
/*<--/Costa Rica-->*/
/*<--Cuba-->*/
/*ID 146*/(9, 'Pinar del Rio', 1),
/*ID 147*/(9, 'Ciudad de la Habana', 1),
/*ID 148*/(9, 'Matanzas', 1),
/*ID 149*/(9, 'Isla de la Juventud', 1),
/*ID 150*/(9, 'Camaguey', 1),
/*ID 151*/(9, 'Ciego de Avila', 1),
/*ID 152*/(9, 'Cienfuegos', 1),
/*ID 153*/(9, 'Granma', 1),
/*ID 154*/(9, 'Guantanamo', 1),
/*ID 155*/(9, 'La Habana', 1),
/*ID 156*/(9, 'Holguin', 1),
/*ID 157*/(9, 'Las Tunas', 1),
/*ID 158*/(9, 'Sancti Spiritus', 1),
/*ID 159*/(9, 'Santiago de Cuba', 1),
/*ID 160*/(9, 'Villa Clara', 1),
/*<--/Cuba-->*/
/*<--Dominica-->*/
/*ID 160*/(10, 'Saint Andrew', 1),
/*ID 161*/(10, 'Saint David', 1),
/*ID 162*/(10, 'Sanit George', 1),
/*ID 163*/(10, 'Saint John', 1),
/*ID 164*/(10, 'Saint Joseph', 1),
/*ID 165*/(10, 'Saint Luke', 1),
/*ID 166*/(10, 'Saint Mark', 1),
/*ID 167*/(10, 'Saint Patrick', 1),
/*ID 168*/(10, 'Saint Paul', 1),
/*ID 169*/(10, 'Saint Peter', 1),
/*<--/Dominica-->*/
/*<--El Salvador-->*/
/*ID 170*/(11, 'Ahuachapan', 1),
/*ID 171*/(11, 'Cabanas', 1),
/*ID 172*/(11, 'Chalatenango', 1),
/*ID 173*/(11, 'Cuscatlan', 1),
/*ID 174*/(11, 'La Libertad', 1),
/*ID 175*/(11, 'La Paz', 1),
/*ID 176*/(11, 'La Union', 1),
/*ID 177*/(11, 'Morazan', 1),
/*ID 178*/(11, 'San Miguel', 1),
/*ID 179*/(11, 'San Salvador', 1),
/*ID 180*/(11, 'Santa Ana', 1),
/*ID 181*/(11, 'San Vicente', 1),
/*ID 182*/(11, 'Sonsonate', 1),
/*ID 183*/(11, 'Usulutan', 1),
/*<--/El Salvador-->*/
/*<--Granada-->*/
/*ID 184*/(12, 'Saint Andrew', 1),
/*ID 185*/(12, 'Saint David', 1),
/*ID 186*/(12, 'Saint George', 1),
/*ID 187*/(12, 'Saint John', 1),
/*ID 188*/(12, 'Saint Mark', 1),
/*ID 189*/(12, 'Saint Patrick', 1),
/*<--/Granada-->*/
/*<--Guatemala-->*/
/*ID 190*/(13, 'Alta Verapaz', 1),
/*ID 191*/(13, 'Baja Verapaz', 1),
/*ID 192*/(13, 'Chimaltenango', 1),
/*ID 193*/(13, 'Chiquimula', 1),
/*ID 194*/(13, 'El Progreso', 1),
/*ID 195*/(13, 'Escuintla', 1),
/*ID 196*/(13, 'Guatemala', 1),
/*ID 197*/(13, 'Huehuetenango', 1),
/*ID 198*/(13, 'Izabal', 1),
/*ID 199*/(13, 'Jabala', 1),
/*ID 200*/(13, 'Jutiapa', 1),
/*ID 201*/(13, 'Peten', 1),
/*ID 202*/(13, 'Quetzaltenango', 1),
/*ID 203*/(13, 'Quiche', 1),
/*ID 204*/(13, 'Retalhuleu', 1),
/*ID 205*/(13, 'Sacatepequez', 1),
/*ID 206*/(13, 'San Marcos', 1),
/*ID 207*/(13, 'Santa Rosa', 1),
/*ID 208*/(13, 'Solola', 1),
/*ID 209*/(13, 'Suchitepequez', 1),
/*ID 210*/(13, 'Totonicapan', 1),
/*ID 211*/(13, 'Zacapa', 1);
/*<--/Guatemala-->*/
/*<--/América Central (ID:4 - 23)-->*/
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
(1,'Whitecourt',1);
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

INSERT INTO usuarios(nome,nome_completo, admin, senha, registro_ativo)
VALUES  ( 'lipefw','Felipe', 1 , 'anaumsei', 1),
	    ( 'illan','Illan', 0 , 'illanzoka', 1),
	    ( 'eduardo','Eduardo', 1 , 'RetardoMental', 1),
	    ( 'henrique','Henrique', 1 , 'pimbinha6000', 1),
	    ( 'pablo','Pablo', 0, '1234', 1),
	    ( 'nathan','Nathan', 1, '1203', 1);


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