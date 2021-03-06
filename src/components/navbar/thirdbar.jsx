import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { FaBars, FaPlus, FaSearch } from 'react-icons/fa';


const navigation = [
  { name: 'Home', href: '/', current: true , width: "80px"},
  { name: 'About', href: '/aboutpage', current: false, width: "90px" },
  { name: 'Campus', href: '/campus', current: false, width: "100px" },
  { name: 'Academics', href: '/academics', current: false, width: "130px" },
  { name: 'Placements', href: '/placements', current: false, width: "150px" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function ThirdBar() {
  
  return (
    <Disclosure as="nav" className="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XIcon className="block h-6 w-6" aria-hidden="true" />
                    <h2 className="block h-6 w-6" aria-hidden="true">
                      <FaPlus style={{"font-size" : "23px", "transform" : "rotate(45deg)"}} />
                    </h2>
                  ) : (
                    // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    <h2 className="block h-6 w-6" aria-hidden="true">
                      <FaBars style={{"font-size" : "23px"}} />
                    </h2>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                         <div className="dropdown" style={{"width" : item.width}}>
                         {/* <a
                           key={item.name}
                           href={item.href}
                           className={classNames(
                             item.current ? 'bg-gray-700 border-2 border-gray-600 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                             'px-3 py-2 rounded-md text-sm font-medium dropdown inline cursor-pointer'
                           )}
                           aria-current={item.current ? 'page' : undefined}
                         >
                           {item.name}
                         </a>   */}
                         {item.name}
                          <div className="dropdown-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, iusto.</p>
                          </div>
                         
                         </div>                         
                    ))}
                  </div>
                </div>
              </div>
              
              <div class="flex justify-evenly items-center px-4 sm:px-6 lg:px-8">
                 <input type="text" class="h-8 w-56 pr-8 pl-5 rounded-2xl z-0" placeholder='search' />
                 <button style={{"background" : "transparent","border" : "none","font-size": "15px", "position" :"absolute", "transform" :"translate(90px)", "color" :"black"}}>
                   <FaSearch />
                  </button>
              <div> 

            </div>
          </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link to={item.href}>
                    <Disclosure.Button
                       key={item.name}
                       as="a"
                       href={item.href}
                       className={classNames(
                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                         'block px-3 py-2 rounded-md text-base font-medium'
                       )}
                       aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                    </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )

}
