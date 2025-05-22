const CartItems = (props) => {
  return (
    <div className="cursor-pointer group hover:bg-white hover:text-gray-800 max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:scale-110 transition-all duration-500 ease-in-out">
      <img
        className="w-full h-48 object-cover"
        src={props.imgUrl}
        alt="Sunset in the mountains"
      />
      <div className="p-4">
        <div className="font-semibold text-xl mb-2 tracking-wider">
          {props.name}
        </div>
        <div className="bg-teal-500 w-[50px] h-[1px] group-hover:w-[100px] transition-all duration-500"/>
        <p className="text-gray-200 text-sm mt-1 group-hover:text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>

        <div className="mt-3 flex justify-between text-sm">
          <span className="group-hover:bg-gray-700/80 group-hover:text-gray-200 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            💰 {props.price.toLocaleString()}
          </span>
          <span className="group-hover:bg-gray-700/80 group-hover:text-gray-200 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            📦 {props.qty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
