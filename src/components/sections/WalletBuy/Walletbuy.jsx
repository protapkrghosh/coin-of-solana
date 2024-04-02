import configSettings from '@/settings.json';
import forgeImg from '@/assets/banner/Designer.png';
import bannerImg from '@/assets/banner/Frame 65.png'
import Container from '../Container/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, Transaction, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import React, { useCallback, useRef } from 'react';


let thelamports = 0;
let theWallet = configSettings.siteSettings.walletAddress
let loading = false

const Walletbuy = () => {
  const valueRef = useRef('')
  let sendLamports = 0;

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    // this.setState({ loading: true });
    // loading = true
    if (!publicKey) throw new WalletNotConnectedError();
    connection.getBalance(publicKey).then((bal) => {
        console.log(bal/LAMPORTS_PER_SOL);

    });
    sendLamports = LAMPORTS_PER_SOL*valueRef.current.value;
    // console.log("lamports sending: from:{} to:{} Lamp{}", publicKey.toBase58(), theWallet, sendLamports)
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(theWallet),
            lamports: sendLamports,
        })
    );
    const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight }
    } = await connection.getLatestBlockhashAndContext();
    try {
         const signature = await sendTransaction(transaction, connection, { minContextSlot });
    } catch (e) {
        // alert("Cancelled")
        // return e
    } finally {
        try {
            await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
        } catch(e){
            alert("Transaction not confitmed")
        }
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <div className='bg-gradient-to-r from-[#191610] to-[#191610] -mb-1' id='home'>
      <Container>
        <div style={{ backgroundImage: `url(${forgeImg})` }} className='bg-no-repeat bg-left pt-52 pb-16 -mt-[140px] lg:-mt-[125px]'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-0'>
                <div className='w-full lg:w-[60%] xl:w-[55%] 2xl:w-[52%] mt-10 lg:mt-0'>
                    <div>
                        {/* <p className='text-white text-[34px] md:text-[50px] xl:text-[56px] 2xl:text-[64px] font-normal -mb-2 md:-mb-5'>The Community</p> */}

                        <h1 className='text-[34px] md:text-[50px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] font-bold'><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1CB18] to-[#E77962]">Presale is Live!</span></h1>
                        <li>
                        <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
                            <div className="w-full top-0 left-0 z-10">
                                <div className="w-full lg:w-[100%] xl:w-[75%] 2xl:w-[52%] mt-10 lg:mt-0 p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#E77962] rounded-[30px] mr-10">
                                    <div className="text-[#fff] bg-[#1c1811] hover:bg-[#352d20] xl:w-[100%] 2xl:text-[18px] px-6 2xl:px-7 py-[15px] rounded-[30px]">
                                         <Box className='items-center left-[130px] text-[#CBC2C2] text-[15px] lg:text-[16px] xl:text-[18px] font-normal mt-5 xl:mt-8 mb-8 xl:mb-14'>
                                            <p className='pt-7 ml-2 mr-2 mb-5 text-white text-[34px] md:text-[20px] xl:text-[20px] 2xl:text-[64px] font-normal'>Book $EGOM with $SOL</p>
                                                <div class="ml-12 mr-12 pt-10 pb-5 justify-center items-center">
                                                <div className="lg:w-[100%] xl:w-[100%] 2xl:w-[100%] mt-10 lg:mt-0 bg-gradient-to-r from-[#D1CB18] to-[#E77962]" >
                                                    <TextField id="outlined-required"
                                                                font="#CBC2C2"
                                                                label="Enter SOL"
                                                                type="number"
                                                                variant='filled'
                                                                fullWidth
                                                                inputRef={valueRef}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }} />

                                                </div>
                                            </div>
                                                <div class="pt-10">
                                                    <div className="w-full lg:w-[100%] xl:w-[100%] 2xl:w-[100%] mt-10 lg:mt-0 p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#E77962] rounded-[30px] mr-10">
                                                        <button type="submit" className="w-full text-[#fff] bg-[#1c1811] hover:bg-[#352d20] xl:w-[100%] 2xl:text-[18px] px-6 2xl:px-7 py-[15px] rounded-[30px]"onClick={onClick} disabled={loading}>
                                                            {loading && (
                                                                <i
                                                                className="fa fa-refresh fa-spin"
                                                                style={{ marginRight: "5px" }}
                                                                />
                                                            )}
                                                            {loading && <span>Confirming..</span>}
                                                            {!loading && <span>Buy Now</span>} </button>
                                                    </div>
                                                </div>
                                        </Box>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </li>
                        <p className='text-[#CBC2C2] text-[15px] lg:text-[16px] xl:text-[18px] font-normal mt-5 xl:mt-8 mb-8 xl:mb-14'>If you cannot buy you can send SOL to "FBFPXbrTncccBa52i82HakaqFc9BxSNoukndabHix8i1" and you will get airdropped before launch</p>
                    </div>
                </div>
                {/* Banner Image */}
                <div className='w-full lg:w-[40%] xl:w-[45%] 2xl:w-[48%] lg:-mr-10 xl:-mr-16 2xl:-mr-10'>
                    <img src={bannerImg} alt="Image" className='w-[400px] xl:w-[500px] 2xl:w-auto 2xl:scale-105 mx-auto lg:mx-0' />
                </div>
            </div>
            </div>
      </Container >
    </div >
  );
};

export default Walletbuy;