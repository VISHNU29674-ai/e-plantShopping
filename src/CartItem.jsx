import React from "react";

const CartItem = ({
  cartItems,
  onIncrement,
  onDecrement,
  onRemove,
  onContinueShopping,
  onCheckout,
}) => {
  const totalCost = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.cost.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div style={{
      background: "#fff",
      borderRadius: "8px",
      margin: "30px auto",
      maxWidth: "600px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: "32px",
      textAlign: "center"
    }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "32px" }}>
        Total Cart Amount: ${totalCost}
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
            borderBottom: "1px solid #eee",
            paddingBottom: "16px"
          }}>
            <img src={item.image} alt={item.name} width={80} style={{ marginRight: "24px", borderRadius: "8px" }} />
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3 style={{ margin: "0 0 8px 0" }}>{item.name}</h3>
              <p style={{ margin: "0 0 8px 0" }}>{item.cost}</p>
              <div>
                <button onClick={() => onDecrement(item.name)} disabled={item.quantity <= 1} style={{ marginRight: "8px" }}>
                  -
                </button>
                <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                <button onClick={() => onIncrement(item.name)} style={{ marginLeft: "8px" }}>
                  +
                </button>
              </div>
              <p style={{ margin: "8px 0" }}>
                Total: ${parseFloat(item.cost.replace("$", "")) * item.quantity}
              </p>
              <button onClick={() => onRemove(item.name)} style={{
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "4px 12px",
                cursor: "pointer"
              }}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <div style={{ marginTop: "32px" }}>
        <button
          onClick={onContinueShopping}
          style={{
            background: "#43b864",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "12px 32px",
            marginRight: "16px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Continue Shopping
        </button>
        <button
          onClick={onCheckout}
          style={{
            background: "#43b864",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "12px 32px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;