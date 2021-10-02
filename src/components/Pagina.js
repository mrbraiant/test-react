import React, { Component } from 'react';
import Header from './Header';
import Tabela from './Tabela';
import Footer from './Footer';
import Select  from './Select';

export default class Pagina extends Component {

  render() {
    return (
      <div>
          <Header />
          <Tabela />
          <Select />
          <Footer />
      </div>
    );
  }
}