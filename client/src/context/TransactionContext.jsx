import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();
const { ethereum } = window;
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionsContract;
};



export const TransactionsProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState([]);
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));


    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Vui lòng tải và kết nối với ví metamask! Link: https://metamask.io/");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                // get toàn bộ giao dịch
            } else {
                console.log("Không tìm thấy tài khoản nào!");
            };

        } catch (error) {
            console.log(error);
            throw new Error("Không thể kết nối với ví");
        }

    };
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Vui lòng tải và kết nối với ví metamask!  Link: https://metamask.io/");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("Không thể kết nối với ví");
        }
    };
    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Vui lòng tải và kết nối với ví metamask! Link: https://metamask.io/");

            //get data from the form
            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = getEthereumContract();
            //coverter amount to wei
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex,
                }],
            });
            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            setIsLoading(true);
            console.log(`Đang xử lý - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Thành công - ${transactionHash.hash}`);

            const transactionsCount = await transactionsContract.getTransactionCount();
            setTransactionCount(transactionsCount.toNumber());

        } catch (error) {
            console.log(error);
            throw new Error("Không thể kết nối với ví");
        }
    };
    useEffect(() => {
        checkIfWalletIsConnect();
    }, []);



    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setformData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}