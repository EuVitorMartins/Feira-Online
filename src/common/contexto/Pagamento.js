const { createContext, useState, useContext } = require("react");

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposPagamento = [{
        nome: "Boleto",
        juros: 1,
        id: 1
    }, {
        nome: "Cartão de credito",
        juros: 1.3,
        id: 2
    }, {
        nome: "PIX",
        juros: 1,
        id: 3
    }, {
        nome: "Crediário",
        juros: 1.5,
        id: 4
    }];

    const [formaPagamento, setFormasPagamento] = useState(tiposPagamento[0]);

    return (
        <PagamentoContext.Provider value={{
            tiposPagamento,
            formaPagamento,
            setFormasPagamento
        }}>
            {children}
        </PagamentoContext.Provider>
    )
}


export const usePagamentoContext = () => {
    const {
        tiposPagamento,
        formaPagamento,
        setFormasPagamento
    } = useContext(PagamentoContext);

    function mudarFormaPagamento(id) {
        const pagamentoAtual = tiposPagamento.find(pagamento => pagamento.id === id);

        setFormasPagamento(pagamentoAtual);
    }

    return {
        tiposPagamento,
        formaPagamento,
        mudarFormaPagamento
    }
}

