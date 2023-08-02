import './TabelaProdutos.css'
import produtos from "../../data/produtos";

export default props => {

    const produtosTD = produtos.map((produto,i) => {

        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td style={{ textAlign: "left" }}>{produto.nome}</td>
                <td style={{ textAlign: "left" }}>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        );

    });

    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTD}
                </tbody>
            </table>
        </div>
    );
}