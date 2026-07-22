import { getBtcPrice } from '@/lib/coinmarketcap/get-btc-price';
import { Terminal } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import Link from 'next/link';

export default async function FixedBottomBar() {

    const { data } = await getBtcPrice();

    const lastUpdated = new Date(data.last_updated);
    const lastUpdatedDisplay = `${lastUpdated.getDay()}/${lastUpdated.getMonth()}/${lastUpdated.getFullYear()} - ${lastUpdated.getHours()}:${lastUpdated.getMinutes()}:${lastUpdated.getSeconds() < 10 && '0'}${lastUpdated.getSeconds()}`;

    const btcPrice = data.price.toFixed(2);
    const percentChange = data.percent_change_24h.toFixed(2);
    const positive = !percentChange.startsWith('-');

    return (
        <section className="fixed z-40 bottom-0 w-full flex items-center justify-between px-4 md:px-6 xl:px-10 3xl:px-4 bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800">
            {/* AVAILABLE */}
            <article className="group text-[10px] text-gray-600 dark:text-gray-500 uppercase tracking-widest cursor-default w-[25%] xl:w-[20%] 3xl:w-40 border-r border-gray-300 dark:border-gray-800">
                <span className="text-violet-500 group-hover:text-lime-500 dark:text-lime-500 dark:group-hover:text-violet-500">◈</span> Available
            </article>

            {/* FTWR */}
            <article className="text-[10px] text-gray-600 dark:text-gray-500 uppercase tracking-widest cursor-default flex justify-center items-center w-[50%] xl:w-[60%] 3xl:w-full">
                <div className='w-fit cursor-help'><Terminal className="text-violet-500 w-3.5 h-3.5 inline-flex" />FOLLOW_THE_WHITE_RABBIT</div>
            </article>

            {/* BTC */}
            <Tooltip>
                <TooltipTrigger className="text-[10px] text-gray-600 dark:text-gray-500 uppercase tracking-widest cursor-default text-end w-[25%] xl:w-[20%] 3xl:w-40 border-l border-gray-300 dark:border-gray-800">
                    <p className="inline-flex items-center gap-1 pr-2">
                        <small className="text-violet-500">₿</small>
                    </p>

                    {/* CURRENCY - DOLLARS */}
                    <p className="inline-flex items-center">
                        {btcPrice} $
                    </p>
                </TooltipTrigger>
                <TooltipContent side='top' sideOffset={10} className={"rounded-none shadow-md p-0"}>
                    <Table>
                        <TableHeader>
                            <TableRow className='hover:bg-violet-100 dark:bg-gray-950'>
                                <TableHead colSpan={2} className='text-gray-800 dark:text-gray-400 uppercase tracking-widest font-bold cursor-default'>
                                    <span className='text-orange-500 mr-2'>₿</span>
                                    BITCOIN
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className='hover:bg-violet-100 text-gray-600 dark:text-gray-400 dark:bg-slate-950'>
                                <TableCell className='uppercase tracking-widest text-xs font-bold cursor-default'>
                                    Actual price
                                </TableCell>
                                <TableCell className='text-end cursor-default text-violet-500'>
                                    {btcPrice} $
                                </TableCell>
                            </TableRow>

                            <TableRow className='hover:bg-violet-100 text-gray-600 dark:text-gray-400 dark:bg-slate-950'>
                                <TableCell className='uppercase tracking-widest text-xs font-bold cursor-default'>
                                    Change 24h
                                </TableCell>
                                <TableCell className={`text-end cursor-default ${positive ? 'text-lime-500' : 'text-red-500'}`}>
                                    {percentChange} %
                                </TableCell>
                            </TableRow>

                            <TableRow className='hover:bg-violet-100 text-gray-600 dark:text-gray-400 dark:bg-slate-950'>
                                <TableCell className='uppercase tracking-widest text-xs font-bold cursor-default'>
                                    Last updated
                                </TableCell>
                                <TableCell className='text-end cursor-default text-violet-500'>
                                    {lastUpdatedDisplay}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableRow className='dark:bg-gray-950'>
                                <TableCell colSpan={2} className='text-xs'>
                                    <Link href={'https://coinmarketcap.com/api/documentation/pro-api-reference/cryptocurrency#simple-price'} target='_blank' className='hover:text-violet-500 dark:text-gray-600'>
                                        Powered by Coinmarketcap API
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableFooter>

                        {/* <thead>
                            <tr>
                                <th className='uppercase text-gray-600 tracking-widest'>
                                    <span className='text-orange-500 -ml-2 mr-2'>₿</span>
                                    {data.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Actual price</td>
                                <td>{data.prices.usd.price.toFixed(2)} $</td>
                            </tr>
                            <tr>
                                <td>Change 24h</td>
                                <td>{data.prices.usd.percent_change_24h.toFixed(2)} %</td>
                            </tr>
                            <tr>
                                <td>Last updated</td>
                                <td>{lastUpdatedDisplay}</td>
                            </tr>
                        </tbody> */}
                    </Table>
                </TooltipContent>
            </Tooltip>
        </section>
    )
}