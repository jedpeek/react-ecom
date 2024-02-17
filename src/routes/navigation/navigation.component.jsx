// import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

// const Navigation = () => {
//   const currentUser = useSelector(selectCurrentUser);
//   const isCartOpen = useSelector(selectIsCartOpen);

//   return (
//     <Fragment>
//       <NavigationContainer>
//         <LogoContainer to="/">
//           <CrwnLogo className="hover:scale-110 duration-200" />
//         </LogoContainer>
//         <NavLinks>
//           <NavLink
//             to="/shop"
//             className="text-2xl uppercase font-bold hover:underline"
//           >
//             SHOP
//           </NavLink>
//           <NavLink
//             to="/"
//             className="text-2xl uppercase font-bold hover:underline"
//           >
//             Tailwind
//           </NavLink>
//           {currentUser ? (
//             <NavLink
//               as="span"
//               onClick={signOutUser}
//               className="text-2xl uppercase font-bold hover:underline"
//             >
//               SIGN OUT
//             </NavLink>
//           ) : (
//             <NavLink to="/auth" className="text-2xl font-bold hover:underline">
//               SIGN IN
//             </NavLink>
//           )}
//           <CartIcon />
//         </NavLinks>
//         {isCartOpen && <CartDropdown />}
//       </NavigationContainer>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Hero from "../../components/Banner/banner";

const products = [
  {
    name: "Hats",
    description: "",
    href: "/shop/hats",
    icon: ChartPieIcon,
  },
  {
    name: "Jackets",
    description: "",
    href: "/shop/jackets",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Sneakers",
    description: "",
    href: "/shop/sneakers",
    icon: FingerPrintIcon,
  },
  {
    name: "Womens",
    description: "",
    href: "/shop/womens",
    icon: SquaresPlusIcon,
  },
  {
    name: "Mens",
    description: "",
    href: "/shop/mens",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">React Ecom</span>
            <CrwnLogo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 uppercase">
              Collections
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900 uppercase"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/shop"
            className="text-sm font-semibold leading-6 text-gray-900 uppercase"
          >
            Shop
          </Link>
          <Link
            to="/checkout"
            className="text-sm font-semibold leading-6 text-gray-900 uppercase"
          >
            <span className="flex center">Checkout</span>
          </Link>
        </Popover.Group>

        {currentUser ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/">
              <span
                onClick={signOutUser}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                SIGN OUT
              </span>
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/auth"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              SIGN IN <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Categories
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Link
                            to={item.href}
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </Link>
              </div>
              <div className="py-6">
                {currentUser ? (
                  <span
                    onClick={signOutUser}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    SIGN OUT
                  </span>
                ) : (
                  <Link
                    to="/auth"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    SIGN IN
                  </Link>
                )}
                <Link
                  to="/checkout"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <span className="flex center">
                    CHECKOUT <CartIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Outlet />
    </header>
  );
}
