import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
`;

const FilterSection = styled.div`
  width: 20%;
  padding: 20px;
  background-color: #f5f5f5;
  border-right: 1px solid #ccc;
`;

const FilterGroup = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;

  input {
    margin-right: 8px;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: ${(props) => (props.type === 'radio' ? '50%' : '3px')};
    position: relative;
  }

  input:checked {
    background-color: #C92071;
    border-color: #C92071;
  }

  input:checked:before {
    content: '\\2713'; /* Unicode para o símbolo de check */
    display: block;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 20px;
  }
`;

const ProductSection = styled.div`
  width: 80%;
  padding: 20px;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const SortSelect = styled.select`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #474747;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #474747;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductItem = styled.div`
  width: calc(33.333% - 20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 5px 0;
  color: #000;
`;

const PromoPrice = styled.span`
  font-size: 0.9rem;
  color: #888;
  text-decoration: line-through;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Products = () => {
  const [filters, setFilters] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: '',
  });

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (type === 'checkbox') {
        if (checked) {
          newFilters[name].push(value);
        } else {
          newFilters[name] = newFilters[name].filter((item) => item !== value);
        }
      } else if (type === 'radio') {
        newFilters[name] = value;
      }
      return newFilters;
    });
  };

  const produtos = [
    {
      id: 1,
      nome: 'Tênis VTR',
      preco: 'R$ 199,00',
      promocao: 'R$ 149,00',
      genero: 'Masculino',
      imagem: 'https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7oIpb9Q9-IwvQYrOnvFb1IhAtbd8U~2LDpZXxO1sEwOduH6V8R31kp6osBG9Hl6t12LC26eZrACYe~4w1tkEzzgpMFeOaEVMr6ypxL6DtiNzwX-jtSV54IrBtUxx7M2UjvMZN-JxQggP2APnDaM~cbwGdUEqhQYGmkyyxba7uW5mQr91SZqrLF6T1jWsGKBdbiXA8ExNgNZnfo4WDjZGsypG6y2brV7AEiZsUhXF6Yn4lRvcQtP1JzvmmWTvhrTzHgrN7YzV7JHJ5WCu6IXZkAf6ZA-n0rdd29KHwsx6D-gw5tk81ErrRmDORtqwCFhmVeenmXne4UoIUmW4pQRIg__',
      link: "Products/1"
    },
    {
      id: 2,
      nome: 'Tênis XYZ',
      preco: 'R$ 249,00',
      promocao: 'R$ 199,00',
      genero: 'Feminino',
      imagem: 'https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7oIpb9Q9-IwvQYrOnvFb1IhAtbd8U~2LDpZXxO1sEwOduH6V8R31kp6osBG9Hl6t12LC26eZrACYe~4w1tkEzzgpMFeOaEVMr6ypxL6DtiNzwX-jtSV54IrBtUxx7M2UjvMZN-JxQggP2APnDaM~cbwGdUEqhQYGmkyyxba7uW5mQr91SZqrLF6T1jWsGKBdbiXA8ExNgNZnfo4WDjZGsypG6y2brV7AEiZsUhXF6Yn4lRvcQtP1JzvmmWTvhrTzHgrN7YzV7JHJ5WCu6IXZkAf6ZA-n0rdd29KHwsx6D-gw5tk81ErrRmDORtqwCFhmVeenmXne4UoIUmW4pQRIg__',
      link: "Products/2"
    },
    {
      id: 3,
      nome: 'Tênis ABC',
      preco: 'R$ 299,00',
      promocao: 'R$ 249,00',
      genero: 'Unissex',
      imagem: 'https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7oIpb9Q9-IwvQYrOnvFb1IhAtbd8U~2LDpZXxO1sEwOduH6V8R31kp6osBG9Hl6t12LC26eZrACYe~4w1tkEzzgpMFeOaEVMr6ypxL6DtiNzwX-jtSV54IrBtUxx7M2UjvMZN-JxQggP2APnDaM~cbwGdUEqhQYGmkyyxba7uW5mQr91SZqrLF6T1jWsGKBdbiXA8ExNgNZnfo4WDjZGsypG6y2brV7AEiZsUhXF6Yn4lRvcQtP1JzvmmWTvhrTzHgrN7YzV7JHJ5WCu6IXZkAf6ZA-n0rdd29KHwsx6D-gw5tk81ErrRmDORtqwCFhmVeenmXne4UoIUmW4pQRIg__',
      link: "Products/3"
    },

    {
      id: 4,
      nome: 'Tênis ABC',
      preco: 'R$ 299,00',
      promocao: 'R$ 249,00',
      genero: 'Unissex',
      imagem: 'https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7oIpb9Q9-IwvQYrOnvFb1IhAtbd8U~2LDpZXxO1sEwOduH6V8R31kp6osBG9Hl6t12LC26eZrACYe~4w1tkEzzgpMFeOaEVMr6ypxL6DtiNzwX-jtSV54IrBtUxx7M2UjvMZN-JxQggP2APnDaM~cbwGdUEqhQYGmkyyxba7uW5mQr91SZqrLF6T1jWsGKBdbiXA8ExNgNZnfo4WDjZGsypG6y2brV7AEiZsUhXF6Yn4lRvcQtP1JzvmmWTvhrTzHgrN7YzV7JHJ5WCu6IXZkAf6ZA-n0rdd29KHwsx6D-gw5tk81ErrRmDORtqwCFhmVeenmXne4UoIUmW4pQRIg__',
      link: "Products/4"
    },

    {
      id: 5,
      nome: 'Tênis ABC',
      preco: 'R$ 299,00',
      promocao: 'R$ 249,00',
      genero: 'Unissex',
      imagem: 'https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7oIpb9Q9-IwvQYrOnvFb1IhAtbd8U~2LDpZXxO1sEwOduH6V8R31kp6osBG9Hl6t12LC26eZrACYe~4w1tkEzzgpMFeOaEVMr6ypxL6DtiNzwX-jtSV54IrBtUxx7M2UjvMZN-JxQggP2APnDaM~cbwGdUEqhQYGmkyyxba7uW5mQr91SZqrLF6T1jWsGKBdbiXA8ExNgNZnfo4WDjZGsypG6y2brV7AEiZsUhXF6Yn4lRvcQtP1JzvmmWTvhrTzHgrN7YzV7JHJ5WCu6IXZkAf6ZA-n0rdd29KHwsx6D-gw5tk81ErrRmDORtqwCFhmVeenmXne4UoIUmW4pQRIg__',
      link: "Products/5"
    },

    {
      id: 6,
      nome: 'Tênis ABC',
      preco: 'R$ 299,00',
      promocao: 'R$ 249,00',
      genero: 'Unissex',
      imagem: 'https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7oIpb9Q9-IwvQYrOnvFb1IhAtbd8U~2LDpZXxO1sEwOduH6V8R31kp6osBG9Hl6t12LC26eZrACYe~4w1tkEzzgpMFeOaEVMr6ypxL6DtiNzwX-jtSV54IrBtUxx7M2UjvMZN-JxQggP2APnDaM~cbwGdUEqhQYGmkyyxba7uW5mQr91SZqrLF6T1jWsGKBdbiXA8ExNgNZnfo4WDjZGsypG6y2brV7AEiZsUhXF6Yn4lRvcQtP1JzvmmWTvhrTzHgrN7YzV7JHJ5WCu6IXZkAf6ZA-n0rdd29KHwsx6D-gw5tk81ErrRmDORtqwCFhmVeenmXne4UoIUmW4pQRIg__',
      link: "Products/6"
    },
  ];

  return (
    <Container>
      <FilterSection>
        <Title>Filtrar por</Title>

        <FilterGroup>
          <FilterTitle>Marca</FilterTitle>
          {['Marca 1', 'Adidas', 'Nike', 'Puma'].map((marca) => (
            <FilterLabel key={marca}>
              <input
                type="checkbox"
                name="marca"
                value={marca}
                onChange={handleFilterChange}
              />
              {marca}
            </FilterLabel>
          ))}
        </FilterGroup>

        <FilterGroup>
          <FilterTitle>Categoria</FilterTitle>
          {['Esportivo', 'Casual'].map((categoria) => (
            <FilterLabel key={categoria}>
              <input
                type="checkbox"
                name="categoria"
                value={categoria}
                onChange={handleFilterChange}
              />
              {categoria}
            </FilterLabel>
          ))}
        </FilterGroup>

        <FilterGroup>
          <FilterTitle>Gênero</FilterTitle>
          {['Masculino', 'Feminino', 'Unissex'].map((genero) => (
            <FilterLabel key={genero}>
              <input
                type="checkbox"
                name="genero"
                value={genero}
                onChange={handleFilterChange}
              />
              {genero}
            </FilterLabel>
          ))}
        </FilterGroup>

        <FilterGroup>
          <FilterTitle>Estado</FilterTitle>
          {['Novo', 'Usado'].map((estado) => (
            <FilterLabel key={estado} type="radio">
              <input
                type="radio"
                name="estado"
                value={estado}
                onChange={handleFilterChange}
              />
              {estado}
            </FilterLabel>
          ))}
        </FilterGroup>
      </FilterSection>

      <ProductSection>
        <SortContainer>
          <SortSelect>
            <option value="relevantes">Ordenar por: Mais Relevantes</option>
            <option value="maisBaratos">Ordenar por: Mais Baratos</option>
            <option value="maisCaros">Ordenar por: Mais Caros</option>
          </SortSelect>
        </SortContainer>
        <span>Resultados para “Tênis - 389 produtos”</span>

        <ProductGrid>
          {produtos.map((produto) => (
            <ProductItem key={produto.id}>
              <a href={produto.link}>teste
                <ProductImage src={produto.imagem} alt={produto.nome} />
                <ProductTitle>{produto.nome}</ProductTitle>
                <ProductPriceWrapper>
                  <PromoPrice>{produto.promocao}</PromoPrice>
                  <ProductPrice>{produto.preco}</ProductPrice>
                </ProductPriceWrapper>
                <p>{produto.genero}</p>
              </a>
            </ProductItem>

          ))}
        </ProductGrid>

      </ProductSection>
    </Container>
  );
};

export default Products;