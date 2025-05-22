import { div } from "framer-motion/client";
import MainLayout from "../components/layouts/MainLayout";
import CartItems from "./CartItems";
import { motion } from "framer-motion";

const products = [
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2022/08/31/15/06/seoul-7423591_640.jpg",
    name: "Seoul",
    price: 20000,
    qty: 4,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/04/20/10/19/shanghai-730891_640.jpg",
    name: "Shanghai",
    price: 25000,
    qty: 3,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2019/11/10/16/12/the-island-4616178_640.jpg",
    name: "Koh Samui",
    price: 10000,
    qty: 4,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2014/09/06/14/03/venice-436932_640.jpg",
    name: "Venice",
    price: 40000,
    qty: 2,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2020/06/24/06/48/china-5335057_640.jpg",
    name: "China",
    price: 24900,
    qty: 5,
  },
  {
    imgUrl:
      "https://cdn.pixabay.com/photo/2015/10/20/03/39/singapore-997181_640.jpg",
    name: "Singapore",
    price: 15000,
    qty: 3,
  },
];

const Cart = () => {
  return (
    <MainLayout>
      <motion.div 
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-900/70 backdrop-blur-xl text-white p-6 rounded-lg shadow-xl">
          <h1 className="text-2xl font-bold text-left animate-pulse mb-6">
            🛒 Wut Cart
          </h1>

          <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
                transition: {
                    staggerChildren: 0.1
                }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <motion.div key={index}
              variants={{
                hidden: {opacity: 0, scale: 0.95},
                visible: {opacity: 1, scale: 1}
              }}
              transition={{duration: 0.4, ease: "easeOut"}}
              >
                <CartItems
                imgUrl={item.imgUrl}
                name={item.name}
                price={item.price}
                qty={item.qty}
              />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Cart;
