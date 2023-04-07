import React from 'react'

const Row = ({ coin, index }) => {
    console.log(coin, index)
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} />
                <span>{coin.name}</span>
                <span className='text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td>$ {coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default Row