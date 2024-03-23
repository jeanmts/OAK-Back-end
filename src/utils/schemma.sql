create database loja;

create table produtos(
	id serial primary key,
	nomeProduto text not null,
	descricaoProduto text not null,
	valorProduto decimal not null,
	disponivelParaVenda text not null
)