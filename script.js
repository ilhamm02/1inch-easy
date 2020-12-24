var standardAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "remaining",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "inputs": [
            {
                "name": "_initialAmount",
                "type": "uint256"
            },
            {
                "name": "_tokenName",
                "type": "string"
            },
            {
                "name": "_decimalUnits",
                "type": "uint8"
            },
            {
                "name": "_tokenSymbol",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }
];

document.getElementById("swapInch").innerHTML = '<div class="okesip-container-div" id="modalInfo" style="display: none;"> <div class="okesip-container"> <div id="approve-info" style="display: none;"> <div class="okesip-spinner" style="width: 100px;height: 100px;margin: 0 auto;"></div> <p class="okesip-standard-p" style="font-size: 18px;text-align: center;font-weight: bold;">Waiting for Approve <u id="approveToken" style="text-decoration: none;"></u></p> <p class="okesip-standard-p" id="transactionHashApprove" style="display:none;font-size: 13px;color:grey;text-align: center;font-weight: bold;">Transaction Hash <u id="approveHash" style="text-decoration: none;"></u></p> </div> <div id="swap-info" style="display: none;"> <div class="okesip-spinner" style="width: 100px;height: 100px;margin: 0 auto;"></div> <p class="okesip-standard-p" style="font-size: 18px;text-align: center;font-weight: bold;">Waiting for Swap <u style="text-decoration: none;"></u></p> <p class="okesip-standard-p" id="transactionHashSwap" style="font-size: 13px;color:grey;text-align: center;font-weight: bold;">Transaction Hash <u id="swapHash" style="text-decoration: none;"></u></p> </div> </div> </div> <div class="okesip-container-div" id="modalSwap" style="display: none;"> <div class="okesip-container"> <div id="success-info"> <div id="address-div" class="okesip-display-sm"><u id="address" style="text-decoration: none;"></u></div> <div style="display: flex;flex-wrap: nowrap;width: 100%;margin-top: 15px;"> <div> <p class="okesip-standard-p" style="margin-top: -15px;">Send</p> </div> <div style="width: 100%"> <p class="okesip-standard-p" onclick="copyAmountFrom()" style="cursor:pointer;margin-top: -5px;margin-bottom:0;text-align: right;margin-right: 0;font-size: 12px;color:grey;"><u id="tokenFromBalance" style="text-decoration: none;"></u> <u id="tokenFromTicker" style="text-decoration: none;"></u></p> </div> </div> <div class="okesip-input-token"> <input type="number" id="fromTokenAmount" onkeyup="inputFrom()" placeholder="0.1"> <div> <p id="fromTokenName"></p> </div> </div> <p style="font-size: 17px;color:#1f1f1f;text-align: center;margin-top: 5px;margin-down: 5px;font-weight: bold;"></p> <div style="display: flex;flex-wrap: nowrap;width: 100%;"> <div> <p class="okesip-standard-p" style="margin-top: -15px;">Receive</p> </div> <div style="width: 100%"> <p class="okesip-standard-p" onclick="copyAmountTo()" style="cursor:pointer;margin-top: -5px;margin-bottom:0;text-align: right;margin-right: 0;font-size: 12px;color:grey;"><u id="tokenToBalance" style="text-decoration: none;"></u> <u id="tokenToTicker" style="text-decoration: none;"></u></p> </div> </div> <div class="okesip-input-token"> <input type="number" id="toTokenAmount" onkeyup="inputTo()" placeholder="0.1"> <div> <p id="toTokenName"></p> </div> </div> <div style="display: flex;flex-wrap: nowrap;width: 100%;margin:0 21px 0 0px;"> <p style="font-size: 13px;color: white;width: 80px;margin-bottom: -15px;margin-top:3px;">Slippage</p> <input type="number" id="slippagePercent" placeholder="1" value="1" style="text-align: right;font-size: 13px;margin: 2px 3px 0 0;background:transparent;border:none;width:100%;color: white;"> <p style="font-size: 13px;color: white;margin-bottom: -15px;margin-top:3px;">%</p> </div> <div class="okesip-standard-flex"> <button class="okesip-button-swap" id="swap-button" onclick="connectWallet()" style="width: 100%;">Connect Wallet</button> <button class="okesip-button-swap" id="swap-cancel" onclick="cancelSwap()" style="background: transparent;border: 2px solid white;width: 150px;">Cancel</button> </div> <div id="feeDetail" style="border:1px solid #1f1f1f;border-radius: 20px;padding:14px;display: block;"> <div class="okesip-standard-flex" style="margin-top: -15px;margin-bottom: -20px;"> <div style="width: 50%;margin-right: 4px;"> <p style="font-size: 14px;color: white;text-align: left;">Rate</p> </div> <div style="width: 50%;margin-left: 4px;"> <p id="price1" style="font-size: 14px;color: white;text-align: right;"></p> </div> </div> <div class="okesip-standard-flex" style="margin-top: -15px;margin-bottom: -20px;"> <div style="width: 50%;margin-right: 4px;"> <p style="font-size: 14px;color: white;text-align: left;">Estimated Gas Limit</p> </div> <div style="width: 50%;margin-left: 4px;"> <p id="gas" style="font-size: 14px;color: white;text-align: right;"></p> </div> </div> </div> </div> <div id="error-info" style="display: none;"> <p id="error-message" class="okesip-standard-p" style="margin-top: -10px;text-align: center;font-size: 18px;color: yellow;"></p> <button class="okesip-button-swap" id="swap-button" onclick="cancelSwap()" style="background: transparent;border: 2px solid white;width: 100%;">Cancel</button> </div> <p class="okesip-standard-p" style="text-align:center;">Powered by <a href="https://1inch.exchange" style="text-decoration:none;color:white;" target="_blank"><img src="https://raw.githubusercontent.com/ilhamm24/1inch-easy/main/one-inch.svg" style="height:15px;width:auto;"></a></p> </div> </div>';

window.addEventListener('load', async () => {
    if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        web3.eth.getAccounts((error,result) => {
            if (error) {
                console.log(error);
            }else if(result[0].length >= 42){
                addressWeb3 = result[0];
                document.getElementById("address").innerHTML = result[0];
                $("#address-div").css("display","block");
                var fromTokenAddress = document.getElementById("fromTokenName").getAttribute("name");
                document.getElementById("swap-button").innerHTML = "Approve";
                $("#swap-button").attr("onclick","approveInch()");
            }
        });
    }
});
function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function valueCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

async function getTokenBalance(divId, tokenAddress, walletAddress){
    if(tokenAddress != "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"){
        let getBalance = new web3.eth.Contract(standardAbi, tokenAddress);
        getBalance.methods.balanceOf(walletAddress).call((error, balance) => {
            getBalance.methods.decimals().call((error, decimals) => {
                document.getElementById(divId).innerHTML = parseFloat(balance)/Math.pow(10, parseFloat(decimals));
            });
        });
    }else{
        let getBalance = await web3.eth.getBalance(addressWeb3);
        document.getElementById(divId).innerHTML = parseFloat(getBalance)/Math.pow(10, 18);
    }
}
var addressWeb3;
addressWeb3 = document.getElementById("address-div").innerHTML;
async function connectWallet(){
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            web3.eth.getAccounts((error,result) => {
                if (error) {
                    console.log(error);
                }else{
                    addressWeb3 = result[0];
                    document.getElementById("address").innerHTML = '<a href="https://etherscan.io/address/'+result[0]+'" target="_blank" style="text-decoration:none;color:white;"><img src="https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png" style="height:20px;width:auto;display: inline-block;"> '+result[0]+'</a>';
                    $("#address").css("display","block");
                    document.getElementById("swap-button").innerHTML = "Approve";
                    $("#swap-button").attr("onclick","approveInch()");
                }
            });
        } catch (error) {
            console.log(error);
        }
    }else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        web3.eth.getAccounts((error,result) => {
            if (error) {
                console.log(error);
            } else {
                addressWeb3 = result[0];
                document.getElementById("address").innerHTML = '<a href="https://etherscan.io/address/'+result[0]+'" target="_blank" style="text-decoration:none;color:white;"><img src="https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png" style="height:20px;width:auto;display: inline-block;"> '+result[0]+'</a>';
                $("#address").css("display","block");
                document.getElementById("swap-button").innerHTML = "Approve";
                $("#swap-button").attr("onclick","approveInch()");
            }
        });
    }
}

async function getPriceTempo(fromTokenAddress, toTokenAddress){
    var dummyAmount = 1*Math.pow(10, parseFloat(decimalFrom));
    const priceRequest = new URL("https://api.1inch.exchange/v2.0/quote");
    priceRequest.search = new URLSearchParams({
        fromTokenAddress : fromTokenAddress,
        toTokenAddress : toTokenAddress,
        amount : dummyAmount
    });
    let getPrice = await fetch(priceRequest);
    let dataParse = await getPrice.json();
    var priceTempoFrom = dataParse.fromTokenAmount;
    var priceTempoTo = dataParse.toTokenAmount;
    var gasLimitTempo = dataParse.estimatedGas;
    priceTempo = parseFloat(priceTempoTo)/Math.pow(10, parseFloat(decimalTo));
    document.getElementById("price1").innerHTML = priceTempo.toFixed(7)+" "+nameFrom+"/"+nameTo;
    document.getElementById("gas").innerHTML = gasLimitTempo+" gwei";
}

var decimalFrom;var decimalTo;var nameFrom;var nameTo;var priceTempo;
async function swap(fromTokenAddress,toTokenAddress){
    var errors;
    const priceRequest = new URL("https://api.1inch.exchange/v2.0/tokens");
    priceRequest.search = new URLSearchParams({});
    let dataTokens = await fetch(priceRequest);
    let dataSwap = await dataTokens.json();
    let dataSearch = JSON.stringify(dataSwap);
    if(dataSearch.search(fromTokenAddress) == -1){
        errors = "Input token address not found! Please contact website owner.";
        $("#success-info").css("display","none");
        $("#error-info").css("display","block");
        $("#modalSwap").css("display","block");
        document.getElementById("error-message").innerHTML = errors;
    }else if(dataSearch.search(toTokenAddress) == -1){
        errors = "Output token address not found! Please contact website owner.";
        $("#success-info").css("display","none");
        $("#error-info").css("display","block");
        $("#modalSwap").css("display","block");
        document.getElementById("error-message").innerHTML = errors;
    }else{
        const priceRequest = new URL("https://api.1inch.exchange/v2.0/quote");
        priceRequest.search = new URLSearchParams({
            fromTokenAddress : fromTokenAddress,
            toTokenAddress : toTokenAddress,
            amount : 1
        });
        let getData = await fetch(priceRequest);
        let data = await getData.json();
        decimalFrom = data.fromToken.decimals;
        decimalTo = data.toToken.decimals;
        nameFrom = data.fromToken.symbol;
        nameTo = data.toToken.symbol;
        document.getElementById("fromTokenName").innerHTML = '<img src="https://tokens.1inch.exchange/'+fromTokenAddress+'.png" style="height:20px;width:auto;"> '+nameFrom;
        document.getElementById("toTokenName").innerHTML = '<img src="https://tokens.1inch.exchange/'+toTokenAddress+'.png" style="height:20px;width:auto;"> '+nameTo;
        $("#fromTokenName").attr("name",fromTokenAddress);
        $("#toTokenName").attr("name",toTokenAddress);
        $("#success-info").css("display","block");
        $("#error-info").css("display","none");
        $("#modalSwap").css("display","block");
        getPriceTempo(fromTokenAddress,toTokenAddress);
        if(fromTokenAddress == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && $('#address-div').is(":visible") && addressWeb3 != ""){
            document.getElementById("swap-button").innerHTML = "Swap";
            $("#swap-button").attr("onclick","swapInch()");
        }
    }
    if($('#address-div').is(":visible") && addressWeb3 != ""){
        getTokenBalance("tokenFromBalance", fromTokenAddress, addressWeb3);
        document.getElementById("tokenFromTicker").innerHTML = nameFrom;
        getTokenBalance("tokenToBalance", toTokenAddress, addressWeb3);
        document.getElementById("tokenToTicker").innerHTML = nameTo;
    }
}
async function swapInch(){
    const callbackData = new URL("https://api.1inch.exchange/v2.0/swap");
    var amountFrom = document.getElementById("fromTokenAmount").value*Math.pow(10, parseFloat(decimalFrom));
    var fromTokenAddressSwap = document.getElementById("fromTokenName").getAttribute("name");
    var toTokenAddressSwap = document.getElementById("toTokenName").getAttribute("name");
    var amountSwap = document.getElementById("fromTokenAmount").value*Math.pow(10, parseInt(decimalFrom));
    var slippageSwap = document.getElementById("slippagePercent").value;
    callbackData.search = new URLSearchParams({
        fromTokenAddress : fromTokenAddressSwap,
        toTokenAddress : toTokenAddressSwap,
        fromAddress : addressWeb3,
        amount : amountSwap,
        slippage : slippageSwap
    });
    let getDataSwapp = await fetch(callbackData);
    let getDataSwap = await getDataSwapp.json();
    if(!getDataSwap.errors){
        var toSwap = getDataSwap.tx.to;
        var dataSwap = getDataSwap.tx.data;
        var gasPriceSwap = parseInt(getDataSwap.tx.gasPrice);
        var gasLimitSwap = parseInt(getDataSwap.tx.gas)
        var amountSwap = getDataSwap.tx.value*Math.pow(10, parseInt(decimalFrom));
        sendTx("swap", addressWeb3, toSwap, amountSwap, dataSwap, gasPriceSwap, gasLimitSwap);
        $("#swap-button").prop("disabled",true);
        $("#swap-cancel").prop("disabled",true);
        document.getElementById("swap-button").innerHTML = "Pending Approve";
    }else{
        $("#swap-button").prop("disabled",false);
        document.getElementById("swap-button").innerHTML = "Insufficient Gas";
    }
}
async function approveInch(){
    const callbackData = new URL("https://api.1inch.exchange/v2.0/approve/calldata");
    var amountFrom = document.getElementById("fromTokenAmount").value*Math.pow(10, parseFloat(decimalFrom));
    var fromTokenAddress = document.getElementById("fromTokenName").getAttribute("name");
    callbackData.search = new URLSearchParams({
        amount : amountFrom,
        infinity : "true",
        tokenAddress : fromTokenAddress
    });
    let getDataApprovee = await fetch(callbackData);
    let getDataApprove = await getDataApprovee.json();
    var toApprove = getDataApprove.to;
    var dataApprove = getDataApprove.data;
    var gasPriceApprove = parseInt(getDataApprove.gasPrice);
    var amountApprove = getDataApprove.value*Math.pow(10, parseInt(decimalFrom));
    sendTx("approve", addressWeb3, toApprove, amountApprove, dataApprove, gasPriceApprove, 80000);
    $("#swap-button").prop("disabled",true);
    $("#swap-cancel").prop("disabled",true);
    $("#modalSwap").css("display","none");
    $("#modalInfo").css("display","block");
    $("#approve-info").css("display","block");
    document.getElementById("approveToken").innerHTML = nameFrom;
    document.getElementById("swap-button").innerHTML = "Pending Approve";
}
async function sendTx(type, fromAddress, toAddress, amount, dataAbi, gasPriceTx, gasLimitTx){
    web3.eth.getAccounts(function(error, result) {
        web3.eth.sendTransaction({
            from: fromAddress,
            to: parseFloat(toAddress),
            value:  parseFloat(amount), 
            data: dataAbi,
            gasPrice : gasPriceTx,
            gas : gasLimitTx
        }, function(err, transactionHash) {
            if (!err){
                if(type != "approve"){
                    $("#transactionHashApprove").css("display","block");
                    document.getElementById("approveHash").innerHTML = transactionHash;
                }else{
                    $("#transactionHashSwap").css("display","block");
                    document.getElementById("swapHash").innerHTML = transactionHash;
                }
                createCookie(type, transactionHash, 365);
            }else if(err){
                $("#swap-button").prop("disabled",false);
                $("#swap-cancel").prop("disabled",false);
                $("#modalSwap").css("display","block");
                $("#modalInfo").css("display","none");
                $("#approve-info").css("display","none");
                $("#swap-info").css("display","none");
                document.getElementById("approveToken").innerHTML = "";
                if(type != "approve"){
                    document.getElementById("swap-button").innerHTML = "Swap";
                }else{
                    document.getElementById("swap-button").innerHTML = "Approve";
                }
            }
        });
    });
}

function inputFrom(){
    var amountTempo = document.getElementById("fromTokenAmount").value;
    var sumTempo = parseFloat(amountTempo)*parseFloat(priceTempo);
    document.getElementById("toTokenAmount").value = sumTempo;
    var fromTokenBalance = document.getElementById("tokenFromBalance").innerHTML;
    if(amountTempo > fromTokenBalance){
        $("#swap-button").prop("disabled",true);
        document.getElementById("swap-button").innerHTML = "Insufficient Fund";
    }else{
        $("#swap-button").prop("disabled",false);
        document.getElementById("swap-button").innerHTML = "Swap";
    }
}
function inputTo(){
    var amountTempo = document.getElementById("toTokenAmount").value;
    var sumTempo = parseFloat(amountTempo)/parseFloat(priceTempo);
    document.getElementById("fromTokenAmount").value = sumTempo;
    var fromTokenBalance = document.getElementById("tokenFromBalance").innerHTML;
    if(sumTempo > fromTokenBalance){
        $("#swap-button").prop("disabled",true);
        document.getElementById("swap-button").innerHTML = "Insufficient Fund";
    }else{
        $("#swap-button").prop("disabled",true);
        document.getElementById("swap-button").innerHTML = "Swap";
    }
}
function copyAmountFrom(){
    document.getElementById("fromTokenAmount").value = document.getElementById("tokenFromBalance").innerHTML;
}
function copyAmountTo(){
    document.getElementById("toTokenAmount").value = document.getElementById("tokenToBalance").innerHTML;
}
function cancelSwap(){
    $('#modalSwap').css('display','none');
}

setInterval(async function(){
    if($('#modalSwap').is(":visible")){
        var fromTokenAddress = document.getElementById("fromTokenName").getAttribute("name");
        var toTokenAddress = document.getElementById("toTokenName").getAttribute("name");
        var dummyAmount = 1*Math.pow(10, parseFloat(decimalFrom));
        const priceRequest = new URL("https://api.1inch.exchange/v2.0/quote");
        priceRequest.search = new URLSearchParams({
            fromTokenAddress : fromTokenAddress,
            toTokenAddress : toTokenAddress,
            amount : dummyAmount
        });
        let getPrice = await fetch(priceRequest);
        let dataParse = await getPrice.json();
        var priceTempoFrom = dataParse.fromTokenAmount;
        var priceTempoTo = dataParse.toTokenAmount;
        var gasLimitTempo = dataParse.estimatedGas;
        priceTempo = parseFloat(priceTempoTo)/Math.pow(10, parseFloat(decimalTo));
        document.getElementById("price1").innerHTML = priceTempo.toFixed(7)+" "+nameFrom+"/"+nameTo;
        document.getElementById("gas").innerHTML = gasLimitTempo+" gwei";
    }
},25000);
setInterval(async function(){
    if(valueCookie("approve") != "" && $('#swap-button').is(":disabled") && $('#swap-cancel').is(":disabled") && document.getElementById("swap-button").innerHTML == "Pending Approve" && $('#transactionHashApprove').is(":visible") && $('#approve-info').is(":visible") && document.getElementById("approveHash").innerHTML != ""){
        var getStatus = web3.eth.getTransactionReceipt(valueCookie("approve"));
        getStatus = JSON.parse(getStatus);
        if(getStatus.status == true){
            $("#swap-button").prop("disabled",false);
            $("#swap-button").attr("onclick","swapInch()");
            document.getElementById("swap-button").innerHTML = "Swap";
        }
    }else if($('#swap-button').is(":disabled") && $('#swap-cancel').is(":disabled") && document.getElementById("swap-button").innerHTML == "Pending Swap" && $('#transactionHashSwap').is(":visible") && $('#swap-info').is(":visible") && document.getElementById("swapHash").innerHTML != ""){
        var getStatus = web3.eth.getTransactionReceipt(valueCookie("approve"));
        getStatus = JSON.parse(getStatus);
        if(getStatus.status == true){
            if(fromTokenAddress == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" && $('#address-div').is(":visible") && addressWeb3 != ""){
                $("#swap-button").prop("disabled",false);
                $("#swap-cancel").prop("disabled",false);
                document.getElementById("swap-button").innerHTML = "Swap";
                $("#swap-button").attr("onclick","swapInch()");
            }else{
                $("#swap-button").prop("disabled",false);
                $("#swap-cancel").prop("disabled",false);
                document.getElementById("swap-button").innerHTML = "approve";
                $("#swap-button").attr("onclick","approveInch()");
            }
        }
    }
},1500);
