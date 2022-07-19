var q=Object.defineProperty,P=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var S=(t,e,a)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e)=>{for(var a in e||(e={}))O.call(e,a)&&S(t,a,e[a]);if(j)for(var a of j(e))U.call(e,a)&&S(t,a,e[a]);return t},L=(t,e)=>P(t,W(e));import{j as D,R as $,H as Y,A as I,r as o,p as J,W as Q,C as X,a as Z,S as f0,B as e0,b as t0,c as a0,d as n0,e as s0}from"./vendor.2994f401.js";const r0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}};r0();const f=D.exports.jsx,n=D.exports.jsxs,c0=D.exports.Fragment,i0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"})});var _="/assets/logo.8653a29e.png";const z=({title:t,classprops:e})=>f("li",{className:`mx-4 cursor-pointer ${e}`,children:t}),l0=()=>{const[t,e]=$.useState(!1);return n("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:f("img",{src:_,alt:"logo",className:"w-32 cursor-pointer"})}),n("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[["Th\u1ECB tr\u01B0\u1EDDng","Trao \u0111\u1ED5i","H\u01B0\u1EDBng d\u1EABn","V\xED"].map((a,r)=>f(z,{title:a},a+r)),f("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",children:"\u0110\u0103ng nh\u1EADp"})]}),n("div",{className:"flex relative",children:[!t&&f(Y,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),t&&f(I,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}),t&&n("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none\r flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(I,{onClick:()=>e(!1)})}),["Th\u1ECB tr\u01B0\u1EDDng","Trao \u0111\u1ED5i","H\u01B0\u1EDBng d\u1EABn","V\xED"].map((a,r)=>f(z,{title:a,classprops:"my-2 text-lg"},a+r))]})]})]})},o0="hh-sol-artifact-1",b0="Transactions",u0="contracts/Transactions.sol",d0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],m0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220a3cfd940b333d5f7f60ccda1060774c1cf82a7917b3c6043c0f7d25556366be364736f6c63430008000033",x0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220a3cfd940b333d5f7f60ccda1060774c1cf82a7917b3c6043c0f7d25556366be364736f6c63430008000033",h0={},E0={};var p0={_format:o0,contractName:b0,sourceName:u0,abi:d0,bytecode:m0,deployedBytecode:x0,linkReferences:h0,deployedLinkReferences:E0};const g0="0x32eF2b9E5D383b5b6a29c8E802d1A2cAd07f379b",y0=p0.abi,C=$.createContext(),{ethereum:b}=window,A=()=>{const e=new Q(b).getSigner();return new X(g0,y0,e)},w0=({children:t})=>{const[e,a]=o.exports.useState([]),[r,s]=o.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[c,l]=o.exports.useState(!1),[d,p]=o.exports.useState(localStorage.getItem("transactionCount")),[g,y]=o.exports.useState([]),w=(i,m)=>{s(x=>L(N({},x),{[m]:i.target.value}))},G=async()=>{try{if(b){const x=(await A().getAllTransactions()).map(u=>({addressTo:u.receiver,addressFrom:u.sender,timestamp:new Date(u.timestamp.toNumber()*1e3).toLocaleString(),message:u.message,keyword:u.keyword,amount:parseInt(u.amount._hex)/10**18}));console.log(x),y(x)}else console.log("Ethereum kh\xF4ng t\u1ED3n t\u1EA1i")}catch(i){console.log(i)}},K=async()=>{try{if(!b)return alert("Vui l\xF2ng t\u1EA3i v\xE0 k\u1EBFt n\u1ED1i v\u1EDBi v\xED metamask! Link: https://metamask.io/");const i=await b.request({method:"eth_accounts"});i.length?(a(i[0]),G()):console.log("Kh\xF4ng t\xECm th\u1EA5y t\xE0i kho\u1EA3n n\xE0o!")}catch(i){throw console.log(i),new Error("Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i v\u1EDBi v\xED")}},H=async()=>{try{if(b){const m=await A().getTransactionCount();window.localStorage.setItem("transactionCount",m)}}catch(i){throw console.log(i),new Error("Kh\xF4ng th\u1EC3 t\xECm th\u1EA5y \u0111\u1ED1i t\u01B0\u1EE3ng")}},M=async()=>{try{if(!b)return alert("Vui l\xF2ng t\u1EA3i v\xE0 k\u1EBFt n\u1ED1i v\u1EDBi v\xED metamask!  Link: https://metamask.io/");const i=await b.request({method:"eth_requestAccounts"});a(i[0])}catch(i){throw console.log(i),new Error("Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i v\u1EDBi v\xED")}},R=async()=>{try{if(!b)return alert("Vui l\xF2ng t\u1EA3i v\xE0 k\u1EBFt n\u1ED1i v\u1EDBi v\xED metamask! Link: https://metamask.io/");const{addressTo:i,amount:m,keyword:x,message:u}=r,F=A(),k=J(m);await b.request({method:"eth_sendTransaction",params:[{from:e,to:i,gas:"0x5208",value:k._hex}]});const v=await F.addToBlockchain(i,k,u,x);l(!0),console.log(`\u0110ang x\u1EED l\xFD - ${v.hash}`),await v.wait(),l(!1),console.log(`Th\xE0nh c\xF4ng - ${v.hash}`);const V=await F.getTransactionCount();p(V.toNumber()),window.location.reload()}catch(i){throw console.log(i),new Error("Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i v\u1EDBi v\xED")}};return o.exports.useEffect(()=>{K(),H()},[d]),f(C.Provider,{value:{connectWallet:M,currentAccount:e,formData:r,setformData:s,handleChange:w,sendTransaction:R,transactions:g,isLoading:c},children:t})},B=t=>`${t.slice(0,5)}...${t.slice(t.length-4)}`,h="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",E=({placeholder:t,name:e,type:a,value:r,handleChange:s})=>f("input",{placeholder:t,type:a,step:"0.0001",value:r,onChange:c=>s(c,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),v0=()=>{const{connectWallet:t,currentAccount:e,formData:a,sendTransaction:r,handleChange:s,isLoading:c}=o.exports.useContext(C),l=d=>{const{addressTo:p,amount:g,keyword:y,message:w}=a;d.preventDefault(),!(!p||!g||!y||!w)&&r()};return f("div",{className:"flex w-full justify-center items-center",children:n("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[n("div",{className:"flex flex-1 justify-start items-start flex-col mf:mr-10",children:[n("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Trao \u0111\u1ED5i ti\u1EC1n \u0111i\u1EC7n t\u1EED ",f("br",{}),"tr\xEAn to\xE0n th\u1EBF gi\u1EDBi"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Kh\xE1m ph\xE1 th\u1EBF gi\u1EDBi ti\u1EC1n \u0111i\u1EC7n t\u1EED. Mua v\xE0 b\xE1n ti\u1EC1n \u0111i\u1EC7n t\u1EED d\u1EC5 d\xE0ng tr\xEAn Vrypto."}),!e&&n("button",{type:"button",onClick:t,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:[f(Z,{className:"text-white mr-2"}),f("p",{className:"text-white text-base font-semibold",children:"K\u1EBFt n\u1ED1i \u0111\u1EBFn v\xED c\u1EE7a b\u1EA1n"})]}),n("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${h}`,children:"\u0110\u1ED9 tin c\u1EADy"}),f("div",{className:h,children:"B\u1EA3o m\u1EADt"}),f("div",{className:`sm:rounded-tr-2xl ${h}`,children:"Ethereum"}),f("div",{className:`sm:rounded-bl-2xl ${h}`,children:"Web 3.0"}),f("div",{className:h,children:"Chi ph\xED th\u1EA5p"}),f("div",{className:`rounded-br-2xl ${h}`,children:"Blockchain"})]})]}),n("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ",children:n("div",{className:"flex justify-between flex-col w-full h-full",children:[n("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(f0,{fontSize:21,color:"#fff",title:"Ethereum"})}),f(e0,{fontSize:17,color:"#fff"})]}),n("div",{children:[f("p",{className:"text-white font-light text-sm",children:B(e)}),f("p",{className:"text-white font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),n("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(E,{placeholder:"\u0110\u1ECBa ch\u1EC9 \u0111\u1EBFn",name:"addressTo",type:"text",handleChange:s}),f(E,{placeholder:"Gi\xE1 (ETH)",name:"amount",type:"number",handleChange:s}),f(E,{placeholder:"T\u1EEB kh\xF3a (Gif)",name:"keyword",type:"text",handleChange:s}),f(E,{placeholder:"Tin nh\u1EAFn",name:"message",type:"text",handleChange:s}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),c?f(i0,{}):f("button",{type:"button",onClick:l,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"G\u1EEDi ngay"})]})]})]})})},N0=()=>n("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[n("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:_,alt:"logo",className:"w-32"})}),n("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Th\u1ECB tr\u01B0\u1EDDng"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Trao \u0111\u1ED5i"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"H\u01B0\u1EDBng d\u1EABn"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"V\xED"})]})]}),n("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"Tham gia c\u1ED9ng \u0111\u1ED3ng ph\xE1t tri\u1EC3n ti\u1EC1n t\u1EC7"}),f("p",{className:"text-white text-sm text-center font-medium mt-2",children:"vjetgolang@vjetgolang.onmicrosoft.com"})]}),f("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),n("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-left text-xs",children:"@vrypto2022"}),f("p",{className:"text-white text-right text-xs",children:"All rights reserved"})]})]}),T=({color:t,title:e,icon:a,subtitle:r})=>n("div",{className:"flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${t}`,children:a}),n("div",{className:"ml-5 flex flex-col flex-1",children:[f("h3",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-1 text-white text-sm md:w-9/12",children:r})]})]}),D0=()=>f("div",{className:"flex w-full justify-center items-center gradient-bg-services",children:n("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",children:[n("div",{className:"flex-1 flex flex-col justify-start items-start",children:[n("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient ",children:["D\u1ECBch v\u1EE5 cung c\u1EA5p",f("br",{}),"\u0111\u1EA3m b\u1EA3o t\xEDnh \u1ED5n \u0111\u1ECBnh"]}),f("p",{className:"text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base",children:"S\u1EF1 l\u1EF1a ch\u1ECDn t\u1ED1t nh\u1EA5t \u0111\u1EC3 mua v\xE0 b\xE1n t\xE0i s\u1EA3n ti\u1EC1n \u0111i\u1EC7n t\u1EED, nhi\u1EC1u d\u1ECBch v\u1EE5 li\xEAn k\u1EBFt h\u1EA7u h\u1EBFt mang t\xEDnh c\u1EA7u n\u1ED1i"})]}),n("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(T,{color:"bg-[#2952E3]",title:"T\xEDnh b\u1EA3o m\u1EADt",icon:f(t0,{fontSize:21,className:"text-white"}),subtitle:"An ninh \u0111\u01B0\u1EE3c \u0111\u1EA3m b\u1EA3o. Ch\xFAng t\xF4i lu\xF4n duy tr\xEC s\u1EF1 ri\xEAng t\u01B0 v\xE0 duy tr\xEC ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m c\u1EE7a m\xECnh"}),f(T,{color:"bg-[#8945F8]",title:"T\u1EF7 gi\xE1 trao \u0111\u1ED5i ngo\u1EA1i h\u1ED1i t\u1ED1t nh\u1EA5t",icon:f(a0,{fontSize:21,className:"text-white"}),subtitle:"T\u1EF7 gi\xE1 trao \u0111\u1ED5i ngo\u1EA1i h\u1ED1i uy t\xEDn. Ch\xFAng t\xF4i lu\xF4n c\u1EADp nh\u1EADt t\u1EF7 gi\xE1 m\u1EDBi nh\u1EA5t \u0111\u1EC3 b\u1EA1n c\xF3 th\u1EC3 trao \u0111\u1ED5i nhanh nh\u1EA5t"}),f(T,{color:"bg-[#F84550]",title:"Giao d\u1ECBch linh ho\u1EA1t",icon:f(n0,{fontSize:21,className:"text-white"}),subtitle:"T\u1ED1c \u0111\u1ED9 x\u1EED l\xFD giao d\u1ECBch nhanh. H\u1ED7 tr\u1EE3 li\xEAn k\u1EBFt nhi\u1EC1u \u0111\u01A1n v\u1ECB giao d\u1ECBch h\u1ED7 tr\u1EE3 linh \u0111\u1ED9ng. Giao d\u1ECBch \u0111\u01B0\u1EE3c \u0111\u1EA3m b\u1EA3o v\u1EC1 t\u1ED1c \u0111\u1ED9 x\u1EED l\xFD"})]})]})}),C0="cDJN6VKcgKDE4ya00YBpGTmjtNiSG9wT",A0=({keyword:t})=>{const[e,a]=o.exports.useState(""),r=async()=>{var s,c;try{const l=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${C0}&q=${t.split(" ").join("")}&limit=1`),{data:d}=await l.json();a((c=(s=d[0])==null?void 0:s.images)==null?void 0:c.downsized_medium.url)}catch{a("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")}};return o.exports.useEffect(()=>{t&&r()},[t]),e},B0=({addressTo:t,addressFrom:e,timestamp:a,message:r,keyword:s,amount:c,url:l})=>{const d=A0({keyword:s});return f("div",{className:"bg-[#181918] m-4 flex flex-1\r 2xl:min-w-[450px]\r 2xl:max-w-[500px]\r sm:min-w-[270px]\r sm:max-w-[300px]\r min-w-full\r flex-col p-3 rounded-md hover:shadow-2xl",children:n("div",{className:"flex flex-col items-center w-full mt-3",children:[n("div",{className:"display-flex justify-start w-full mb-6 p-2",children:[f("a",{href:`https://ropsten.etherscan.io/address/${e}`,target:"_blank",rel:"noreferrer",children:n("p",{className:"text-white text-base",children:["T\u1EEB: ",B(e)]})}),f("a",{href:`https://ropsten.etherscan.io/address/${t}`,target:"_blank",rel:"noreferrer",children:n("p",{className:"text-white text-base",children:["\u0110\u1EBFn: ",B(t)]})}),n("p",{className:"text-white text-base",children:["Gi\xE1: ",c," ETH"]}),r&&n(c0,{children:[f("br",{}),n("p",{className:"text-white text-base",children:["N\u1ED9i dung: ",r]})]})]}),f("img",{src:d||l,alt:"nature",className:"w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl",children:f("p",{className:"text-[#37c7da] font-bold",children:a})})]})})},T0=()=>{const{currentAccount:t,transactions:e}=o.exports.useContext(C);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:n("div",{className:"flex flex-col md:p-12 py-12 px-4",children:[t?f("h3",{className:"text-white text-3xl text-center my-2",children:"Giao d\u1ECBch g\u1EA7n \u0111\xE2y"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"Vui l\xF2ng k\u1EBFt n\u1ED1i t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111\u1EC3 xem c\xE1c giao d\u1ECBch m\u1EDBi nh\u1EA5t"}),f("div",{className:"flex flex-wrap justify-center items-center mt-10",children:e.reverse().map((a,r)=>f(B0,N({},a),r))})]})})},F0=()=>n("div",{className:"min-h-screen",children:[n("div",{className:"gradient-bg-welcome",children:[f(l0,{}),f(v0,{})]}),f(D0,{}),f(T0,{}),f(N0,{})]});s0.render(f(w0,{children:f(F0,{})}),document.getElementById("root"));