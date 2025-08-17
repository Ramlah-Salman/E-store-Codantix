import { createContext, useContext, useMemo, useReducer, useEffect } from "react";

const CartCtx = createContext();
const LS_KEY = "cart_v1";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const { product, qty } = action;
      const next = { ...state };
      const prev = next.items[product.id]?.qty || 0;
      next.items[product.id] = { product, qty: prev + qty };
      return next;
    }
    case "remove": {
      const next = { ...state };
      delete next.items[action.id];
      return next;
    }
    case "set": {
      const next = { ...state };
      if (action.qty <= 0) delete next.items[action.id];
      else next.items[action.id] = { ...next.items[action.id], qty: action.qty };
      return next;
    }
    case "reset":
      return { items: {} };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    { items: {} },
    (initial) => {
      try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || "null");
        return saved || initial;
      } catch {
        return initial;
      }
    }
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }, [state]);

  const totals = useMemo(() => {
    let totalQty = 0;
    let subtotal = 0;
    for (const k of Object.keys(state.items)) {
      const { product, qty } = state.items[k];
      totalQty += qty;
      subtotal += product.price * qty;
    }
    const shipping = subtotal > 0 ? 7 : 0;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = subtotal + tax + shipping;
    return { totalQty, subtotal, tax, shipping, total };
  }, [state]);

  const api = {
    add: (product, qty = 1) => dispatch({ type: "add", product, qty }),
    remove: (id) => dispatch({ type: "remove", id }),
    set: (id, qty) => dispatch({ type: "set", id, qty }),
    reset: () => dispatch({ type: "reset" }),
    items: state.items,
    ...totals,
  };

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}

export function useCart() {
  return useContext(CartCtx);
}
