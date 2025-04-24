import React from 'react'

function TableRow( {item, index} ) {
  return (
    <>
      <tr
              className={`${item.percentChange1h < 0 ? 'bg-red-50' : 'bg-green-50'} border-b border-gray-300 font-xs font-semibold`}
            >
              <td className={`px-6 py-4`}>{index + 1}</td>
              <td className={`px-6 py-4`}>
                <img
                  src={item.logo}
                  className="uppercase text-xs"
                  alt={item.logo}
                ></img>
              </td>
              <td className={`px-6 py-4`}>{item.name}</td>
              <td className={`px-6 py-4`}>{item.symbol}</td>
              <td
                className={`${
                  item.price > 500 ? "text-green-500" : "text-red-500"
                } px-6 py-4`}
              >
                ${item.price.toFixed(2)}
              </td>
              <td
                className={`${
                  item.percentChange1h > 0 ? "text-green-500" : "text-red-500"
                } px-6 py-4`}
              >
                {item.percentChange1h.toFixed(2)}%
              </td>
              <td
                className={`${
                  item.percentChange24h > 0 ? "text-green-500" : "text-red-500"
                } px-6 py-4`}
              >
                {item.percentChange24h.toFixed(2)}%
              </td>
              <td
                className={`${
                  item.percentChange7d > 0 ? "text-green-500" : "text-red-500"
                } px-6 py-4`}
              >
                {item.percentChange7d.toFixed(2)}%
              </td>
              <td className={`px-6 py-4`}>{item.marketCap}</td>
              <td
                className={`${
                  item.volume24h > 0 ? "text-green-500" : "text-red-500"
                } px-6 py-4`}
              >
                {item.volume24h.toFixed(2)}
              </td>
              <td className={`px-6 py-4`}>{item.circulatingSupply}</td>
              <td className={`px-6 py-4`}>
                <img
                  src={item.logo}
                  className="uppercase text-xs"
                  alt={item.logo}
                ></img>
              </td>
            </tr>
    </>
  )
}

export default TableRow