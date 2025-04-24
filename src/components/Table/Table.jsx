import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "../Table-Row/TableRow";
import { updateListItems } from "../../store/slices/cryptoSlice";


function Table() {
  const listItems = useSelector((store) => store.crypto.listItems);

  const tableHeading = [
    "#",
    "Logo",
    "Name",
    "Symbol",
    "Price",
    "1H %",
    "24H %",
    "7D %",
    "Market Cap",
    "24H Volume",
    "Circulating Supply",
    "7D Chart",
  ];
  // console.log(listItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const webSocketSimulator = setInterval(() => {
      const itemId = Math.floor(Math.random() * 5) + 1;
      // console.log(itemId);

      const listItem = {
        id: itemId,
        price: Math.random() * 1000,
        percentChange1h: Math.random() * 10 - 5,
        percentChange24h: Math.random() * 10 - 5,
        percentChange7d: Math.random() * 10 - 5,
        volume24h: Math.random() * 100000,
      };
      dispatch(updateListItems(listItem));
    }, 1000);

    return () => {
      clearInterval(webSocketSimulator);
    };
  }, [dispatch]);

  return (
    <div className="mt-20 min-w-lg sm:px-2 pt-5 pb-10 bg-indigo-200 outline outline-black/5 rounded-4xl shadow-2xl sm:mx-20 mx-auto z-10">
      <div className="text-center font-bold text-2xl pb-5 text-gray-700">
        Crypto Tracker App
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full rounded-4xl">
          <thead className="text-sm uppercase text-left rtl:text-right bg-gray-100 text-black border-b border-gray-500">
            <tr>
              {tableHeading?.map((item, index) => (
                <th className="px-6 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          {/*  */}
          <tbody>
            {listItems?.map((item, index) => (
              <TableRow item={item} index={index} key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
