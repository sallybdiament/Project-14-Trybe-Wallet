import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { addCurrenciesDispatch } = this.props;
    addCurrenciesDispatch();
    // fetch('https://economia.awesomeapi.com.br/json/all')
    //   .then((response) => response.json())
    //   .then((currencies) => {
    //     console.log(Object.keys(currencies));
    //     console.log(Object.entries(currencies));
    //     console.log(Object.values(currencies));
    //     dispatch(receiveCurrency(currencies));
    //   });
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="valorDespesa">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            name="valorDespesa"
            id="valorDespesa"
            // value={ valorDespesa }
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrDespesa">
          Valor:
          <input
            type="text"
            data-testid="description-input"
            name="descrDespesa"
            id="descrDespesa"
            // value={ valorDespesa }
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda:
          <select
            data-testid="currency-input"
            name="currencyInput"
            id="currencyInput"
            // value={ currencyInput }
            // onChange={ onInputChange }
          >
            { currencies.map((curr) => <option key={ curr }>{curr}</option>)}
          </select>
        </label>
        <label htmlFor="metodoInput">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="metodoInput"
            id="metodoInput"
            // value={ metodoInput }
            // onChange={ onInputChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoriaInput">
          Categoria da despesa:
          <select
            data-testid="tag-input"
            name="categoriaInput"
            id="categoriaInput"
            // value={ categoriaInput }
            // onChange={ onInputChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCurrenciesDispatch: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  addCurrenciesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
