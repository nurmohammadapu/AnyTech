import heroimg from '../assets/icons/hero.avif'


export default function SecureSection() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex gap-12 items-center">
          <div className="space-y-6">
            <p className="text-blue-500 font-medium">POWERING THE FUTURE OF FINANCE</p>
            <p className="text-4xl font-bold text-[#1a365d] lg:text-5xl">Uncovering new ways to delight customers</p>
            <div className='block mx-auto max-w-[317px] max-h-[485px] object-cover md:hidden'>
            <img src={heroimg} alt="heroimg" />
            </div>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
              AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
              </p>
              <p>
              Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
              </p>
            </div>
          </div>
          <div className='hidden max-w-[426px] max-h-[517px] object-cover md:block '>
                <img src={heroimg} alt="heroimg" />
          </div>
        </div>
      </div>
    )
  }
  
  