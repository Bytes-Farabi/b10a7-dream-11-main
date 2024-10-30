import bannerLogo from '../../../public/assets/banner-main.png'
const Banner = ({handleCredit}) => {
  return (
    <div>
      {/* <div className="bg-[url('https://ibb.co/mXx2BWH')] w-full h-32">
        <h1>Hello</h1>
            </div> */}

      <div
        style={{
          backgroundImage: `url('/assets/banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 16,
          marginTop: 25
        }}
      >

        <div className="banner-content p-10 flex flex-col items-center">
          <img src={bannerLogo} alt="bannerLogo"  className=''/>
          <div className='my-5'>
            <h1 className='font-bold text-3xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='font-medium text-[#b3b3b3]'>Beyond Boundaries Beyond Limits</p>
          </div>
          <div className='inline-block border border-[#E7FE29] rounded-2xl'>
            <button onClick={()=>handleCredit()} className='btn bg-[#E7FE29] text-black font-medium m-2'>Claim Free Credits</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Banner; 