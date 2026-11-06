import { useState } from "react";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { mockCart } from "../../utils/mockData";
import { formatPrice } from "../../utils/format";

const CartContents = () => {
  const [items, setItems] = useState(mockCart);

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i,
      ),
    );
  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  if (items.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">Your cart is empty.</p>
    );
  }

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-between border-b py-4"
        >
          <div className="flex items-start">
            <img
              src={item.image}
              alt={item.name}
              className="mr-4 h-24 w-20 rounded object-cover"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {item.size} | Color: {item.color}
              </p>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => changeQty(item.id, -1)}
                  aria-label="Decrease quantity"
                  className="rounded border px-2 py-1 text-xl font-medium"
                >
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  onClick={() => changeQty(item.id, 1)}
                  aria-label="Increase quantity"
                  className="rounded border px-2 py-1 text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-medium">
              {formatPrice(item.price * item.quantity)}
            </p>
            <button
              onClick={() => remove(item.id)}
              aria-label={`Remove ${item.name}`}
            >
              <RiDeleteBin3Fill className="mt-2 h-5 w-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between py-4 text-lg font-semibold">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
    </div>
  );
};
export default CartContents;
