import React from 'react'
import Row from './Row.js'

const titles = ['#', 'Coin', 'Price', 'Price Change', 'Volume']

const Table = ({ coins, search }) => {

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    )
                    )}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <Row coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default Table